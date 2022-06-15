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

<<<<<<< HEAD
console.log('After Subscribing');
=======

console.log('After');

*/

//

//


//----------------------------------------- ASynchronous Observable ----------------------------------------------------

//


const obs = new Observable((subscriber) => {
    
 });

console.log('Before');

obs.subscribe({
    next: (value) => {
        console.log(value)
    },
    complete: () => { console.log('complete called') },
    error: (err)=>{console.log(err)}
})

>>>>>>> 81d7070a12fc385c339cf3106bf03d836c095247
