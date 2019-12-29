function snowSpinner() {

var element = document.getElementById("spinner");
    element.classList.add("spinning");
    if(element.classList.contains(spin)) {
        element.classList.remove(spin);
    } else {
        element.classList.add(spin);    
    }
}