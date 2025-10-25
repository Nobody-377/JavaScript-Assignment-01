let grade =''
const Name= prompt('Enter your name here: ')
const age=prompt('Enter your age: ')
const marks = prompt('Enter marks: ')
if ((marks>=85) && (marks<=100)){
    grade =('Grade A')
}
else if((marks>=70) && (marks<85)){
    grade =('Grade B')
}
else if((marks>=55) && (marks<70)){
    grade =('Grade C')
}
else if((marks>=0) && (marks<55)){
    grade =('Fail')
}
else{
    grade =('Invalid marks')
}

const ans  = `Name: ${Name}<br>Age: ${age}<br>Grade: ${grade}`
document.getElementById('out').innerHTML = ans
