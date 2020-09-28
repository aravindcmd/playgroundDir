// setTimeout(()=>{
//     console.log('2sec')
// },2000)

// const name =['aravind','jen','jess']


// const shortName = name.filter((name) =>{
//     return name.length <=4
//     console.log(name)
// })


// const geocode = (address,callback)=>{
//     setTimeout(() =>{
//         const data = {
//             longitude : 0,
//             latitude : 0
//         }
//         callback(data)
//     },3000)

// }

// geocode('phil',(data)=>{
//     console.log(data)
// })

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a,b,callback) =>{
    setTimeout(()=>{
        const data = {
            sum : a+b


        }
        callback(data)
    },2000)
}

 add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})