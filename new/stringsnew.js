console.log('helo');
// string addn
console.log('some'+'text');

console.log(typeof 2);
// typeof always returns in string

// vvimp typeOf null is object
console.log(typeof '3');
// number coverted to string

// while this dollar one
console.log('$'+20.95+7.99);
// gives '$20.943.33' which is wrong ans bcz it evaluates from left to right and behaves as string
// therefore here also use order of opr ()

// always convert to cent from dollars and then do
console.log('$'+(2095+799)/100);

// brackets done first

console.log('items('+(1+1)+ '):$'+(2095+799)/100);
// or use this template strings
// inside ${} we can write variables
                        //    expressions
                        //    calculations
                        //    fn cls

                        // multiline strings
 //dont use $ here its while do calci n variable                       
console.log(`history
    hlo
}`)                        
console.log(`items(${1+1}):$${(2095+799)/100}`);


// 3 ways to create strings '' or "" or\' or\"
// "" useful when we write '' inside ""

console.log("i\'m learning");
console.log("]\"m learner");




