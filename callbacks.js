let posts = [
    {title: "post1", body:"this is post1", CreatedAt: new Date()},
    {title: "post2", body:"this is post2", CreatedAt: new Date()}
]

function displayposts(){
    let lastedited = new Date();
    document.head.innerHTML = `<title>callback</title>`;
    setInterval(()=>{
        let output = '';
        posts.forEach((post)=>{
            let currdate = new Date()
            let createddate = post.CreatedAt
            output += `<li> ${post.title} ${Math.round((currdate - createddate)/1000)}seconds ago </li>`
        })
        output += `<h3>${lastEditedInSecondsAgo(lastedited)}</h3>`;
        document.body.innerHTML = output ; 
    },1000)
}


function createpost(post,callback1,callback2){
    setTimeout(()=>{
        post.CreatedAt = new Date();
        posts.push(post)
        callback1();
        let lastedited = new Date()
        // callback2(lastedited);
    },2000)   
}

function create4thPost(post,callback){
    setTimeout(()=>{
        post.CreatedAt = new Date();
        callback(post,displayposts,lastEditedInSecondsAgo);
    },0)
}

function lastEditedInSecondsAgo(lastedited){
    // let h3 = document.createElement('h3')
    // setInterval (()=>{
    //     let currdate = new Date();
    //     h3.innerHTML = `<h3>last Edited ${Math.round((currdate - lastedited)/1000)} seconds ago</h3>`;
    //     document.body.appendChild(h3);
    // },1000)
    let currdate = new Date();
    return `last Edited ${Math.round((currdate - lastedited)/1000)} seconds ago`
}
// createpost({title: "post3", body:"this is post3"},displayposts,lastEditedInSecondsAgo);
create4thPost({title: "post3", body:"this is post3"},createpost);
create4thPost({title: "post4", body:"this is post4"},createpost);