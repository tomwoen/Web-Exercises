var square = function sqfun() {
    
    var p1 = document.getElementById("input").value;
    document.getElementById("squarep").append(p1*p1);
    
}



var sum = function sumfun(p1, p2, p3) {
    
    
    var p1 = document.getElementById("input2").value;
    var p2 = 0;
    for (i=0;i<p1.length;i++) {
        
        if (p1.substring(i,i+1)!=(",")) {
            var l = Number(p1.substring(i,i+1));
            //p2+=p1.substring(i,i+1);
            p2+=l;
        }
        
        
    }
    document.getElementById("sump").append(p2);
    
}

var object1 = {
    
    name: "Tom",
    occupation: "Boss",
    age: "333",
    
}

var object = function objfun() {
    
    var x = document.getElementById("pers");
    
    x.innerText = object1.name+"\n"+object1.occupation+"\n"+object1.age;
    
}
    
var obj = function Ofun() {
    
    object1.name = "Jeff";
    object1.occupation = "Undercover Policeman";
    object1.age = "22";
    
    x.innerText = object1.name+"\n"+object1.occupation+"\n"+object1.age;
  
}

function check() {
    
    if (20<object1.age<40) {
        
        console.log("Yes");
            
    }
    else { console.log("No"); }
    
}

function display() {


    var lowercase = "He said \"My name is elliott\"";
    
    var uppercase = lowercase.toUpperCase();
    
    var num = 1 + "2";
    document.getElementById("string").innerText = lowercase + "\n" + uppercase +"\n"+num;
    
    
}

function displayarray() {
    
    var array = ['boats','coats','oats'];
    array.push('floats');
    array.pop();
    array.forEach(elem => console.log(elem));
    
}

function fizzbuzz() {
    
    for (i = 0; i <100; i++) {
        
    if (i%3===0) {
        
        console.log("Fizz");
    
    }
        else {
        
        console.log(i);
        }
        
    }
        
} 

function divide() {
    
    var n = document.getElementById("number").value;
    
    for (i=n;i>0;){
        
            
    if (i%3===0) {
        
        i = i/3;
        console.log(i);
    }
   else { i--;
         
         console.log(i);}    
    }

}

function fierceDOM() {
    
    var d = document.getElementById("DOM");
    var para = document.createElement("p");
    para.setAttribute("id","text");
    
    d.appendChild(para);
}

function addDOM() {
    
    var txt = document.getElementById("text");
    txt.innerText = "What's in a textBox";
}

function deleteDOM() {
    
    
    
}
    
    


