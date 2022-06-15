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

const obs = new Observable((subscriber) => {
    subscriber.next('observer');
})

console.log('Before Subscribing');

obs.subscribe({
    next: (value) => {
        console.log(value)
    },
    complete: () => { console.log('complete called') },
    error: (err)=>{console.log(err)}
})

console.log('After Subscribing');
