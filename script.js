const email = document.getElementById("email");

email.addEventListener("input", (event) => {
  if (!email.checkValidity()) {
    email.setCustomValidity("Expected Email");
  } else {
    email.setCustomValidity("");
  }
});

var comments;                                                    
function countCharacters(e) {                                    
  var commentLength, char_count;          
  commentLength = document.getElementById("comments").value.length;  
  char_count = document.getElementById("char_count"); 
  char_count.textContent = commentLength;       
}
comments = document.getElementById("comments");                   
comments.addEventListener("keyup", countCharacters);

var comments;                                                    
function countCharacters(e) {                                    
  var commentLength, char_count;          
  commentLength = document.getElementById("comments").value.length;  
  char_count = document.getElementById("char_count"); 
  char_count.textContent = commentLength;       
}

const name = document.getElementById("name");
error = document.getElementById("error_message")

name.addEventListener("input", (event) => {
  if (!name.checkValidity()) {
    error.value = "Disallowed Characters";
    name.setCustomValidity("Disallowed Characters");
  } else {
    name.setCustomValidity("");
  }
});