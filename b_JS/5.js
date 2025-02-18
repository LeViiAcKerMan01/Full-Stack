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
       a = 60;
       b = 3;
       console.log("The value of a+b is :", a+b);
       console.log("The value of a-b is :", a-b);
       console.log("The value of a/b is :", a/b);
       console.log("The value of a*b is :", a*b);
       
       // 2- Comparative Operators
       var ab = 22;
       var ba = 20;
       console.log(ab == ba);
       console.log(ab >= ba);
       console.log(ab <= ba);
       console.log(ab < ba);
       console.log(ab > ba);

       // 3- Assignment operators
       var c = ab;
       console.log(c);
       // '=' is an assignment operator
       // c += 1; // c = c+1
       // c -= 1; // c = c-1
       // c /= 1; // c = c/1
       // c *= 1; // c = c * 1

       console.log(c);

       // 4- Logical Operators
       
       //a- and (&&)
       console.log(true && true);
       console.log(true && false);
       console.log(false && false);
       console.log(false && true);
       

       //b- or(||)
       console.log(true || true);
       console.log(true || false);
       console.log(false || false);
       console.log(false || true);

       //c- not (!)
       console.log(!true);
       console.log(!false);
