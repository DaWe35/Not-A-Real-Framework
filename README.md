# Not A Real Framework

Plain JS is cool, except...

# What is NARF?

It's Not A Real Framework. It's just 6 lines of code that let's you manipulate DOM using plain JS in a bit cleaner way. 

### Your old code

```javascript
const number = document.getElementById("myCalculator").textContent
document.getElementById("myCalculator").textContent = parseInt(number) + 1

document.getElementByClassName("elementClass")[0].textContent = "Hello class"

const elementTags = document.getElementByTagName("elementTag")
for (let i = 0; i < elementTags.length; i++) {
    elementTags[i].innerHTML = `<p>HTML is JS is my favorite</p>`
}
```

### Your new code (basic)

```javascript
const number = elem('#myCalculator').textContent
elem('#myCalculator').textContent = parseInt(number) + 1

elem('.elementClass').textContent = `Hello class`

const elementTags = elems('elementTag')
for (let i = 0; i < elementTags.length; i++) {
    elementTags[i].innerHTML = `<p>HTML is JS is my favorite</p>`
}
```

### Your new code (extra)

```javascript
const number = elemText('#myCalculator')
elemText('#myCalculator', parseInt(number) + 1)

elemText('.elementClass', 'Hello class')

elemsHtml('elementTag', 'all', `<p>HTML is JS is my favorite</p>`)
```

# Installation

Include the core functionality:

```html
<script src="src/core.js"></script>
```

For additional utilities (optional):

```html
<script src="src/extra.js"></script>
```

# Documentation

## Core Functions (core.js)

### Element Selection
All selection functions accept any valid CSS selector (id, class, tag, or complex selectors).

#### Single Element Selection
```javascript
elem(selector: string) → Element

// Examples
elem('#myId')                  // by ID
elem('.myClass')               // by class
elem('div')                    // by tag
elem('.parent > .child')       // complex selector
```

#### Multiple Elements Selection
```javascript
elems(selector: string) → NodeList

// Examples
elems('.items')               // all elements with class 'items'
elems('p')                    // all paragraph elements
elems('.parent > .child')     // all children matching selector
```

## Extra Functions (extra.js)

### Text Operations

#### Single Element Text
```javascript
// Get text
elemText(selector: string) → string
const message = elemText('#status')    // get text content

// Set text
elemText(selector: string, text: string) → void
elemText('#status', 'Ready')          // set text content
```

#### Multiple Elements Text
```javascript
// Get text
elemsText(selector: string, elemIndex: number|'all') → string|string[]
elemsText('.items', 0)                // get first element's text
elemsText('.items', 'all')            // get all elements' text as array

// Set text
elemsText(selector: string, elemIndex: number|'all', text: string) → void
elemsText('.items', 0, 'First')       // set first element's text
elemsText('.items', 'all', 'Same')    // set all elements' text
```

### HTML Operations

#### Single Element HTML
```javascript
// Get HTML
elemHtml(selector: string) → string
const content = elemHtml('#container')    // get HTML content

// Set HTML
elemHtml(selector: string, html: string) → void
elemHtml('#container', '<span>New</span>') // set HTML content
```

#### Multiple Elements HTML
```javascript
// Get HTML
elemsHtml(selector: string, elemIndex: number|'all') → string|string[]
elemsHtml('.cards', 0)                    // get first element's HTML
elemsHtml('.cards', 'all')                // get all elements' HTML as array

// Set HTML
elemsHtml(selector: string, elemIndex: number|'all', html: string) → void
elemsHtml('.cards', 0, '<span>First</span>')         // set first element's HTML
elemsHtml('.cards', 'all', '<span>Same</span>')      // set all elements' HTML
```

### Visibility Control
```javascript
// Show element (sets visibility to 'visible')
elemShow(selector: string) → void
elemShow('#modal')

// Hide element (sets visibility to 'hidden')
elemHide(selector: string) → void
elemHide('#modal')
```

## Philosophy

> "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away." - Antoine de Saint-Exupéry

NARF embraces this philosophy. No build tools. No dependencies. No complexity. Just clean, simple JavaScript that makes DOM manipulation more enjoyable.

## License

MIT License - Use it however you want!

# Migration Guide

See [MIGRATION.md](MIGRATION.md)
