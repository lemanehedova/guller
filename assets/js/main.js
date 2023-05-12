function myFunction1() {
    var elemements=document.querySelectorAll(".guller");
    elemements.forEach(element=> {
        if (element.id=="qizilgul"){
            element.style.display="block";
        }
        else {
            element.style.display= "none";
        }
    });
    
    
}