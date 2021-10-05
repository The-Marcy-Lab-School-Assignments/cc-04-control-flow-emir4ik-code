//1
const fizzBuzz = () => {
    for(let i = 1; i < 101; i++) {
        
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } 
        else if(i % 3 === 0) {
            console.log('Fizz');
        } else if(i % 5 === 0) {
            console.log('Buzz');
        }else {
            console.log(i);
        }
        
        }
    }

//fizzBuzz()


const fizzBuzzNum = num => {
    let answer = [];
    for(let i = 1; i < num + 1; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            answer.push('FizzBuzz');
            
        } else if(i % 3 === 0) {
            answer.push('Fizz');
        } else if(i % 5 === 0) {
            answer.push('Buzz');
        } else {
            answer.push(i);
        }
    } return answer; 
} 

//console.log(fizzBuzzNum(25));

