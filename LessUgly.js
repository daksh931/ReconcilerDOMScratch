//  how actually DOM works
function HandleTodos(data){
    var parentElem = document.getElementById("mainArea");
    var currChild = Array.from(parentElem.children);

    var update=0;
    var added=0;
    var deleted=0;

    data.forEach( (item) => {

        var existChild = currChild.find( (child)=> {
            return child.dataset.id === String(item.id)
        });
        if(existChild){
            update++;
            existChild.children[0].innerHTML = item.id;
            existChild.children[1].innerHTML = item.desc;
            existChild.children[2].innerHTML = item.author;

            //now remove this existchild from currChild as we updated it...
            currChild = currChild.filter( (ch) => {
                return ch !== existChild;
            }) 
        }

        else{
            //create new 
            added++;
        var childElem = document.createElement("div");
        childElem.dataset.id = item.id; // very imp here we are providing 'id' to 'childElem'  
        var grandElem1 = document.createElement("div");
        var grandElem2 = document.createElement("div");
        var grandElem3 = document.createElement("div");

        grandElem1.innerHTML= item.id;
        grandElem2.innerHTML= item.desc;
        grandElem3.innerHTML= item.author;

        childElem.appendChild(grandElem1);
        childElem.appendChild(grandElem2);
        childElem.appendChild(grandElem3);

        parentElem.appendChild(childElem);
        }
    });

    //any childs left in currChild which do not exist for 'todos' {('data') (this iteration)} have to remove them.
    currChild.forEach( (child)=> {
        deleted++
        parentElem.removeChild(child);
    });

    console.log("update -> "+ update)
    console.log("added -> "+ added)
    console.log("deleted -> "+ deleted)
    console.log(" -------------------------")
    console.log(" -------------------------");
    
}

setInterval(()=> {

    todos = []
    
    for (let i = 0; i < Math.floor(Math.random()*30); i++) {
        todos.push( {
            id:i+1,
            desc : "Daksh Goyal",
            author: "daksh931"
    })
    }
    HandleTodos(todos);
}, 1000) 
