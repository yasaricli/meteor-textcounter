JQuery TextCounter for Meteor
==============
TextCounter is a jQuery plugin which provides a countdown of text in an input field. 
Inspired by the way Twitter counts down the remaining characters in a tweet, 
textCounter is a configurable jQuery plugin that easily allows anyone to add this same functionality. 
Written with best practices in mind, textCounter offers multiple character count ranges, 
custom coloration via CSS classes, and even the ability to prevent users from exceeding the character count limit. 
Let's see it in action.


## Installation

    meteor add yasaricli:textcounter

## Usage Meteor template onRendered

```html
<template name="demo">
  <textarea id="Demo"></textarea>
  <div id="Counter"></div>
</template>
```

```javascript
Template.demo.onRendered(function() {
  this.$('#Counter').textCounter({
    target: '#Demo', // required: string
    count: 70, // optional: if string, specifies attribute of target to use as value
               //           if integer, specifies value. [defaults 140]
    alertAt: 20, // optional: integer [defaults 20]
    warnAt: 10, // optional: integer [defaults 0]
    stopAtLimit: false // optional: defaults to false
  });
});
```
