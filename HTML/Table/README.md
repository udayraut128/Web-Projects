# HTML Table Tags and Attributes

## Table of Contents
1. [Introduction](#introduction)
2. [HTML Table Tags](#html-table-tags)
   - [<table>](#table)
   - [<caption>](#caption)
   - [<tr>](#tr)
   - [<th>](#th)
   - [<td>](#td)
   - [<colgroup>](#colgroup)
   - [<col>](#col)
3. [Table Attributes](#table-attributes)
   - [border](#border)
   - [cellpadding](#cellpadding)
   - [cellspacing](#cellspacing)
   - [bgcolor](#bgcolor)
   - [align](#align)
   - [colspan](#colspan)
   - [rowspan](#rowspan)
4. [Complete Example](#complete-example)

---

## Introduction
HTML tables are used to display tabular data in a structured format using rows and columns. Tables can include headers, captions, and styling options for better presentation.

---

## HTML Table Tags

### `<table>`
Defines a table in HTML.

```html
<table border="1"> ... </table>
```

### `<caption>`
Defines a title or description for the table.

```html
<caption>Student Information</caption>
```

### `<tr>`
Defines a row in the table.

```html
<tr> ... </tr>
```

### `<th>`
Defines a header cell in the table.

```html
<th>Header</th>
```

### `<td>`
Defines a data cell in the table.

```html
<td>Data</td>
```

### `<colgroup>`
Defines a group of columns and applies styles to them.

```html
<colgroup>
    <col span="2" style="background-color: lightgray;">
</colgroup>
```

### `<col>`
Defines individual column properties.

```html
<col style="background-color: yellow;">
```

---

## Table Attributes

### `border`
Defines the border width of the table.

```html
<table border="2"> ... </table>
```

### `cellpadding`
Sets padding inside table cells.

```html
<table cellpadding="5"> ... </table>
```

### `cellspacing`
Sets spacing between table cells.

```html
<table cellspacing="5"> ... </table>
```

### `bgcolor`
Specifies background color for a table or cell.

```html
<table bgcolor="lightblue"> ... </table>
```

### `align`
Aligns table content horizontally (`left`, `center`, `right`).

```html
<th align="left">Header</th>
```

### `colspan`
Merges multiple columns into one.

```html
<td colspan="2">Merged Column</td>
```

### `rowspan`
Merges multiple rows into one.

```html
<td rowspan="2">Merged Row</td>
```

---

## Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Table Example</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
            padding: 10px;
            text-align: center;
        }
        th {
            background-color: lightblue;
        }
    </style>
</head>
<body>
    <h1>HTML Table Example</h1>
    <table border="2" cellpadding="5" cellspacing="5" bgcolor="lightgray">
        <caption><strong>Student Information Table</strong></caption>
        <colgroup>
            <col span="1" bgcolor="lightgreen">
            <col span="1" bgcolor="lightyellow">
            <col span="1" bgcolor="lightpink">
        </colgroup>
        <tr bgcolor="lightblue">
            <th align="center" colspan="3">Student Details</th>
        </tr>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
        </tr>
        <tr>
            <td rowspan="2" align="center">Alice</td>
            <td>20</td>
            <td>A</td>
        </tr>
        <tr>
            <td>21</td>
            <td>B</td>
        </tr>
        <tr>
            <td>Bob</td>
            <td colspan="2" align="center">Not Available</td>
        </tr>
    </table>
</body>
</html>
```

This README.md file covers all **HTML table tags and attributes** with examples for reference. 🚀

