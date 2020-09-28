// const square = function(x){
//     return x*x
// }


// const square = (x) => {
//     return x*x
// } 


// const square = (x) => x*x
// console.log(square(2))

const event ={
    name : 'Birthday party ',
    guestlist : ['aravind','smauel','loui'],
    printGuests  (){
        console.log('guest list for '+ this.name)
        
        this.guestlist.forEach((guest) => {
            console.log(guest+' is attending '+ this.name)
        })
    }
    
}
event.printGuests()