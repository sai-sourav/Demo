console.log('person1: shows ticket');
console.log('person2: shows ticket');

const premovie = async () => {
    const promisewifebringingtickets = new Promise((resolve, reject) => {
            setTimeout(() => reject('ticket') ,3000)
    });
    let ticket;

    try {
        ticket = await promisewifebringingtickets;
    }
    catch(e){
        ticket = 'sad face'
    }

    return ticket;

};
premovie().then((m) => console.log(m))
console.log('person4: shows ticket');
console.log('person5: shows ticket');