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
    { id: 2, title: 'Git 小技巧', category: 'others', date: 1462776305 },
    { id: 3, title: 'JavaScript 变量作用域、this、闭包', category: 'javascript', date: 1462950925 },
    { id: 4, title: '测试框架：ava', category: 'nodejs', date: 1463365165 },
    { id: 5, title: 'JavaScript Array 常用属性和方法', category: 'javascript', date: 1464072499 }
];

let GHAddr = 'https://github.com/Dongss/dogs/tree/master/';

exports.CategoryMap = CategoryMap;
exports.PostsMap = PostsMap;
exports.GHAddr = GHAddr;
