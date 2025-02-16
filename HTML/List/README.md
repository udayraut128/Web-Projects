# HTML List Tags & Attributes

## Table of Contents
1. [Introduction to Lists](#1-introduction-to-lists)
2. [Ordered List (`<ol>`) and Attributes](#2-ordered-list-ol-and-attributes)
3. [Unordered List (`<ul>`) and Attributes](#3-unordered-list-ul-and-attributes)
4. [List Items (`<li>`) and Attributes](#4-list-items-li-and-attributes)
5. [Definition List (`<dl>`)](#5-definition-list-dl)
6. [Definition Term (`<dt>`)](#6-definition-term-dt)
7. [Definition Description (`<dd>`)](#7-definition-description-dd)
8. [Complete HTML Example](#8-complete-html-example)

---

## 1. Introduction to Lists
Lists in HTML are used to group related items together. There are three types of lists:
- **Ordered List (`<ol>`)** – Numbered list.
- **Unordered List (`<ul>`)** – Bulleted list.
- **Definition List (`<dl>`)** – Term and description list.

---

## 2. Ordered List (`<ol>`) and Attributes
The `<ol>` tag is used to create an ordered (numbered) list.

### **Attributes of `<ol>`**
- `type`: Specifies the numbering style. Values: `"1"`, `"A"`, `"a"`, `"I"`, `"i"`.
- `start`: Specifies the starting number.
- `reversed`: Displays the list in reverse order.

### **Example:**
```html
<ol type="A" start="3" reversed>
    <li>Item One</li>
    <li>Item Two</li>
    <li value="10">Item Three (Starts from 10)</li>
</ol>
```

---

## 3. Unordered List (`<ul>`) and Attributes
The `<ul>` tag is used to create an unordered (bulleted) list.

### **Attributes of `<ul>`**
- `type` (Deprecated): Specifies the bullet style. Values: `"disc"`, `"circle"`, `"square"`.

### **Example:**
```html
<ul type="square">
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
</ul>
```

---

## 4. List Items (`<li>`) and Attributes
The `<li>` tag defines an item in an ordered or unordered list.

### **Attributes of `<li>`**
- `value`: Sets the number for an ordered list item (Only works with `<ol>`).

### **Example:**
```html
<ol>
    <li value="10">First</li>
    <li>Second</li>
</ol>
```

---

## 5. Definition List (`<dl>`)
The `<dl>` tag is used for lists of terms and their definitions.

### **Example:**
```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>
```

---

## 6. Definition Term (`<dt>`)
Defines a term in a `<dl>` list.

### **Example:**
```html
<dt>JavaScript</dt>
```

---

## 7. Definition Description (`<dd>`)
Defines a description for a `<dt>` term.

### **Example:**
```html
<dd>A programming language used for web development.</dd>
```

---

## 8. Complete HTML Example
The following HTML file includes all list-related tags and attributes in a structured way:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML List Tags and Attributes</title>
</head>
<body>
    <h1>HTML List Tags and Attributes</h1>
    
    <h2>Ordered List (`&lt;ol&gt;`)</h2>
    <ol type="A" start="3" reversed>
        <li>Item One</li>
        <li>Item Two</li>
        <li value="10">Item Three (Starts from 10)</li>
    </ol>
    
    <h2>Unordered List (`&lt;ul&gt;`)</h2>
    <ul type="square">
        <li>Apple</li>
        <li>Banana</li>
        <li>Cherry</li>
    </ul>
    
    <h2>Definition List (`&lt;dl&gt;`)</h2>
    <dl>
        <dt>HTML</dt>
        <dd>HyperText Markup Language</dd>
        <dt>CSS</dt>
        <dd>Cascading Style Sheets</dd>
    </dl>
</body>
</html>
```

---

## Summary of List Tags & Attributes
| Tag  | Description | Attributes |
|------|------------|------------|
| `<ol>` | Ordered list (numbered) | `type`, `start`, `reversed` |
| `<ul>` | Unordered list (bulleted) | `type` (Deprecated) |
| `<li>` | List item in `<ol>` or `<ul>` | `value` (only in `<ol>`) |
| `<dl>` | Definition list | None |
| `<dt>` | Definition term in `<dl>` | None |
| `<dd>` | Definition description in `<dl>` | None |

---

This README file now includes all list-related tags, attributes, examples, and an HTML implementation. 🚀

