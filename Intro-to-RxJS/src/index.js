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

//

//--------------------------------------------------- Of and From OPERATORS----------------------------------------------

//

//---------------------- OF Operator ------------------

//import { of ,from} from 'rxjs'

//const obs = of(1, 2, 3, 4, 5);
//const obs = of([1, 2, 3, 4, 5]);   //cant show array elements individually

// const subs = obs.subscribe({
//     next(value) { console.log(value)},
//     complete() { console.log('complete')}
// })

//---- OF retruns PROMISE

// const obs = of(fetch('https://jsonplaceholder.typicode.com/todos/1'));   //cant show array elements individually

// const subs = obs.subscribe({
//     next(value) { console.log(value)},
//     complete() { console.log('complete')}
// })

//
//---------------------- FOR Operator
//

// const obsFor = from([1, 2, 3, 4, 5]);   //cant show array elements individually

// const subsFor = obsFor.subscribe({
//     next(value) { console.log(value)},
//     complete() { console.log('complete')}
// })

//------ FROM returns values

// const obsFor = from(fetch('https://jsonplaceholder.typicode.com/todos/1'));   //cant show array elements individually

// const subsFor = obsFor.subscribe({
//     next(value) { console.log(value)},
//     complete() { console.log('complete')}
// })


//

//--------------------------------------------------- MAP OPERATORS----------------------------------------------

//

// import { of } from 'rxjs';
// import { map } from 'rxjs/operators';

// const obs = of(1, 2, 3, 4, 5).pipe(
//     map((value)=>`$${value}`)
// )

// const subs = obs.subscribe({
//     next(value) { console.log(value) },
//     complete() { console.log('complete')}
// })


//

//--------------------------------------------------- PLUCK OPERATORS----------------------------------------------

//

// import { fromEvent, observable } from 'rxjs';
// import { map} from 'rxjs/operators'

// const obs = fromEvent(
//     document,'keydown'
// ).pipe(
//     map(event=>event.code)
// )

// const subs = obs.subscribe({
//     next(value) { console.log(value) },
//     complete() { console.log('complete')}
// })

//------- Using Pluck Operator

// import { fromEvent, observable } from 'rxjs';
// import { map, pluck} from 'rxjs/operators'

// const obs = fromEvent(
//     document,'keydown'
// ).pipe(
//     pluck('code')
// )

// const subs = obs.subscribe({
//     next(value) { console.log(value) },
//     complete() { console.log('complete')}
// })

//

//

//--------------------------------------------------- FILTER OPERATORS----------------------------------------------


//

//

// import { fromEvent, observable } from 'rxjs';
// import { map, pluck,filter} from 'rxjs/operators'

// const obs = fromEvent(
//     document,'keydown'
// ).pipe(
//     pluck('code'),
//     filter(value => value==='Space' )
// )

// const subs = obs.subscribe({
//     next(value) { console.log(value) },
//     complete() { console.log('complete')}
// })

//

//

//--------------------------------------------------- REDUCE OPERATORS----------------------------------------------


//

//

// import { from, of } from 'rxjs'
// import { pipe, reduce } from 'rxjs/operators'

// const obs = of(1, 2, 3, 4, 5).pipe(
//     reduce((acc, val) => { return acc + val },0)
// )

// const subs = obs.subscribe({
//     next(value) { console.log(value) },
//     complete() { console.log('complete')}
// });

//

//

//--------------------------------------------------- TAKE and SCAN OPERATORS----------------------------------------------


//

//

//----- Using TAKE operator with REDUCE

// import { interval } from 'rxjs'
// import { pipe, reduce , take} from 'rxjs/operators'

// const obs = interval(500).pipe(
//     take(5),
//     reduce((acc, val) => { return acc + val },0)
// )

// const subs = obs.subscribe({
//     next(value) { console.log(value) },
//     complete() { console.log('complete')}
// });

//

//----- Using TAKE operator with SCAN

// import { interval } from 'rxjs'
// import { pipe, scan,take } from 'rxjs/operators'

// const obs = interval(500).pipe(
//     take(6),
//     scan((acc, val) => { return acc + val },0)
// )

// const subs = obs.subscribe({
//     next(value) { console.log(value) },
//     complete() { console.log('complete')}
// });

//

//

//--------------------------------------------------- TAP OPERATORS----------------------------------------------


//

//

// import { interval } from 'rxjs'
// import { pipe, reduce,take,tap } from 'rxjs/operators'

// const obs = interval(500).pipe(
//     take(6),
//     tap(console.log),
//     reduce((acc, val) => { return acc + val },0)
// )

// const subs = obs.subscribe({
//     next(value) { console.log(value) },
//     complete() { console.log('complete')}
// });

//

//

//--------------------------------------------------- Understanding FLATTENING OPERATORS----------------------------------------------


//

//

import { fromEvent } from 'rxjs'
import { map,pipe } from 'rxjs/operators'
import { ajax} from 'rxjs/ajax'

const button = document.querySelectorAll('#btn');
const obs = fromEvent(button, 'click').pipe(
    map(()=>{return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1')})
)

const subs = obs.subscribe({
    next(value) { value.subscribe(console.log) },
    complete() { console.log('complete')}
});