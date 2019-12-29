function snowSpinner() {

var element = document.getElementById("spinner");
    element.classList.add("spinning");
    if(element.classList.contains("spinner")) {
        element.classList.add("spinning");
        element.classList.remove("spinning");
    } else {
        element.classList.add("spinner");  
    }

}