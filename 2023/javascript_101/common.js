function select_car() {
    console.log("select car !");
}

function submit(){
    let name = prompt("Please enter your name", "Harry Potter");

    if (name != null) {
        document.getElementById("demo").innerHTML =
            "Hello " + name + "! How are you today?";
    }
}