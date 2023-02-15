// Iteration 1: Names and Input

const hacker1 = "Adria";
const hacker2 = "Riki";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}

else if(hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

else if(hacker1.length === hacker2.length){
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops


let newWord = "";

for (let i=0; i<hacker1.length; i++){
  const name = hacker1[i];
  newWord += (name + "");
}

console.log(newWord.toUpperCase());

for (let i=hacker2.length-1; i>=0; i--){
  const name2 = hacker2[i];
  newWord += name2;
}

console.log(newWord)

