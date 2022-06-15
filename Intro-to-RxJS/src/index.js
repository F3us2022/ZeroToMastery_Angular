//Observable Example

// import { Observable } from 'rxjs';

// const obs = new Observable((subscriber) => {
//     subscriber.next('Data Stream One');
//     subscriber.next('Data Stream two');
//     subscriber.complete();
//     subscriber.next('Data Stream Three');
//     subscriber.error('test error');
//  });

// obs.subscribe({
//     next: (value) => {
//         console.log(value)
//     },
//     complete: () => { console.log('complete called') },
//     error: (err)=>{console.log(err)}
// })

//Observable Example


// const obs = new Observable((subscriber) => {
//     subscriber.next('Data Stream One');
//     subscriber.next('Data Stream two');
//     subscriber.complete();
//     subscriber.next('Data Stream Three');
//     subscriber.error('test error');
//  });

// obs.subscribe({
//     next: (value) => {
//         console.log(value)
//     },
//     complete: () => { console.log('complete called') },
//     error: (err)=>{console.log(err)}
// })


//----------------------------------------- Synchronous Observable ----------------------------------------------------

/*

const obs = new Observable((subscriber) => {
    subscriber.next('observer');
})

console.log('Before Subscribing');

console.log('Before');

obs.subscribe({
    next: (value) => {
        console.log(value)
    },
    complete: () => { console.log('complete called') },
    error: (err)=>{console.log(err)}
})


console.log('After');

*/

//

//


//----------------------------------------- ASynchronous Observable ----------------------------------------------------

//

//With memory leak

// const obs = new Observable((subscriber) => {
//     setInterval(() => {
//         subscriber.next('text')
//     console.log(`memory leak even after 'subscriber.complete' is called`)}, 1000) //memory leak
//     subscriber.complete();
//  });

// console.log('Before');

// obs.subscribe({
//     next: (value) => {
//         console.log(value)
//     },
//     complete: () => { console.log('complete called') },
//     error: (err)=>{console.log(err)}
// })

// console.log('After');

//----------------******************* Without memory leak ********************---------------------

/*

const obs = new Observable((subscriber) => {
    const id = setInterval(() => {
        subscriber.next('text')
    console.log(`memory leak even after 'subscriber.complete' is called`)}, 1000) //memory leak
    subscriber.complete();

    return ()=>{ 
        clearInterval(id);
    }
 });

console.log('Before');

obs.subscribe({
    next: (value) => {
        console.log(value)
    },
    complete: () => { console.log('complete called') },
    error: (err)=>{console.log(err)}
})

console.log('After');

*/

//

//------------------------------------- ASynchronous Observable (UNSUBSCRIBE)-------------------------------------------

// const obs = new Observable((subscriber) => {
//     const id = setInterval(() => {
//         subscriber.next('text')
//     console.log(`memory leak even after 'subscriber.complete' is called`)}, 1000) //memory leak

//     return ()=>{ 
//         clearInterval(id);
//     }
//  });


// const subscriber = obs.subscribe({
//     next: (value) => {
//         console.log(value)
//     },
//     complete: () => { console.log('complete called') },
//     error: (err)=>{console.log(err)}
// })

// setTimeout(() => {subscriber.unsubscribe()},4000)

//

//


//------------------------------------- Declarative Programming with OPERATORS-------------------------------------------


//

//------------------- Use of OPERATOR INTERVAL -----------

// import { interval } from 'rxjs';

// const obs = new interval(1000);


// const subscriber = obs.subscribe(
//     console.log
// )

//------------------- Use of OPERATOR TIMER --------------

// import { timer } from 'rxjs'

// const obs = new timer(0, 1000);

// const subscriber = obs.subscribe(console.log);

//

//--------------------------------------------------- DOM Event OPERATORS-------------------------------------------------

//

// import { from, fromEvent } from 'rxjs'

// const obs = new fromEvent(
//     document, 'click'
// );

// const subscriber = obs.subscribe(console.log);