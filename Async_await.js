let posts = [
    {title: "post1", body:"this is post1", CreatedAt: new Date()},
    {title: "post2", body:"this is post2", CreatedAt: new Date()}
]
console.log('person1: shows ticket');
console.log('person2: shows ticket');

// const promisewifebringingtickets = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        resolve('ticket')
//     },3000)
// });

// const getpopcorn = promisewifebringingtickets.then((t) => {
//     console.log(`wife: im hungry`);
//     return new Promise((resolve,reject) => resolve(`${t} popcorn`) )
// });

// const getbutter = getpopcorn.then((t) => {
//     console.log(`wife: i need butter`);
//     return new Promise((resolve,reject) => resolve(`${t} butter`))
// });

// getbutter.then((t) => console.log(t));

const premovie = async () => {
    const promisewifebringingtickets = new Promise((resolve, reject) => {
            setTimeout(() => resolve('ticket') ,3000)
    });

    const getpopcorn = new Promise((resolve,reject) => resolve(`popcorn`))

    const getbutter = new Promise((resolve,reject) => resolve(`butter`))

    const getColdDrinks = new Promise((resolve,reject) => resolve(`cooldrinks`))

    let ticket = await promisewifebringingtickets;
    // console.log(`wife: i got ${ticket}`);
    // console.log(`wife: im hungry`);

    // let popcorn = await getpopcorn;
    // console.log(`husband: i got ${popcorn}`)
    // console.log(`wife: i need butter`);

    // let butter = await getbutter;
    // console.log(`husband: i got ${butter}`)

    // let cooldrinks = await getColdDrinks;
    // console.log(`husband: i got ${cooldrinks}`)

    /// using Promise.all + await
    let [popcorn, butter, coke] = await Promise.all([getpopcorn, getbutter, getColdDrinks])

    return ticket;

};
premovie().then((m) => console.log(m))
console.log('person4: shows ticket');
console.log('person5: shows ticket');


//////////

function createPost(post) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = true;

            if(!error) {
                resolve("creation successfull")
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
                resolve("deletion successfull");
            } else{
                reject("Error: can't delete post, posts are empty")
            }
        },1000)
    })
}

const crud_posts = async(post) => {
    let creates;
    try{
        creates = await createPost(post);
    } catch(e) {
        creates = e;
    }
    
    for(i=0; i<posts.length; i++){
        console.log(posts[i])
    }

    let deletes;
    try{
        deletes = await deletepost();
    } catch(e) {
        deletes = e;
    }
    return `${deletes} ${creates}`;
    
}

crud_posts({title: "post3", body:"this is post3", CreatedAt: new Date()}).then((t) => console.log(t))

///promises are used async execution, we can use promises to execute something on condition of of the previous function is worked or not worked 
// but maintaining call backs is very hard and to keep track of it. 