function name(errname){
  while(errname=="" || errname==null){
  errname=prompt("Please enter your Nickname");
  if(errname=="" || errname==null){
  alert("please entern nick name")};
  }
return errname;
  }
var minus=0, plus=0, count=0, nameU;
nameU=name(nameU);
let ranarray=[0,1,2,3,4,5,6,7,8,9];
ranarray.sort(()=>Math.random()-0.5);
var array1=["Always","Yes","No","Star","Circle","Triangle","Fridge","Sky","Lamp","Table"];
var array2=["завжди","так","ні","зірка","круг","трикутник","холодильник","небо","лампа","стіл"];
var num1=0;
$("#stat").html("< "+ 1 +"/" + ranarray.length + " >");
$("#but1").html(array1[ranarray[num1]]);
$("#but1").on("click",function() {
  $("#but1").attr('disabled','true');
  setTimeout(winAndLose, 0);
  function winAndLose(){

  if(count==10){location.reload();} //перезавантаження сторінки
  //якщо правильно
  if($("input").val().toLowerCase()==array2[ranarray[num1]]){
    $("#but1").animate({left:0}, 1000).fadeOut(500);
    $("#plus").html(plus=plus+1);
    $("#plus").html(plus-1);
  count++;

  $("input").val("");
  setTimeout( function(){
  if(count==10){
    $("#but1").html("click to reload page");
  }},1000)
  }
  //якщо не правильно 
  else {
    if($("#but1").width()>=110){
    $("#but1").animate({left:550}, 1000).fadeOut(500);}
    else{$("#but1").animate({left:400}, 1000).fadeOut(500)}
    $("#minus").html(minus=minus+1);
    $("#minus").html(minus-1);
  count++;

  $("input").val("");
  setTimeout( function(){
  if(count==10){
    $("#but1").html("click to reload page");
  }},1000)
  }}
  //повертае картку в початкове положення, та зміна статистики
  setTimeout(change, 1500);
  function change(){
    num1++;
    $("#but1").html(array1[ranarray[num1]]);
    $("#but1").removeAttr('disabled');
    if($("#but1").width()>=110){
    $("#but1").animate({left:275}, 0).fadeIn(200);}
    else{
      $("#but1").animate({left:200}, 0).fadeIn(200);
    }
    $("#plus").html(plus);
    $("#minus").html(minus);
  let num2=num1+1;
  if(num2<ranarray.length+1){
  $("#stat").html("< "+ num2 +"/" + ranarray.length + " >");}
  }

  //кінцевий результат
  setTimeout(finish, 1750);
  function finish(){

  if(count==10){
    switch(plus){
      case 0:
        text="Bad";
        break;
      case 1:
        text="Bad";
        break;
      case 2:
        text="Beginer";
        break;
        case 3:
        text="Beginer";
        break;
      case 4:
        text="Okay";
        break;
        case 5:
        text="Okay";
        break;
      case 6:
        text="Normal";
        break;
        case 7:
        text="Normal";
        break;
      case 8:
        text="Advanced";
        break;
        case 9:
          text="Advanced";
          break;
      case 10:
        text="Native";
        break;
      default:
        text="...";
        break;
    }
    alert(nameU+ " lvl english is "+ text);
  }};
});