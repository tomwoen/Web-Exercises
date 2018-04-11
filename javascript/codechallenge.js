var square = function sqfun() {
    
    var p1 = document.getElementById("input").value;
    document.getElementById("squarep").append(p1*p1);
    
}

//console.log(square(3));

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

//console.log(sum(2,4,6));

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
    
    


