//Two simple methods for selecting specific DOM elements
document.querySelector() //Finds the first matching element
document.querySelectorAll() //Finds all matching elements

//Some methods for finding elements in the DOM
document.querySelector('p') //Grabs the first <p> element in the document
document.querySelector('.magic') //Grabs the first element with the class "magic" in the document
document.querySelector('#hero') //Grabs the first element with an ID of "hero" in the document
document.querySelector('.magic p') //Grabs the first <p> inside an element with the class "magic"
document.querySelectorAll() //Grabs ALL elements that match the query

//Manipulating the DOM
element.innerHTML //Returns or sets the HTML content of the element
document.querySelector('h2').innerHTML = 'Hello there!' // updates <h2> to read 'Hello there!'

element.style //Returns or sets the style attributes of the element
document.querySelector('h2').style.color = 'blue' //changes the color of <h2> to blue

element.className //Sets the class of the element
document.querySelector('h2').className = 'complete' //changes the class of <h2> to 'complete'

element.parentNode //returns the parent, or containing element, of the requested element
document.querySelector('h2').parentNode //returns the parent element of the <h2>

element.childNodes //returns all of the child nodes that an element contains
document.querySelector('h2').childNodes //returns the child nodes of the <h2>

//Getting, setting, and removing attributes
getAttribute() --> const h1ID = document.querySelector('h1').getAttribute('id');
// This would store the ID attribute of the <h1> in the variable called h1ID.

setAttribute() --> document.querySelector('#title').setAttribute('class', 'blue');
// This would give the element with the ID of "title" a class of "blue."

removeAttribute() --> document.querySelectorAll('p').removeAttribute('class');
// This would remove the class attribute from all <p> elements.

//Creating DOM elements
// document.createElement(tagName) -->
const paragraph = document.createElement('p');
paragraph.innerText = "Your passwords did not match.";
paragraph.setAttribute("class", "registration-error");
// This is what's created: <p class="registration-error">Your passwords did not match.</p>

//Adding elements to the DOM
element.append(newElement) //adds the newElement as the last child at the end of the original element'
element.prepend(newElement) //adds the newElement as the first child at the front of the original element
element.insertAdjacentElement(position, newElement) //adds the newElement to a specific position relative to the original element

//Example -- adding elements to the DOM
// First, we create the element and store it in a variable named newPost
const newPost = document.createElement("p");
// Then, we can set properties such as the innerText
newPost.innerText = "JavaScript can be tough!";
// Then, we can grab the parent element that we want to attach our new element to
const postsDiv = document.querySelector("#posts");
// Finally, we use the append method to add our newPost inside of the postsDiv
postsDiv.append(newPost);

//Event Listeners
onload //When the page loads.
onclick //When a user clicks something.
onmouseover //When a user hovers their mouse over something.
onfocus //When a user puts the cursor on a form field.

//Example of event listeners
function sayHello() {
	console.log("Hello!");
}
document.querySelector('button').addEventListener('click', sayHello);

//The Event Object --> e.target
document.querySelector('#disappearing-button').onclick = function(e) {
	console.log(e.target);
	e.target.remove();
}

//Example
document.addEventListener('DOMContentLoaded', function(event) {
    //insert your answer within this code block
    function addToDo() {
        const text = document.getElementById("new-todo").value;
        const newItem = document.createElement('li');
        newItem.innerText = text;
        document.querySelector('.todos').appendChild(newItem);
        // As an added bonus, clear the input so users can keep adding items
        document.getElementById("new-todo").value = null;
    }
    document.getElementById("generate-todo").addEventListener('click', addToDo);
    
    

})
