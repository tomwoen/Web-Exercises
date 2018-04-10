var square = function sqfun() {
    
    var p1 = document.getElementById("input").value;
    document.getElementById("squarep").append(p1*p1);
    
}

//console.log(square(3));

var sum = function sumfun(p1, p2, p3) {
    
    document.getElementById("sump").append(p1 + p2 + p3);
    
}

//console.log(sum(2,4,6));

var object1 = {
    
    name: "Tom",
    occupation: "Boss",
    age: "333",
    
}

var object = function objfun() {
    
    var x = document.getElementById("pers");
    
    x.append(object1.name+"\n");
    
    x.append(object1.occupation);
    x.append("<br>");
    x.append(object1.age);
    x.append("<br>");
    
    object1.name = "Jeff";
    object1.occupation = "Undercover Policeman";
    object1.age = "22";
    
    x.append(object1.name+"\n");
    
    x.append(object1.occupation);
    x.append("<br>");
    x.append(object1.age);
    
    
}

