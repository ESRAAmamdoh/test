
//Q1
// var input=window.prompt("enter value");
// console.log(input);
///////////////////////////////////////////////
//Q2
// var input=window.prompt("enter numper can divide by 3 and 4 ");
// if(input % 3 ==0 && input % 4 == 0){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }
///////////////////////////////////////////////
//Q3
// var num1=window.prompt("enter first number");
// var num2=window.prompt("enter second number");
// if(num1>num2){
//     console.log("first number is max "+ num1)
// }
// else{
//     console.log("second number is max "+ num2)
// }
//////////////////////////////////////////////
//Q4
// var num1=window.prompt("enter number");

// if(num1>0){
//     console.log("The Number Is Positive ")
// }
// else{
//     console.log("The Number Is negative")
// }
/////////////////////////////////////////////
//Q5
// var num1=window.prompt("enter first number");
// var num2=window.prompt("enter second number");
// var num3=window.prompt("enter third number");
// if(num1>num2&& num1>num3){
//     console.log("first number is max "+ num1)
// }
// else if(num2>num1&&num2>num3){
//     console.log("second number is max "+ num2)
// }
// else{
//     console.log("Third number is max "+ num3) 
// }
// if(num1<num2&& num1<num3){
//     console.log("first number is min "+ num1)
// }
// else if(num2<num1&&num2<num3){
//     console.log("second number is min "+ num2)
// }
// else{
//     console.log("Third number is min "+ num3) 
// }
////////////////////////////////////////////////////
//Q6
// var x=window.prompt("enter number");
// if(x%2==0){
//     console.log(x+" the number is even ");
// }
// else{
//     console.log(x+" the number is odd ");
// }

//////////////////////////////////////////////////
//Q8

// var c=window.prompt("enter character");
// if(c=='o'||c=='e'||c=='u'||c=='a'||c=='i'){
//     console.log("the char is vowel")
// }
// else{
//     console.log("the char is constant")
// }
/////////////////////////////////////////////////

//Q9

// var x=window.prompt("enter the number");
// for(var i=1;i<=x;i++){
//     console.log(i);
// }
/////////////////////////////////////////////////

//Q10
// var x=window.prompt("enter the number");
// for(var i=1;i<=12;i++){
//     console.log(i*x);
// }
////////////////////////////////////////////////
//Q11
// var x=window.prompt("enter the number");
// console.log("the all even number : ")
// for(var i=0;i<x;i++){
//     if(i%2==0){
//         console.log(i)
//     }
   
// }
////////////////////////////////////////////////

//Q12
// var x=Number(window.prompt("enter the number"));
// var y=Number(window.prompt("enter the power"));
// console.log("the power of "+x)
// var s=1 ;
// // console.log(x**y);
// for(var i=0;i<y;i++){

// s*=x;
   
// }
// console.log(s)
//////////////////////////////////////////////////////
//Q13

// var sum=0;
// for(var i=0;i<5;i++){
//     var x=Number(window.prompt("enter the number"));
//     sum+=x;
// }
// console.log(sum);
// console.log(sum/5);
// console.log((sum/500)*100);
//////////////////////////////////////////////////////////
//Q14
// var x=Number(window.prompt("enter the number"));
// if(x==1||x==3||x==7||x==8||x==10||x==12){
//     console.log("Days in Month: 31")
// }
// else if(x==4||x==6||x==9||x==11){
//     console.log("Days in Month: 30")
// }
// else{
//     console.log("Days in Month: 28")
// }
//////////////////////////////////////////////////////////////
//Q
//   var x=Number(window.prompt("enter the physics"));
//    var x2=Number(window.prompt("enter the Biology,"));
//     var x3=Number(window.prompt("enter the Mathematics"));
//      var x4=Number(window.prompt("enter the Computer"));
//       var x5=Number(window.prompt("enter the Chemistry,"));
//    var sum=x+x2+x3+x4+x5;
//    var percntage=(sum/500)*100;
//    if( percntage >=90&& percntage<=100){
//     console.log("Grad A");
//    }
 
//    else if( percntage >=80&& percntage<90){
//     console.log("Grad B");
//    }
//    else if( percntage >=70&& percntage< 80){
//     console.log("Grad C");
//    }
//    else if( percntage >=60&& percntage< 50){
//     console.log("Grad D");
//    }
//    else if( percntage >=40&& percntage< 50){
//     console.log("Grad E");
//    }
//    else {
//     console.log("Grad F");
//    }

////////////////////////////////////////////////////////////

//Q

// var m=Number(window.prompt("enter the mounth"));
// switch(m){
//     case 1:
//         console.log(31);
//         break;
//     case 2:
//         console.log(28);
//         break;
//     case 3:
//         console.log(31);
//         break;
//     case 4:
//         console.log(30);
//         break;
//     case 5:
//         console.log(31);
//         break;
//     case 6:
//         console.log(30);
//         break;
//     case 7:
//         console.log(31);
//         break;
//     case 8:
//         console.log(31);
//         break;
//     case 9:
//         console.log(30);
//         break;
//     case 10:
//         console.log(31);
//         break;
//     case 11:
//         console.log(30);
//         break;
//     case 12:
//             console.log(31);
//             break;
//     default:
//         console.log("not in mounth");


// }
//////////////////////////////////////////////////

// var c=window.prompt("enter the char");
// switch(c){
//     case 'o':
//         console.log("vowel");
//         break;
//      case 'u':
//         console.log("vowel");
//          break;
//     case 'i':
//         console.log("vowel");
//          break;
//     case 'e':
//          console.log("vowel");
//          break;
//     case 'a':
//         console.log("vowel");
//         break;
//     default:
//         console.log("constant")
// }
///////////////////////////////////////////////////////////////
// var n=Number(window.prompt("enter the first number"));
// var n2=Number(window.prompt("enter the second number"));
// switch(true){
//     case n>n2:
//         console.log(n+" is greater");
//         break;
//      case n2>n:
//         console.log(n2+" is greater");
//          break;
 
// }
///////////////////////////////////////////////////////////////////
// var n=Number(window.prompt("enter the number"));

// switch(true){
//     case n%2==0:
//         console.log(n+" is even");
//         break;
//      case n%2!=0:
//         console.log(n+" is odd");
//          break;
 
// }
////////////////////////////////////////////////////////////////
// var n=Number(window.prompt("enter the number"));

// switch(true){
//     case n>=0:
//         console.log(n+" is positive");
//         break;
//      case n<0:
//         console.log(n+" is negative");
//          break;
 
// }
///////////////////////////////////////////////////////////////
// var c=window.prompt("enter the operator");
// var n=Number(window.prompt("enter the first number"));
// var n2=Number(window.prompt("enter the second number"));
// switch(c){
//     case '+':
//         console.log(n+n2);
//         break;
//      case '-':
//         console.log(n-n2);
//          break;
//     case '*':
//         console.log(n*n2);
//          break;
//     case '/':
//          console.log(n/n2);
//          break;
//     case '%':
//         console.log(n%n2);
//         break;
//     default:
//         console.log("not valid")
// }
