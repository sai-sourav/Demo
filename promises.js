let posts = [
    {title: "post1", body:"this is post1", CreatedAt: new Date()},
    {title: "post2", body:"this is post2", CreatedAt: new Date()}
]

function displayposts(){
    setInterval(()=>{
        let output = '';
        posts.forEach((post)=>{
            output += `<li> ${post.title} </li>`
        })
        document.body.innerHTML = output ; 
    },1000)
}

function createPost(post) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve()
            } else {
                reject('Error: something went wrong')
            }
        },1000)
    });
}

function deletepost(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (posts.length > 0){
                posts.pop()
                resolve();
            } else{
                reject("Error: can't delete post, posts are empty")
            }
        },1000)
    })
}

// createPost({title: "post3", body:"this is post3"})
// .then(displayposts)
// .catch(err => console.log(err));

// deletepost().catch(err => console.log(err));
// deletepost().catch(err => console.log(err));
// deletepost().catch(err => console.log(err));
// deletepost().catch(err => console.log(err));

// createPost({title: "post4", body:"this is post4"})
// .then(()=>{
//     displayposts();
//     deletepost().then(()=>{
//         displayposts()
//     })
//     .catch(err => console.log(err))
// })
// .catch(err => console.log(err));

/// pormise.all

const updateLastUserActivityTime = Promise.resolve(`lastActivityTime of the user ${new Date}`)
//////////////
// const promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) => {
//     setTimeout(resolve, 2000, 'Goodbye')
// });
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));
//////////////

Promise.all([createPost({title: "post4", body:"this is post4"}),updateLastUserActivityTime])
.then(([createpostres,useractivityres]) => {
    for(i=0; i<posts.length; i++){
        console.log(posts[i])
    }
    console.log(useractivityres)
    deletepost().then(()=>{
        for(i=0; i<posts.length; i++){
            console.log(posts[i])
        }
    })
})

///Why on Earth do we need promise.all ?
// we need promise.all, if we want execute something, when only all the promises are resolved.

// Write a short answer on callback vs promises.
// callbacks are used async execution, the callbacks are executed no matter the previous function is worked or not worked.
// promises are used async execution, we can use promises to execute something on condition of of the previous function is worked or not worked.