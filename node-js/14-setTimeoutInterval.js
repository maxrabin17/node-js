//TIMEOUT
// // started operating system process
// console.log('first') // FIRST 
// setTimeout(() => {
//     console.log('second') // THIRD BECAUSE JAVASCRIPT IS RUN SYNCHRONOUSLY
// }, 0)
// console.log('third') // SECOND 
// // completed and exited operating system process

//INTERVAL
setInterval(() => {
    console.log('hello world')
}, 2000)
console.log(`I will run first`)
  // process stays alive unless
  // Kill Process CONTROL + C
  // unexpected error