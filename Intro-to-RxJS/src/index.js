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

import { Observable } from 'rxjs';

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
    subscriber.next('Data Stream One');
    subscriber.next('Data Stream two');
    subscriber.complete();
    subscriber.next('Data Stream Three');
    subscriber.error('test error');
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