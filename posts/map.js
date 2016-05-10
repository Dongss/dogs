'use strict';

let CategoryMap = {
    javascript: 'JavaScript',
    nodejs: 'Node.js',
    web: 'Web',
    ops: 'OPS',
    others: 'Others'
};

let PostsMap = [
    { id: 0, title: '千里之行', category: 'others', date: 1457873783 },
    { id: 2, title: 'Git 小技巧', category: 'others', date: 1462776305 }
];

let GHAddr = 'https://github.com/Dongss/dogs/tree/master/';

exports.CategoryMap = CategoryMap;
exports.PostsMap = PostsMap;
exports.GHAddr = GHAddr;
