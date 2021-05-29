---
title: 'How to: Make a Mini Messenger with JavaScript For Beginners'
date: '2020-05-25'
tags: ["javascript", "html", "css", "beginners"]
---

Hey there, welcome to my first post. So, in this post our goal is to make a **Mini Messenger**.
In this tutorial I'll be using JavaScript mostly but I will also include a link to my CodePen where you will be able to access the HTML and CSS of this project.
This tutorial is aimed at beginners or anyone interested in catching a thing or two.

### Getting Started

The messenger I will be making in this tutorial will include a text box where the message will be written and once submitted it will be displayed on the screen for 2 seconds then disappear.

I will try to explain as I continue and include code snippets as well, so make sure you try it out by yourself. Here is the [CodePen](https://codepen.io/inezabonte/pen/RwWqLKj) Project in case you need a reference point.

---

### Structure

Below I have provided the structure of my HTML document which will help you understand the some of the classes and elements  I will be referring to as We go along.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Messenger</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="main">
        <h4>A Message You would like to pass</h4>

        <!-- Input form and submission -->
        <form class="message-form">
            <input type="text" class="typedMessage" placeholder="Type Your Message..." autofocus>
            <button class="submit">Send</button>
        </form>

        <!-- Output for two seconds -->
        <h5>Last Message Delivered</h5>
        <div class="messages"></div>

    </div>
    
    <script src="app.js"></script>
</body>
</html>
```

### Create function to render messages

To start off I need to set up an array that will hold our messages. Each message will be an object with two properties, `text` and `id`. `text` will be used to store the message that has been typed by the user and the `id` will be used to give the message a unique number . They will all be stored within the ``chat`` object within the ``addMessage()`` function.

```js
//Create an array where the message along with it's ID will be stored.
let message = [];

// This fuction will enables us to add the message to the DOM
function addMessage(text){
    //Object where message will be stored
    const chat = {
        text,
        id: Date.now()
    }

    message.push(chat);
    console.log(message);
}
 ```

Next I will add an event listener to listen for the `submit` event within the input form `.message-form`. Inside the form I have a text input which has a class called `.typedMessage`. The event will store the message within the `input` constant.

```js
//Create event listener to detect when a message has been submitted
const form = document.querySelector('.message-form');
form.addEventListener('submit', event => {
    event.preventDefault();

    //input to save the message itself
    const input = document.querySelector('.typedMessage');

    //This helps us to detect empty messages and ignore them
    const text = input.value.trim();

    if(text !== ''){
        addMessage(text);
        input.value = '';
        input.focus();
        
    }
});
```

Then the `.trim()` method will be used to remove extra space from the beginning of the message at the end of the message. This will help us to know whether the string is empty or not. If the message is empty it will be ignored. If not empty, then it will be passed through the `addMessage()` function, the input field will be cleared and be focused on.

The `Date.now()` function allows us to create unique ID for each message. It returns the number of elapsed milliseconds since January 1, 1970 This will assist you when you want to refer to a specific message for other features you may wish to include such as a delete button.

Up to where I've reached if you type a message in your text box you should be able to see the output of your message and ID in the console.

![Output from the console](https://dev-to-uploads.s3.amazonaws.com/i/4qi90x7dpybaolz3xpxx.png)

### Render the Message

After the message has been pushed to the array, I now want to be able to display it on the page, and I will do this by adding a `p` element with the message to a class in our html called `.messages`.

Replace the ``console.log()`` statement in the ``addMessage()`` as follows:

```js
function addMessage(text){
    //Object where message will be stored
    const chat = {
        text,
        id: Date.now()
    }

    message.push(chat);
    
    //Render message to the screen
    const list = document.querySelector('.messages');
    list.insertAdjacentHTML('beforeend', 
        `<p class="message-item" data-key="${chat.id}">
            <span>${chat.text}</span>
        </p>`

    );
   
}
```

In the ``list`` constant I select the `.messages` class and I use the ``insertAdjacentHTML()`` method to insert the html code into the html document specifically ``beforeend``, which means just inside the element, after its last child. After this you should be able to type your message and it will be displayed on the screen.

![The results printed on screen](https://dev-to-uploads.s3.amazonaws.com/i/9qh7ix4834lqephjrgwz.png)

### Add Timer

So far our app is working great, but I want the message I wrote to disappear after 2 seconds. To achieve this I will make use of the ``setTimeout()`` method which executes only once after a certain period of time. This method takes two main parameters which are ``function to be executed`` and the ``delay in milliseconds``.

Add the timer variable last in the ``addMessage()`` function.

```js
function addMessage(text){
    //Object where message will be stored
    const chat = {
        text,
        id: Date.now()
    }

    message.push(chat);

    //Render message to the screen
    const list = document.querySelector('.messages');
    list.insertAdjacentHTML('beforeend', 
        `<p class="message-item" data-key="${chat.id}">
            <span>${chat.text}</span>
        </p>`

    );
    
    // Delete the message from the screen after 2 seconds
    let timer = setTimeout(() => {
        Array.from(list.children).forEach((child) => 
       list.removeChild(child))
       clearTimeout(timer);
      },2000);
}
```

Within the ``setTimeout()`` I create an arrow function, then I use ``Array.from()`` to create a method that selects all the children within the list variable. Next I use a ``.forEach()``method which executes an arrow function that removes all the children from the list variable. Then finally I use ``clearTimeout(timer)`` that cancels the timer that I set. After the function parameter I also remember to include the time limit which is 2000 milliseconds for 2 seconds.

![Message disappear after 2 seconds](https://dev-to-uploads.s3.amazonaws.com/i/9zyceaahme03l7690ner.gif)

Here is a link to the finished version on [CodePen](https://codepen.io/inezabonte/pen/RwWqLKj)

Thank You for taking your time to read this. I hope it has helped you or given you an idea of what you can make using the same concepts I used.
