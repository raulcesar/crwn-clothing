const fetch = require('node-fetch');
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(resp => {
//         return resp.json();
//     })
//     .then(users => {
//         const user = users[0];
//         console.log(user);
//         return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
//     })
//     .then(resp => {
//         return resp.json();
//     })
//     .then(posts => {
//         console.log(posts);
//     });


const myAsyncFunc = async () => {
    const usersResp = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await usersResp.json();
    const user = users[0];
    console.log(user);

    const postsResp = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    const posts = await postsResp.json();
    console.log(posts);
};
myAsyncFunc();
console.log('e este');
