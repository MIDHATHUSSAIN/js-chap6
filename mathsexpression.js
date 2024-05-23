// question 1 :
document.write("<h4>Result</h4>");

var a = 10

document.write("The value of a is: " + a + "<br><br>");

document.write("The value of ++a is: " + ++a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");


document.write("The value of a++ is: " + a++ + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + --a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a + "<br><br><br>");


// question 2:

var x = 2;
var y = 1;

var result = ((--x) - (--y) + (++x) + (y--));

document.write("Var Result: " + result + "<br><br>");

document.write("<h4>Output At Each Stage </h4>");

document.write("the value of --x is: "+ --x + "<br>");

document.write("the value of --x - --y is: "+ ((--x) - (--y)) + "<br>");
document.write("the value of --x - --y+ ++y is: "+ ((--x) - (--y)+ (++y)) + "<br>");
document.write("the value of --x - --y + ++y + y-- is: "+ ((--x)-(--y)+ (++y)+(y--)) + "<br>");



// Question 3 :

var userName = prompt("Enter your Name")

alert("Hello, " + userName + " Welcom to Our Website.");


// Question 4 and 5:

var table= parseInt(prompt("Enter the Number" ,5));
let i = 1;
document.write("<br>")
if (table){
    while ( i <= 10){
        let resultofmultiplication = table * i
         document.write(table + "x" + i + "=" + resultofmultiplication + "<br>"+"<br>" )
         i++
   }
}
else{
    while ( i <= 10){
        let resultofmultiplication = 5 * i
         document.write(5 + "x" + i + "=" + resultofmultiplication + "<br>"+"<br>")
         i++
   }
}

// Question 6:

let nsub1 =prompt("enter your first subject name");
let nsub2 =prompt("enter your second subject name");
let nsub3 =prompt("enter your third subject name");

var msub1 = parseInt(prompt("Enter first subject marks" ));
var msub2 = parseInt(prompt("Enter second subject marks" ));
var msub3 = parseInt(prompt("Enter third subject marks" ));

const msubtotal = 100 ;

let pert = (msub1 / msubtotal)*100

let pertt = (msub2 / msubtotal)*100

let perttt = (msub3 / msubtotal)*100

document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + nsub1 + "</td><td>" + msub1 + "</td><td>" + pert.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + nsub2 + "</td><td>" + msub2 + "</td><td>" + pertt.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + nsub3 + "</td><td>" + msub3 + "</td><td>" + perttt.toFixed(2) + "%</td></tr>");
document.write("</table>");