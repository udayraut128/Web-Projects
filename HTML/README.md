# HTML Form Tags & Attributes

## 1. `<form>` (Form Tag)
Used to **collect user input** and send it to a server.

**Attributes:**
- `action`: Specifies the **URL** where form data will be sent.
- `method`: Defines **HTTP method** (`GET` or `POST`).
- `enctype`: Specifies how form data should be encoded (`multipart/form-data`, `application/x-www-form-urlencoded`, `text/plain`).
- `target`: Specifies where to display the response (`_self`, `_blank`, `_parent`, `_top`).
- `autocomplete`: Enables (`on`) or disables (`off`) autocomplete.

```html
<form action="submit.php" method="POST" autocomplete="on">
```

## 2. `<input>` (Input Tag)
Creates various **input fields**.

### Common Input Types:

| Input Type  | Description  | Example  |
|------------|------------|---------|
| `text` | Single-line text input | `<input type="text" placeholder="Enter Name">` |
| `password` | Hidden characters | `<input type="password">` |
| `email` | Email validation | `<input type="email">` |
| `number` | Only numbers allowed | `<input type="number">` |
| `date` | Date picker | `<input type="date">` |
| `time` | Time picker | `<input type="time">` |
| `checkbox` | Multiple choices | `<input type="checkbox">` |
| `radio` | Select one option | `<input type="radio">` |
| `file` | Upload file | `<input type="file">` |
| `submit` | Submit button | `<input type="submit">` |
| `reset` | Reset form | `<input type="reset">` |

### Additional Attributes:

| Attribute | Description | Example |
|------------|------------|---------|
| `placeholder` | Displays hint text | `<input type="text" placeholder="Enter name">` |
| `readonly` | Cannot edit | `<input type="text" readonly>` |
| `disabled` | Cannot interact | `<input type="text" disabled>` |
| `maxlength` | Max characters allowed | `<input type="text" maxlength="10">` |
| `pattern` | Validates input | `<input type="text" pattern="[A-Za-z]+">` |
| `autofocus` | Focuses input on page load | `<input type="text" autofocus>` |

---

## 3. `<label>` (Label for Input)
Connects text label to an input field using `for` attribute.

```html
<label for="name">Name:</label>
<input type="text" id="name" name="name">
```

---

## 4. `<textarea>` (Multi-line Input)
Allows users to enter multiple lines of text.

```html
<textarea name="message" rows="5" cols="30">Enter your message</textarea>
```

---

## 5. `<select>` & `<option>` (Dropdown Menu)
Allows users to select options from a list.

```html
<select name="country">
    <option value="india">India</option>
    <option value="usa">USA</option>
    <option value="uk">UK</option>
</select>
```

---

## 6. `<fieldset>` & `<legend>` (Grouping Form Elements)
Used to **group related inputs**.

```html
<fieldset>
    <legend>Personal Info</legend>
    <label for="fname">First Name:</label>
    <input type="text" id="fname" name="fname">
</fieldset>
```

---

## 7. `<button>` (Button)
Used for **custom buttons**.

```html
<button type="submit">Submit</button>
```

---

## 8. `<datalist>` (Predefined Input Suggestions)
Provides a **list of predefined options**.

```html
<input list="browsers" name="browser">
<datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Safari">
</datalist>
```

---

## 9. `<output>` (Display Form Calculation Results)
Displays a **calculated value**.

```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
    <input type="number" id="a" name="a"> +
    <input type="number" id="b" name="b">
    <output name="result"></output>
</form>
```

---

## 10. `<iframe>` (Embedded Content)
Embeds another webpage inside an HTML document.

```html
<iframe src="https://example.com" width="400" height="300"></iframe>
```

---

## 🎯 Summary

| Tag | Description |
|------|------------|
| `<form>` | Defines a form for user input |
| `<input>` | Creates various input fields |
| `<label>` | Labels an input field |
| `<textarea>` | Multi-line input |
| `<select>` & `<option>` | Dropdown menu |
| `<fieldset>` & `<legend>` | Groups inputs together |
| `<button>` | Creates a button |
| `<datalist>` | Provides a list of predefined options |
| `<output>` | Displays calculated results |
| `<iframe>` | Embeds another webpage |

---

This **README.md** covers all **HTML form-related tags and attributes** comprehensively! 🚀

