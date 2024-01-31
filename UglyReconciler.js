//let data for all todos
var data = {
    id: 1,
    Name: "DAKSH",
    description: "Daksh Goyal"
}

function autoAdd(data) {
    var parentElem = document.getElementById("mainArea");
    parentElem.innerHTML = "";

    for (var i = 0; i < Math.floor(Math.random() * 18); i++) {
        console.log(i)
        var todoElem = document.createElement("div");

        var ID = document.createElement("div");
        ID.innerHTML = data.id

        var NAME = document.createElement("div");
        NAME.innerHTML = data.Name

        var DESC = document.createElement("div");
        DESC.innerHTML = data.description

        todoElem.appendChild(ID);
        todoElem.appendChild(NAME);
        todoElem.appendChild(DESC);

        parentElem.appendChild(todoElem);
    }
}

setInterval(() => {

    // autoAdd(data)


}, 1000)









// understanding again DOM reconciliation...
// var a = document.getElementById("")

// var x = document.createElement("div")
// x.innerHTML= "daksh Goyal";

// document.getElementById("mainArea").appendChild(x)


// for( let i=0; i<5; i++){

//     var x = document.createElement("div");
//     x.innerHTML= i+" th div created ";

//     document.getElementById("mainArea").appendChild(x);

// }


