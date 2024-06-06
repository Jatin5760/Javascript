// Dates

// Date is object

let myDate = new Date()
// console.log(myDate)

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toJSON())
// console.log(myDate.toISOString())

// console.log(typeof myDate) // Object

// let myCreatedDate = new Date(2023,0,23) // Month 0 se chalu hote hai Javascript me
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())


let mydate1 = new Date("01-14-2023")
// console.log(mydate1.toLocaleString())

let myTimeStamp = Date.now() 
//console.log(myTimeStamp) // 1 jan 1970 se leakar abhi tak ka mili- second output me dega.

//console.log(mydate1.getTime())


//console.log(Date.now()/1000) // To convert mili second to sec divide with 1000

//console.log(Math.floor(Date.now()/1000)) // To avoid decimal we use floor




let newDate2 = new Date()
//console.log(newDate2)
//console.log(newDate2.getMonth()) // 4 -- May (Since month start from zero)
//console.log(newDate2.getDay()) // 4 -- Thursday
console.log(newDate2.toLocaleString())
//console.log(newDate2.getTime())



console.log(newDate2.toLocaleString('default', {
    dateStyle:"full",
    timeStyle:"full"
}))
