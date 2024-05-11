# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
 


## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./FAQ%20accordion%20screenshot.png)



### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

I started with HTML and CSS first and then finished up with the JavaScript. JavaScript part took me nearly 2-3 hours to solve.

### Built with

- Semantic HTML5 markup
- CSS custom properties
-JavaScript



### What I learned

The most challenging aspect for me was figuring out the logic for the JavaScript code that would change the image when clicked to another image and also turn on the class name to display the answers. 
I learned the way to use for loop in there and new methods such as .contains() and .includes() which ended up being very helpful. Another thing I learned is to look for different ways to solve one problem. For example, I can have the button turn back to the plus sign on the second click if either the answers were being displayed or if the the current button is the minus button.

`
```js
for(i=0; i<plusSignLength; i++){
    let clicked= document.querySelectorAll(".plus")[i];
    
    let answer = document.querySelectorAll(".hide")[i];
    clicked.addEventListener("click",function(){
        answer.classList.toggle("hide");
        console.log(clicked.src);
        if(clicked.src.includes("icon-plus.svg")){
        clicked.src = "./assets/images/icon-minus.svg";
        console.log(clicked.src);
        } else {
            clicked.src="./assets/images/icon-plus.svg";

        }
    })
}

```





### Continued development

My goal is to continue practicing implementing JavaScript to actual html and css that I created because I've been learning JavaScript for nearly a month but I have struggled when it comes to connecting it to my HTML and CSS codes and solving issues for my own project.



