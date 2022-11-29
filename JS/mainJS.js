function func1()
          {
          	//taking data from inputs and storing it
          var aa=document.getElementById("aa").value;//no of members
          var x;
          var a=[];
          var s=[];
          document.getElementById("mem").innerHTML=(`<tr>
            <th>User name</th>
            <th>Amount Paid</th>
          </tr>`);
          for(x=0;x<aa;x++)
          {
            a[x]=prompt("Enter Name:");
            s[x]=prompt("Enter Amount Paid:"); 
            s[x]=parseInt(s[x]);
            document.getElementById("mem").innerHTML= document.getElementById("mem").innerHTML+  (`<tr><td>${a[x]}</td><td> ${s[x]} </td></tr>`);        
          	//showing data in form of list
          }
            
            var payments = {}; 
      
// Loop to insert key & value in this object one by one
    for(var z = 0; z < a.length; z++){ 
        payments[a[z]] = s[z]; 
}
console.log(payments);
splitPayments(payments);

// const payments = {
//   A: 400,
//   B: 1000,
//   C: 100,
//   D: 900,
};
function splitPayments(payments) {
  const people = Object.keys(payments);
  const valuesPaid = Object.values(payments);

  const sum = valuesPaid.reduce((a, b) => b + a);
  const mean = sum / people.length;

  const sortedPeople = people.sort((personA, personB) => payments[personA] - payments[personB]);
  const sortedValuesPaid = sortedPeople.map((person) => payments[person] - mean);

  let i = 0;
  let j = sortedPeople.length - 1;
  let debt;

  while (i < j) {
    debt = Math.min(-(sortedValuesPaid[i]), sortedValuesPaid[j]);
    sortedValuesPaid[i] += debt;
    sortedValuesPaid[j] -= debt;
    
    document.getElementById("abc").innerHTML=document.getElementById("abc").innerHTML+(` <h3><b>${sortedPeople[i]}</b> <span class="k" style="color:red;"> owes </span><b> ${sortedPeople[j]} </b><span class="k1" style="color:red;"> &#8377; ${debt} </span></h3> `);

    if (sortedValuesPaid[i] === 0) {
      i++;
    }

    if (sortedValuesPaid[j] === 0) {
      j--;
    }
  }

document.getElementById("pay").innerHTML=(`<button onclick="paid()" id="paidbtn">Do Transaction</button>`);
}
function paid()
{
  var elem=document.getElementsByClassName("k");
  var elem1=document.getElementsByClassName("k1");
  for(var i=0;i<elem.length;i++)
  {
    elem[i].innerHTML="paid";
    elem[i].style.color="green";
    elem1[i].style.color="green";
  }
  document.getElementById("paidbtn").innerHTML="Transaction Done";
  document.getElementById("paidbtn").style.backgroundImage="linear-gradient(to right, #228B22, #32CD32, #2E8B57)";
}

document.getElementById("uname").innerHTML=`Welcome ${sessionStorage.getItem("name")}`;


function Entertainment()
{
document.getElementById("cat").innerHTML="For Entertainment purpose";
document.getElementById("show").innerHTML=`<button onclick="func1();" class="btn" style="border-radius: 10px"><img id="img"></button>
        <br><br>
        <table id="mem" border="2px"></table>
        <p id="abc"></p>`;
document.getElementById("img").src="img/ent.png";


}
function Foodanddrink()
{
document.getElementById("cat").innerHTML="For Food and drink purpose";
document.getElementById("show").innerHTML=`<button onclick="func1();" class="btn" style="border-radius: 10px"><img id="img"></button>
        <br><br>
        <table id="mem" border="2px"></table>
        <p id="abc"></p>`;
document.getElementById("img").src="img/food.png";

}
function Home()
{
document.getElementById("cat").innerHTML="For Home purpose";
document.getElementById("show").innerHTML=`<button onclick="func1();" class="btn" style="border-radius: 10px"><img id="img"></button>
        <br><br>
        <table id="mem" border="2px"></table>
        <p id="abc"></p>`;
document.getElementById("img").src="img/home.png";

}
function Life()
{
document.getElementById("cat").innerHTML="For Life purpose";
document.getElementById("show").innerHTML=`<button onclick="func1();" class="btn" style="border-radius: 10px"><img id="img"></button>
        <br><br>
        <table id="mem" border="2px"></table>
        <p id="abc"></p>`;
document.getElementById("img").src="img/life.png";

}
function Transportation()
{
document.getElementById("cat").innerHTML="For Transportation purpose";
document.getElementById("show").innerHTML=`<button onclick="func1();" class="btn" style="border-radius: 10px"><img id="img"></button>
        <br><br>
        <table id="mem" border="2px"></table>
        <p id="abc"></p>`;
document.getElementById("img").src="img/trans.png";

}
function Uncategorized()
{
document.getElementById("cat").innerHTML="For Uncategorized purpose";
document.getElementById("show").innerHTML=`<button onclick="func1();" class="btn" style="border-radius: 10px"><img id="img"></button>
        <br><br>
        <table id="mem" border="2px"></table>
        <p id="abc"></p>`;
document.getElementById("img").src="img/uncat.png";

}
function Utilities()
{
document.getElementById("cat").innerHTML="For Utilities purpose";
document.getElementById("show").innerHTML=`<button onclick="func1();" class="btn" style="border-radius: 10px"><img id="img"></button>
        <br><br>
        <table id="mem" border="2px"></table>
        <p id="abc"></p>`;
document.getElementById("img").src="img/uti.png";

}
/*
  C owes B $400
  C owes D $100
  A owes D $200
*/
       