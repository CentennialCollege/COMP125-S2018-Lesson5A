(function(content){

    function ContactContent() {
        console.log("Contact Content Accessed...");
        
        document.getElementsByClassName("card-title")[0].textContent = "Contact You!";

        // create a new HTML Element
        let cancelButton = document.createElement("button");
        // configure the HTML Element
        cancelButton.setAttribute("class", "btn btn-warning");
        cancelButton.classList.add("btn-lg");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function(event){
            event.preventDefault();
            window.open("index.html","_parent");
        });

        // add the HTML Element to the page somewhere 
        // in this case I'm attaching a button to the first forml element
        document.forms[0].appendChild(cancelButton);

    }

    content.ContactContent = ContactContent;
   
})(content || (content = {}));


