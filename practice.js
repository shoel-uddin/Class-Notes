let bmi = function (weight, height){
    let bmiCal = weight/(height**2)
    return (bmiCal)
} 
let mark = bmi(78, 1.69)
console.log (mark)

let john = bmi(92,1.95)
console.log (john)

let marks = bmi(95, 1.88)
console.log (marks)

let johns = bmi(85,1.76)
console.log (johns)

if (mark > john){
    console.log( `mark's bmi (${mark}) is greater than john's (${john})`)
}else{
    console.log( ` John's bmi (${john}) is  greater than mark's (${mark})`)
}

if (marks > johns){
    console.log( `mark's bmi (${marks}) is great than john's (${johns})`)
}else {
    console.log( `john's bmi (${johns}) is greater than marks's (${marks})`)
}
