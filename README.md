1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Answer:
   getElementById get infomation form a single id and ID should be used only once in HTML
   getElementsByClassName get all information from a class
   querySelector selecting elemnt form HTML DOM
   querySelectorAll all element that matches in HTML Dom

2. How do you create and insert a new element into the DOM?
   Answer:

   1. Create the New Element:

   const newElement = document.createElement('p');

   2. Customize the New Element

   newElement.textContent = 'This is a new paragraph.';

   newElement.id = 'my-new-paragraph';

   newElement.classList.add('info-box');

   3. Insert the New Element into the DOM:

   const parentElement = document.getElementById('container');
   parentElement.append(newElement);

3. What is Event Bubbling and how does it work?
   Answer:
   Event bubbling is when an event starts at the target element and bubbles up through its ancestors in the DOM tree.

4. What is Event Delegation in JavaScript? Why is it useful?
   Answer:
   Instead of attaching event listeners to many child elements, we can attach one listener to a parent and handle events as they bubble up.
   Example : In this project Call Now Btn
5. What is the difference between preventDefault() and stopPropagation() methods?
   Answer:
   preventDefault() Stops the default browser action for an event
   stopPropagation() A click on a button won’t trigger the parent div’s click listener
