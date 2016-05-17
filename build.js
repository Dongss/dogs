'use strict';

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');
const marked = require('marked');
const ejs = require('ejs');
const moment = require('moment');

const Map = require('./posts/map');
const CategoryMap = Map.CategoryMap;
const PostsMap = Map.PostsMap;
const GHAddr = Map.GHAddr;

// Marked init
var renderer = new marked.Renderer();
renderer.heading = function (text, level) {
    // 支持中文标题的目录生成
    let escapedText = text.toLowerCase().replace(/\ +/g, '-');
    let html = `<h${level} id="${escapedText}">${escapedText}</h${level}>`;
    return html;
};

marked.setOptions({
    tables: true,
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

    let filePath = path.join('posts', postInfo.category, filename + '.md');
    let tocResult = childProcess.execSync('doctoc ' + filePath, {
        encoding: 'utf8'
    });
    console.log('DocToc: ', tocResult);

    fs.readFile(path.join('views', 'post.ejs'), (err, data) => {
        if (err) {
            console.error('Read ejs file error: ', err);
            process.exit(-1);
        }

        let tplStr = data.toString();

        fs.readFile(path.join('posts', postInfo.category, filename + '.md'), 'utf8', (err, data) => {
            if (err) {
                console.error('Read md file error: ', err);
                process.exit(-1);
            }

            let mdStr = data.toString();
            let html = ejs.render(tplStr, {
                postInfo: postInfo,
                content: marked(mdStr, { renderer: renderer })
            }, {
                filename: 'mdToHtml'
            });

            // 将 gh-pages 分支作为 submodule，将 html 文件写入 submodule
            fs.writeFile(path.join('dogs', 'posts', filename + '.html'), html, 'utf8', err => {
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
