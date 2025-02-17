# CSS Selectors

CSS selectors are used to select and style HTML elements. They define patterns to match elements and apply styles accordingly.

## Table of Contents
1. [Universal Selector (`*`)](#universal-selector)
2. [Element Selector](#element-selector)
3. [ID Selector (`#id`)](#id-selector)
4. [Class Selector (`.class`)](#class-selector)
5. [Group Selector (`A, B`)](#group-selector)
6. [Attribute Selector (`[attribute]`)](#attribute-selector)
7. [Pseudo-class Selector (`:hover, :nth-child(n)`) ](#pseudo-class-selector)
8. [Pseudo-element Selector (`::before, ::after`)](#pseudo-element-selector)
9. [Combinator Selectors](#combinator-selectors)
10. [Complete Example](#complete-example)
11. [Conclusion](#conclusion)

---

## Universal Selector
- Selects all elements on the page.
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

## Element Selector
- Targets specific HTML elements.
```css
h1 {
    color: blue;
    font-size: 24px;
}
```

## ID Selector
- Targets a specific element with a unique `id`.
```css
#main-heading {
    color: red;
    text-align: center;
}
```

## Class Selector
- Targets elements with a specific class.
```css
.box {
    width: 200px;
    height: 100px;
    background-color: lightblue;
}
```

## Group Selector
- Targets multiple elements with the same style.
```css
h1, h2, p {
    color: green;
}
```

## Attribute Selector
- Selects elements based on their attributes.
```css
input[type="text"] {
    border: 2px solid blue;
}
```

## Pseudo-class Selector
- Targets elements in a specific state.
```css
button:hover {
    background-color: orange;
}
```
```css
li:nth-child(odd) {
    background-color: lightgray;
}
```

## Pseudo-element Selector
- Selects parts of elements.
```css
p::first-letter {
    font-size: 24px;
    color: red;
}
```
```css
h1::after {
    content: " ✅";
    color: green;
}
```

## Combinator Selectors
### Descendant Selector (`A B`)
```css
div p {
    color: blue;
}
```
### Child Selector (`A > B`)
```css
div > p {
    color: red;
}
```
### Adjacent Sibling Selector (`A + B`)
```css
h1 + p {
    color: orange;
}
```
### General Sibling Selector (`A ~ B`)
```css
h1 ~ p {
    color: purple;
}
```

## Complete Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Selectors Example</title>
    <style>
        * { font-family: Arial, sans-serif; }
        h1 { color: blue; }
        #main { text-align: center; background-color: yellow; }
        .box { width: 100px; height: 100px; background-color: lightblue; display: inline-block; }
        h1, h2 { font-size: 24px; }
        input[type="text"] { border: 2px solid green; }
        button:hover { background-color: red; color: white; }
        p::first-letter { font-size: 24px; color: red; }
        div p { color: blue; }
        div > p { font-weight: bold; }
        h1 + p { color: orange; }
        h1 ~ p { color: purple; }
    </style>
</head>
<body>
    <h1>CSS Selectors</h1>
    <h2 id="main">Heading with ID</h2>
    <div class="box"></div>
    <div class="box"></div>
    <input type="text" placeholder="Enter something">
    <button>Hover Over Me</button>
    <p>First paragraph</p>
    <p>Second paragraph</p>
    <div>
        <p>Inside div</p>
    </div>
</body>
</html>
```

## Conclusion
CSS selectors allow you to precisely target HTML elements and apply styles effectively. Different selectors provide flexibility in styling and layout.

