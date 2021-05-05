function createFunction() {
    var name = "Jose Juan";
    function showName() {
        console.log(name);
    }
    return showName; 
}

var myFunction = createFunction();
myFunction();