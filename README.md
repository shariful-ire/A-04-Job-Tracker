# A-04-Job-Tracker
here i add the answer of the question that ph team required 

1. Difference between getElementById, getElementsByClassName and querySelector?

getElementById selects only one element by id.
getElementsByClassName selects multiple elements by class name.
querySelector selects first matching element.
querySelectorAll selects all matching elements.



2. How to create and insert element into DOM?

We use document.createElement() to create element.
Then we use appendChild() to insert into DOM.


3. What is Event Bubbling? And how does it work?

Event bubbling means an event starts from the target element
and then moves up to its parent elements step by step.

For example, if we click a button inside a div,
the event first works on the button,
then the div, then the body.


4. What is Event Delegation in JavaScript? Why is it useful?


Event delegation means adding an event listener to a parent element
instead of adding it to every child element.

It is useful because:

It works for dynamic elements.

It improves performance.

It reduces duplicate code.


5. What is the difference between preventDefault() and stopPropagation() methods?


preventDefault() stops the default browser behavior.
Example: stopping form submission or link navigation.

stopPropagation() stops the event from bubbling to parent elements.

