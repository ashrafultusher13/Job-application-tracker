1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans. getElementById is used to get an element by its given id. getElementsByClassName is used to get multiple element by giving the elements same class. querySelector used to get matching element. querySelectorAll is used to get all matching element.

2. How do you create and insert a new element into the DOM?
Ans. I create element by document.createElement(). Then I give content into the element by innerText or innerHTML.
Then I insert the element into the DOM using append or appendChild.

3. What is Event Bubbling? And how does it work?
Ans. Event bubbling is a process in which event starts from child element and gradually moving up to its parent element step by step.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans. Event delegation can be defined as handling events of child element by setting event listener in parent element.In short, a parent element handling events of child elements is called Event delegation in Javascript. It is useful because it reduces code and works well with dynamic elements.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans. preventDefault() prevents default behavior of element.
stopPropagation() stops bubbling up of events.