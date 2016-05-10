'use strict';

const fs = require('fs');
const path = require('path');
const marked = require('marked');
const ejs = require('ejs');
const moment = require('moment');

const Map = require('./posts/map');
const CategoryMap = Map.CategoryMap;
const PostsMap = Map.PostsMap;
const GHAddr = Map.GHAddr;

marked.setOptions({
    gfm: true,
    breaks: true,
    tables: true
});

var main = function(filename) {
    filename = parseInt(filename, 10);
    let postInfo = PostsMap.find(post => post.id === filename);
    postInfo.categoryName = CategoryMap[postInfo.category];
    postInfo.date = moment.unix(postInfo.date).format('YYYY-MM-DD');
    postInfo.link = GHAddr + 'posts/' + postInfo.category + '/' + postInfo.id + '.md';

    fs.readFile(path.join('views', 'post.ejs'), (err, data) => {
        if (err) {
            console.error('Read ejs file error: ', err);
            process.exit(-1);
        }

        let tplStr = data.toString();

        fs.readFile(path.join('posts', postInfo.category, filename + '.md'), (err, data) => {
            if (err) {
                console.error('Read md file error: ', err);
                process.exit(-1);
            }

            let mdStr = data.toString();
            let html = ejs.render(tplStr, {
                postInfo: postInfo,
                content: marked(mdStr)
            }, {
                filename: 'mdToHtml'
            });

            fs.writeFile(path.join('dogs', 'posts', filename + '.html'), html, {
                encoding: 'utf8',
                flag: 'w'
            }, err => {
                if (err) {
                    console.error('Write file error: ', err);
                } else {
                    console.info('Info: [', filename, '] built');
                }
            });
        });
    });
};

var deployAll = function() {
    PostsMap.forEach(post => {
        main(post.id);
    });   
};

var help = function() {
    console.log('node deploy.js [fileName]');
    console.log('Example: node deploy.js 1');
    console.log('Example for all: node deploy.js all');
};

if (require.main === module) {
    process.on('SIGINT', function() {
        console.warn('Got a SIGINT. Building is terminated');
        process.exit(-1);
    });

    if (process.argv.length !== 3) {
        help();
        process.exit(-1);
    }

    var filename = process.argv[2];
    if (filename === 'all') {
        deployAll();
    } else {
        main(filename);
    }
}
