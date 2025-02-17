# CSS Position Properties

CSS position properties define how an element is positioned in a document. The `position` property has five different values:

## Table of Contents
1. [Static Position](#static-position)
2. [Relative Position](#relative-position)
3. [Absolute Position](#absolute-position)
4. [Fixed Position](#fixed-position)
5. [Sticky Position](#sticky-position)
6. [Comparison Example](#comparison-example)
7. [Conclusion](#conclusion)

---

## Static Position
- Default position of an element.
- Elements appear in the normal document flow.
- `top`, `left`, `right`, `bottom` properties do not affect it.

```css
div {
    position: static;
    background-color: lightgray;
}
```

## Relative Position
- Positioned relative to its normal position.
- `top`, `left`, `right`, `bottom` can be used to move the element.

```css
div {
    position: relative;
    top: 20px;
    left: 30px;
    background-color: lightblue;
}
```

## Absolute Position
- Positioned relative to the nearest positioned (not `static`) ancestor.
- If no ancestor is positioned, it is relative to the document body.

```css
div {
    position: absolute;
    top: 50px;
    left: 100px;
    background-color: lightcoral;
}
```

## Fixed Position
- Positioned relative to the viewport (browser window).
- It does not move when the page is scrolled.

```css
div {
    position: fixed;
    top: 10px;
    right: 10px;
    background-color: lightgreen;
}
```

## Sticky Position
- Acts as `relative` until a certain scroll position, then becomes `fixed`.

```css
div {
    position: sticky;
    top: 0;
    background-color: yellow;
}
```

## Comparison Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Position Example</title>
    <style>
        .container {
            width: 100%;
            height: 600px;
            border: 2px solid black;
            position: relative;
        }
        .box {
            width: 100px;
            height: 100px;
            color: white;
            text-align: center;
            line-height: 100px;
        }
        .static { position: static; background-color: gray; }
        .relative { position: relative; top: 20px; left: 30px; background-color: blue; }
        .absolute { position: absolute; top: 50px; left: 50px; background-color: red; }
        .fixed { position: fixed; top: 10px; right: 10px; background-color: green; }
        .sticky { position: sticky; top: 0; background-color: yellow; }
    </style>
</head>
<body>
    <div class="container">
        <div class="box static">Static</div>
        <div class="box relative">Relative</div>
        <div class="box absolute">Absolute</div>
        <div class="box fixed">Fixed</div>
        <div class="box sticky">Sticky</div>
    </div>
    <p>Scroll down to see the effect of `fixed` and `sticky` positioning.</p>
</body>
</html>
```

## Conclusion
Understanding CSS positioning helps in precise layout control. Each property serves different use cases, and combining them can create complex layouts efficiently.

