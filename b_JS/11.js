//console.log("Hello Bitches!");
        //document.write("Document write is here!");
        //console.error("This is a Fucking error!");
        //console.warn("No Fucking Fighting!");
        
        // The javascript console API(Application Programming Interface)
        // console.log("Hello Everyone", 15);
        // alert("Notification");
        // document.write("Document write is here")
        // console.warn("This is a warning");
        // console.error("This is an error");
        // console.log("Hello Everyone");


        // VARIABLES IN JAVASCRIPT
        // javascript is like a container to store different kinds of values
        /*
        1- Text or string
        2- Numerical value
        3- boolean value
        */
    //    var num1 = 63;
    //    var num2 = 64;
    //    console.log(num2-num1);
    //    console.log(num1-num2);

       /*
       COMMENTS

       Any note or information about the code which is kept 
       for understanding of the reader is called a comment

       There are two type of comments in JS 
       1- Single line comment
       2- Multi line comment
       */
      
       
       // 5- Different Types of data 

       // 1- STRING
    //    var text1 = "This is Fucking disaster!"
    //    var text2 = "Priyanshu Tadhiyal"

       //2- NUUMERS
    //    var number1 = 88;
    //    var number2 = 94;
    //    console.log(number1, number2);

       //3- OBJECT
    //    var CBC = {
    //     Hb : 23,
    //     wbc : 74,
    //     hbc : 56,
    //     Platelets : 64,
    //     Esr : 11
    //    }
       // You can also use any kind of datatype inside this object keys
       // hb, esr, hbc, wbc, platelets are keys of object
      

       //4- BOOLEAN VALUES
    //    var x = true;
    //    var y = false;

       //5- UNDEFINED VARIABLES
    //    var abc;
       // The variables if not assigned the value are undefined
       // and if we print them , they show undefined
       // similer to:  var abc = undefined;

    //    console.log(abc);

       //6- NULL DATATYPE
    //    var na = null
    //    console.log(na);
       // prints null in the console log


       /*
       At the higher level data are divided into different categories
       1- Primitive datatype - strings, numbers, booleans, null, undefined and symbols.
       2- Reference datatype - arrays and objects

       */

       //7- ARRAYS
    //    var array = [6, 8, 22, 7.54, "Priyanshu", true, "rant"]
       // index numbering
       // a b c d e f
       // 0 1 2 3 4 5
       // size/ length of the string = 6




       // OPERATORS

       //1-  Arithmetic Operators
    //    a = 60;
    //    b = 3;
    //    console.log("The value of a+b is :", a+b);
    //    console.log("The value of a-b is :", a-b);
    //    console.log("The value of a/b is :", a/b);
    //    console.log("The value of a*b is :", a*b);
       
       // 2- Comparative Operators
    //    var ab = 22;
    //    var ba = 20;
    //    console.log(ab == ba);
    //    console.log(ab >= ba);
    //    console.log(ab <= ba);
    //    console.log(ab < ba);
    //    console.log(ab > ba);

       // 3- Assignment operators
    //    var c = ab;
    //    console.log(c);
       // '=' is an assignment operator
       // c += 1; // c = c+1
       // c -= 1; // c = c-1
       // c /= 1; // c = c/1
       // c *= 1; // c = c * 1

    //    console.log(c);

       // 4- Logical Operators
       
       //a- and (&&)
    //    console.log(true && true);
    //    console.log(true && false);
    //    console.log(false && false);
    //    console.log(false && true);
       

       //b- or(||)
    //    console.log(true || true);
    //    console.log(true || false);
    //    console.log(false || false);
    //    console.log(false || true);

       //c- not (!)
    //    console.log(!true);
    //    console.log(!false);




    //7-  FUNCTIONS 
    //set of instructions which can be used again when needed

    // function avg(a, b, c){
    //     // function to return the average of three numbers
    //     return (a + b + c)/ 3;
    // }
    // a1 = avg(3, 6, 7);
    // console.log(a1);
    // a2 = avg(23, 56, 796);
    // console.log(a2);

    // Function to find the area of the circle
    // function area(pi, r){
    //     var areaa = pi * r * r;
    //     return areaa;
    // }
    // b1 = area(3.14, 7);
    // console.log(b1);



    // CONDITIONAL STATEMENTS

    // if-else statements
    // var age = 5;
    // if(age >= 3){
    //     console.log("Your age is greater than 3 years!");
    // }else{
    //     console.log("You are not even 3 years old!");
    // }

    // if - elseif statements
    // var age = 19;
    // if(age < 18){
    //     console.log("You are a Kid!");
    // }else if(age == 18){
    //     console.log("You just turned 18!");
    // }else{
    //     console.log("You are above 18!");
    // }




    // LOOPS IN JAVASCRIPT

    var array1 = [11, 12, 13, 14, 15, 16, 17]
    // indexes :  0    1   2   3   4   5   6
    console.log(array1);


    // 1- FOR LOOPS

    // for (var a = 0; a < array1.length; a++){
    //     console.log(array1[a]);
    // }

    // array1.forEach(function(numbers){
    //     // acts the same way as the for loop in JS
    //     // for loop is better tbh!
    //     console.log(numbers)
    // })


    // 2- WHILE LOOPS

    //let w = 0;
    // while(w < array1.length){
    //     console.log(array1[w]);
    //     w++;
    // }


    // DO WHILE LOOPS

    // var arr = [1, 2, 3, 4, 5, 6, 7]
    // let j = 0;
    // do{
    //     console.log(arr[j]);
    //     j++;
    // }while(j < arr.length);



    // BREAK AND CONTINUE STATEMENTS
    // var arr1 = [11, 14, 15, 16, 7,  9]
    // for(var a = 0; a < arr1.length; a++){
    //     if(arr1[a] == 15){
    //         break;
    //     }
    //     if(arr1[a] == 14){
    //         continue;
    //     }
    //     console.log(arr1[a]);
    // }





    // ARRAY METHODS
    // let diffElements = ["Pirana", "Tuna", 23, null, false];
    // console.log(diffElements.length);
    // console.log(diffElements);


    // diffElements.pop();// to remove elements from the end of the array 
    // console.log(diffElements.length);
    // console.log(diffElements);

    // diffElements.push("Shit");// to add elements to the end of the array
    // console.log(diffElements.length);
    // console.log(diffElements);


    // diffElements.shift();// removes the element from the start of the array
    // console.log(diffElements);

    // diffElements.unshift("Chakka");
    // console.log(diffElements);

    // const newLength = diffElements.unshift("Valen");
    // console.log(diffElements);

    // console.log(diffElements.toString());
    // To print the whole array in the form of a string

    // diffElements.sort();
    // console.log(diffElements);
    // order : numbers -> string -> boolean -> null

    // var arr3 = [1, 45, 23, 65, 89, 11]
    // arr3.sort();
    // console.log(arr3);




    // STRING METHODS

    // let myString = "Wellingham is a great footballer";
    // console.log(myString.length);
    // console.log(myString.indexOf("Wellingham"));// to get the string of a particular word

    // var myString1 = "Priyanshu is a Priyanshu of the Priyanshu";
    // let f = myString1.replace("Priyanshu", "Virat");
    // // The replace word just changes the first instance of the word and 
    // // rest of the instances remains untouched!!
    // console.log(f);



    // DOM Manipulation
    let element = document.getElementById("click")
    console.log(element)

    let eleClass = document.getElementsByClassName("container");
    console.log(eleClass);





