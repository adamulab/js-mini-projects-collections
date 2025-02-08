const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Hyperlinks and Text Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyper Text Machine Language", correct: false },
    ],
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    answers: [
      { text: "<a>", correct: true },
      { text: "<link>", correct: false },
      { text: "<href>", correct: false },
      { text: "<hyperlink>", correct: false },
    ],
  },
  {
    question: "What is the correct HTML element for the largest heading?",
    answers: [
      { text: "<h1>", correct: true },
      { text: "<h6>", correct: false },
      { text: "<head>", correct: false },
      { text: "<header>", correct: false },
    ],
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    answers: [
      { text: "style", correct: true },
      { text: "class", correct: false },
      { text: "font", correct: false },
      { text: "styles", correct: false },
    ],
  },
  {
    question: "Which tag is used to create an unordered list in HTML?",
    answers: [
      { text: "<ul>", correct: true },
      { text: "<ol>", correct: false },
      { text: "<li>", correct: false },
      { text: "<list>", correct: false },
    ],
  },
  {
    question: "What is the correct HTML for inserting an image?",
    answers: [
      { text: '<img src="image.jpg" alt="My Image">', correct: true },
      { text: '<image src="image.jpg" alt="My Image">', correct: false },
      { text: '<img href="image.jpg" alt="My Image">', correct: false },
      { text: '<img alt="My Image">image.jpg</img>', correct: false },
    ],
  },
  {
    question:
      "Which HTML element is used to define the structure of an HTML document?",
    answers: [
      { text: "<html>", correct: true },
      { text: "<head>", correct: false },
      { text: "<body>", correct: false },
      { text: "<structure>", correct: false },
    ],
  },
  {
    question: "What is the purpose of the <head> element in HTML?",
    answers: [
      {
        text: "To contain metadata and links to external resources",
        correct: true,
      },
      { text: "To display the main content of the page", correct: false },
      { text: "To define the footer of the page", correct: false },
      { text: "To create a header section", correct: false },
    ],
  },
  {
    question: "Which HTML element is used to define a paragraph?",
    answers: [
      { text: "<p>", correct: true },
      { text: "<para>", correct: false },
      { text: "<paragraph>", correct: false },
      { text: "<pg>", correct: false },
    ],
  },
  {
    question: "What is the correct HTML for creating a checkbox?",
    answers: [
      { text: '<input type="checkbox">', correct: true },
      { text: "<checkbox>", correct: false },
      { text: '<input type="check">', correct: false },
      { text: "<check>", correct: false },
    ],
  },
  {
    question: "Which HTML element is used to define a table row?",
    answers: [
      { text: "<tr>", correct: true },
      { text: "<td>", correct: false },
      { text: "<th>", correct: false },
      { text: "<table-row>", correct: false },
    ],
  },
  {
    question: "What is the correct HTML for adding a background color?",
    answers: [
      { text: '<body style="background-color:yellow;">', correct: true },
      { text: "<background>yellow</background>", correct: false },
      { text: '<body bg="yellow">', correct: false },
      { text: '<body color="yellow">', correct: false },
    ],
  },
  {
    question: "Which HTML element is used to define a list item?",
    answers: [
      { text: "<li>", correct: true },
      { text: "<ul>", correct: false },
      { text: "<ol>", correct: false },
      { text: "<list>", correct: false },
    ],
  },
  {
    question: "What is the correct HTML for creating a drop-down list?",
    answers: [
      { text: "<select>", correct: true },
      { text: "<list>", correct: false },
      { text: "<dropdown>", correct: false },
      { text: '<input type="dropdown">', correct: false },
    ],
  },
  {
    question: "Which HTML element is used to define the footer of a document?",
    answers: [
      { text: "<footer>", correct: true },
      { text: "<bottom>", correct: false },
      { text: "<foot>", correct: false },
      { text: "<end>", correct: false },
    ],
  },
  {
    question: "What is the correct HTML for inserting a line break?",
    answers: [
      { text: "<br>", correct: true },
      { text: "<lb>", correct: false },
      { text: "<break>", correct: false },
      { text: "<linebreak>", correct: false },
    ],
  },
  {
    question: "Which HTML element is used to define emphasized text?",
    answers: [
      { text: "<em>", correct: true },
      { text: "<italic>", correct: false },
      { text: "<strong>", correct: false },
      { text: "<emphasis>", correct: false },
    ],
  },
  {
    question: "What is the correct HTML for creating a text input field?",
    answers: [
      { text: '<input type="text">', correct: true },
      { text: "<textfield>", correct: false },
      { text: '<input type="textfield">', correct: false },
      { text: "<text>", correct: false },
    ],
  },
  {
    question: "Which HTML element is used to define a table header?",
    answers: [
      { text: "<th>", correct: true },
      { text: "<thead>", correct: false },
      { text: "<header>", correct: false },
      { text: "<td>", correct: false },
    ],
  },
  // CSS Questions (31-60)
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Computer Style Sheets", correct: false },
      { text: "Colorful Style Sheets", correct: false },
      { text: "Creative Style Sheets", correct: false },
    ],
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    answers: [
      { text: "color", correct: true },
      { text: "text-color", correct: false },
      { text: "font-color", correct: false },
      { text: "background-color", correct: false },
    ],
  },
  {
    question:
      "Which CSS property is used to set the background color of an element?",
    answers: [
      { text: "background-color", correct: true },
      { text: "color", correct: false },
      { text: "bgcolor", correct: false },
      { text: "background", correct: false },
    ],
  },
  {
    question:
      "Which CSS property is used to control the spacing between lines of text?",
    answers: [
      { text: "line-height", correct: true },
      { text: "letter-spacing", correct: false },
      { text: "word-spacing", correct: false },
      { text: "text-spacing", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to make text bold?",
    answers: [
      { text: "font-weight", correct: true },
      { text: "font-style", correct: false },
      { text: "text-bold", correct: false },
      { text: "bold", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to add shadows to text?",
    answers: [
      { text: "text-shadow", correct: true },
      { text: "box-shadow", correct: false },
      { text: "shadow", correct: false },
      { text: "text-effect", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to align text horizontally?",
    answers: [
      { text: "text-align", correct: true },
      { text: "align-text", correct: false },
      { text: "horizontal-align", correct: false },
      { text: "text-position", correct: false },
    ],
  },
  {
    question:
      "Which CSS property is used to control the size of an element's font?",
    answers: [
      { text: "font-size", correct: true },
      { text: "text-size", correct: false },
      { text: "size", correct: false },
      { text: "font", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to add space outside an element?",
    answers: [
      { text: "margin", correct: true },
      { text: "padding", correct: false },
      { text: "spacing", correct: false },
      { text: "border-spacing", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to add space inside an element?",
    answers: [
      { text: "padding", correct: true },
      { text: "margin", correct: false },
      { text: "spacing", correct: false },
      { text: "inner-spacing", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to make an element's border rounded?",
    answers: [
      { text: "border-radius", correct: true },
      { text: "border-style", correct: false },
      { text: "border-round", correct: false },
      { text: "border-curve", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to hide an element?",
    answers: [
      { text: "display: none", correct: true },
      { text: "visibility: hidden", correct: false },
      { text: "opacity: 0", correct: false },
      { text: "hidden: true", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to create a flexbox layout?",
    answers: [
      { text: "display: flex", correct: true },
      { text: "display: grid", correct: false },
      { text: "display: block", correct: false },
      { text: "display: inline", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to create a grid layout?",
    answers: [
      { text: "display: grid", correct: true },
      { text: "display: flex", correct: false },
      { text: "display: block", correct: false },
      { text: "display: inline", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to control the order of flex items?",
    answers: [
      { text: "order", correct: true },
      { text: "flex-order", correct: false },
      { text: "item-order", correct: false },
      { text: "flex-item-order", correct: false },
    ],
  },
  {
    question:
      "Which CSS property is used to align items vertically in a flex container?",
    answers: [
      { text: "align-items", correct: true },
      { text: "justify-content", correct: false },
      { text: "vertical-align", correct: false },
      { text: "align-content", correct: false },
    ],
  },
  {
    question:
      "Which CSS property is used to align items horizontally in a flex container?",
    answers: [
      { text: "justify-content", correct: true },
      { text: "align-items", correct: false },
      { text: "horizontal-align", correct: false },
      { text: "align-content", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to add a shadow to an element's box?",
    answers: [
      { text: "box-shadow", correct: true },
      { text: "text-shadow", correct: false },
      { text: "shadow", correct: false },
      { text: "element-shadow", correct: false },
    ],
  },
  {
    question:
      "Which CSS property is used to control the transparency of an element?",
    answers: [
      { text: "opacity", correct: true },
      { text: "transparency", correct: false },
      { text: "visibility", correct: false },
      { text: "alpha", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to create a transition effect?",
    answers: [
      { text: "transition", correct: true },
      { text: "animation", correct: false },
      { text: "transform", correct: false },
      { text: "effect", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to rotate an element?",
    answers: [
      { text: "transform: rotate", correct: true },
      { text: "rotate", correct: false },
      { text: "transform: skew", correct: false },
      { text: "transform: translate", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to create a gradient background?",
    answers: [
      { text: "background-image", correct: true },
      { text: "gradient", correct: false },
      { text: "background-gradient", correct: false },
      { text: "linear-gradient", correct: false },
    ],
  },
  {
    question:
      "Which CSS property is used to control the stacking order of elements?",
    answers: [
      { text: "z-index", correct: true },
      { text: "stack-order", correct: false },
      { text: "order", correct: false },
      { text: "layer", correct: false },
    ],
  },
  {
    question: "Which CSS property is used to create a sticky element?",
    answers: [
      { text: "position: sticky", correct: true },
      { text: "position: fixed", correct: false },
      { text: "position: relative", correct: false },
      { text: "position: absolute", correct: false },
    ],
  },
  {
    question:
      "Which CSS property is used to control the overflow of content in an element?",
    answers: [
      { text: "overflow", correct: true },
      { text: "content-overflow", correct: false },
      { text: "scroll", correct: false },
      { text: "hidden", correct: false },
    ],
  },
  {
    question:
      "Which CSS property is used to create a border around an element?",
    answers: [
      { text: "border", correct: true },
      { text: "outline", correct: false },
      { text: "border-style", correct: false },
      { text: "border-width", correct: false },
    ],
  },
  {
    question:
      "Which CSS property is used to control the spacing between letters?",
    answers: [
      { text: "letter-spacing", correct: true },
      { text: "word-spacing", correct: false },
      { text: "line-height", correct: false },
      { text: "text-spacing", correct: false },
    ],
  },
  {
    question:
      "Which CSS property is used to control the spacing between words?",
    answers: [
      { text: "word-spacing", correct: true },
      { text: "letter-spacing", correct: false },
      { text: "line-height", correct: false },
      { text: "text-spacing", correct: false },
    ],
  },
  // JavaScript Questions (61-100)
  {
    question:
      "What is the correct syntax for referring to an external JavaScript file?",
    answers: [
      { text: '<script src="script.js">', correct: true },
      { text: '<script href="script.js">', correct: false },
      { text: '<script name="script.js">', correct: false },
      { text: '<script file="script.js">', correct: false },
    ],
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      { text: 'alert("Hello World");', correct: true },
      { text: 'msg("Hello World");', correct: false },
      { text: 'alertBox("Hello World");', correct: false },
      { text: 'msgBox("Hello World");', correct: false },
    ],
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      { text: "function myFunction() {}", correct: true },
      { text: "create myFunction() {}", correct: false },
      { text: "function = myFunction() {}", correct: false },
      { text: "function: myFunction() {}", correct: false },
    ],
  },
  {
    question: "How do you call a function named 'myFunction'?",
    answers: [
      { text: "myFunction();", correct: true },
      { text: "call myFunction();", correct: false },
      { text: "call function myFunction();", correct: false },
      { text: "myFunction.call();", correct: false },
    ],
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    answers: [
      { text: 'let colors = ["red", "green", "blue"];', correct: true },
      { text: 'let colors = "red", "green", "blue";', correct: false },
      { text: 'let colors = (1:"red", 2:"green", 3:"blue");', correct: false },
      { text: 'let colors = "red", "green", "blue";', correct: false },
    ],
  },
  {
    question: "How do you round the number 7.25 to the nearest integer?",
    answers: [
      { text: "Math.round(7.25);", correct: true },
      { text: "Math.rnd(7.25);", correct: false },
      { text: "round(7.25);", correct: false },
      { text: "rnd(7.25);", correct: false },
    ],
  },
  {
    question: "How do you find the number with the highest value of x and y?",
    answers: [
      { text: "Math.max(x, y);", correct: true },
      { text: "Math.highest(x, y);", correct: false },
      { text: "ceil(x, y);", correct: false },
      { text: "top(x, y);", correct: false },
    ],
  },
  {
    question: "What is the correct way to write a JavaScript object?",
    answers: [
      { text: 'let person = {name: "John", age: 25};', correct: true },
      { text: 'let person = {name = "John", age = 25};', correct: false },
      { text: 'let person = (name: "John", age: 25);', correct: false },
      { text: 'let person = [name: "John", age: 25];', correct: false },
    ],
  },
  {
    question: "How do you declare a JavaScript variable?",
    answers: [
      { text: "let x;", correct: true },
      { text: "variable x;", correct: false },
      { text: "v x;", correct: false },
      { text: "var x;", correct: false },
    ],
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    answers: [
      { text: "=", correct: true },
      { text: "-", correct: false },
      { text: "*", correct: false },
      { text: "x", correct: false },
    ],
  },
  {
    question: "What will the following code return: Boolean(10 > 9)?",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question: "Which method is used to remove the last element from an array?",
    answers: [
      { text: "pop()", correct: true },
      { text: "shift()", correct: false },
      { text: "slice()", correct: false },
      { text: "splice()", correct: false },
    ],
  },
  {
    question: "Which method is used to add an element to the end of an array?",
    answers: [
      { text: "push()", correct: true },
      { text: "unshift()", correct: false },
      { text: "concat()", correct: false },
      { text: "join()", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(typeof 42);?",
    answers: [
      { text: "number", correct: true },
      { text: "string", correct: false },
      { text: "boolean", correct: false },
      { text: "object", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(typeof 'Hello');?",
    answers: [
      { text: "string", correct: true },
      { text: "number", correct: false },
      { text: "boolean", correct: false },
      { text: "object", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(typeof true);?",
    answers: [
      { text: "boolean", correct: true },
      { text: "string", correct: false },
      { text: "number", correct: false },
      { text: "object", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(typeof {});?",
    answers: [
      { text: "object", correct: true },
      { text: "array", correct: false },
      { text: "null", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(typeof []);?",
    answers: [
      { text: "object", correct: true },
      { text: "array", correct: false },
      { text: "null", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(typeof null);?",
    answers: [
      { text: "object", correct: true },
      { text: "null", correct: false },
      { text: "undefined", correct: false },
      { text: "boolean", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(typeof undefined);?",
    answers: [
      { text: "undefined", correct: true },
      { text: "null", correct: false },
      { text: "object", correct: false },
      { text: "boolean", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(2 + '2');?",
    answers: [
      { text: "'22'", correct: true },
      { text: "4", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(2 - '2');?",
    answers: [
      { text: "0", correct: true },
      { text: "'22'", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(2 * '2');?",
    answers: [
      { text: "4", correct: true },
      { text: "'22'", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(2 / '2');?",
    answers: [
      { text: "1", correct: true },
      { text: "'22'", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(2 % '2');?",
    answers: [
      { text: "0", correct: true },
      { text: "'22'", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(2 ** '2');?",
    answers: [
      { text: "4", correct: true },
      { text: "'22'", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(2 == '2');?",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(2 === '2');?",
    answers: [
      { text: "false", correct: true },
      { text: "true", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(2 != '2');?",
    answers: [
      { text: "false", correct: true },
      { text: "true", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(2 !== '2');?",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(2 > '2');?",
    answers: [
      { text: "false", correct: true },
      { text: "true", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(2 < '2');?",
    answers: [
      { text: "false", correct: true },
      { text: "true", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(2 >= '2');?",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(2 <= '2');?",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(2 && '2');?",
    answers: [
      { text: "'2'", correct: true },
      { text: "2", correct: false },
      { text: "true", correct: false },
      { text: "false", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(2 || '2');?",
    answers: [
      { text: "2", correct: true },
      { text: "'2'", correct: false },
      { text: "true", correct: false },
      { text: "false", correct: false },
    ],
  },
  {
    question: "What is the output of the following code: console.log(!2);?",
    answers: [
      { text: "false", correct: true },
      { text: "true", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question: "What is the output of the following code: console.log(!'2');?",
    answers: [
      { text: "false", correct: true },
      { text: "true", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question: "What is the output of the following code: console.log(!0);?",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question: "What is the output of the following code: console.log(!'');?",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question: "What is the output of the following code: console.log(!null);?",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(!undefined);?",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question: "What is the output of the following code: console.log(!NaN);?",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question: "What is the output of the following code: console.log(!{});?",
    answers: [
      { text: "false", correct: true },
      { text: "true", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question: "What is the output of the following code: console.log(![]);?",
    answers: [
      { text: "false", correct: true },
      { text: "true", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(!function() {});?",
    answers: [
      { text: "false", correct: true },
      { text: "true", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(!new Date());?",
    answers: [
      { text: "false", correct: true },
      { text: "true", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(!new RegExp());?",
    answers: [
      { text: "false", correct: true },
      { text: "true", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(!new Error());?",
    answers: [
      { text: "false", correct: true },
      { text: "true", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
  {
    question:
      "What is the output of the following code: console.log(!new Map());?",
    answers: [
      { text: "false", correct: true },
      { text: "true", correct: false },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false },
    ],
  },
];
