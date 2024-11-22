# Migration Guide

This guide helps you convert existing JavaScript code to use NARF's core functions using search and replace at the folder level.

> ⚠️ **Important**: Always backup your code before performing bulk replacements!

## Basic Element Selection Replacements

### getElementById Replacements

Search for:
```javascript
document.getElementById\((["'])(.*?)\1\)
```

Replace with:
```javascript
elem('#$2')
```

This will convert:
- `document.getElementById("header")` → `elem('#header')`
- `document.getElementById('content')` → `elem('#content')`

### getElementsByClassName Replacements

For single element (first match):

Search for:
```javascript
document.getElementsByClassName\((["'])(.*?)\1\)\[0\]
```

Replace with:
```javascript
elem('.$2')
```

This will convert:
- `document.getElementsByClassName("card")[0]` → `elem('.card')`
- `document.getElementsByClassName('menu')[0]` → `elem('.menu')`

For multiple elements:

Search for:
```javascript
document.getElementsByClassName\((["'])(.*?)\1\)
```

Replace with:
```javascript
elems('.$2')
```

This will convert:
- `document.getElementsByClassName("card")` → `elems('.card')`
- `document.getElementsByClassName('menu')` → `elems('.menu')`

### getElementsByTagName Replacements

For single element (first match):

Search for:
```javascript
document.getElementsByTagName\((["'])(.*?)\1\)\[0\]
```

Replace with:
```javascript
elem('$2')
```

This will convert:
- `document.getElementsByTagName("div")[0]` → `elem('div')`
- `document.getElementsByTagName('p')[0]` → `elem('p')`

For multiple elements:

Search for:
```javascript
document.getElementsByTagName\((["'])(.*?)\1\)
```

Replace with:
```javascript
elems('$2')
```

This will convert:
- `document.getElementsByTagName("div")` → `elems('div')`
- `document.getElementsByTagName('p')` → `elems('p')`

### querySelector Replacements

Search for:
```javascript
document.querySelector\((["'])(.*?)\1\)
```

Replace with:
```javascript
elem('$2')
```

This will convert:
- `document.querySelector(".header")` → `elem('.header')`
- `document.querySelector('#main > div')` → `elem('#main > div')`

### querySelectorAll Replacements

Search for:
```javascript
document.querySelectorAll\((["'])(.*?)\1\)
```

Replace with:
```javascript
elems('$2')
```

This will convert:
- `document.querySelectorAll(".card")` → `elems('.card')`
- `document.querySelectorAll('p > span')` → `elems('p > span')`

## Manual Review Required

Some patterns might need manual review:

1. Variable selectors:
```javascript
// These need manual review
document.getElementById(dynamicId)
document.querySelector(selector)
```

2. Chained operations:
```javascript
// These need manual review
document.getElementsByClassName("menu")[someVariable]
document.getElementsByTagName("div")[calculateIndex()]
```

3. Complex expressions:
```javascript
// These need manual review
document.getElementById(id + "-section")
document.querySelector(`#${dynamicId}`)
```

## Testing After Migration

After performing replacements:

1. Search for remaining `document.getElement` and `document.querySelector` instances
2. Test all affected pages and functionality
3. Check browser console for errors
4. Verify dynamic content still works correctly

## IDE-Specific Search/Replace

### VS Code
1. Press `Ctrl+Shift+H` (Windows/Linux) or `Cmd+Shift+H` (Mac)
2. Enable regex mode (.*) 
3. Use "Replace in Files"
4. Select your target directory
5. Use the patterns above one at a time

### WebStorm/IntelliJ
1. Press `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. Enable regex mode
3. Select "Scope" as Directory
4. Use the patterns above one at a time

### Sublime Text
1. Press `Ctrl+Shift+F` (Windows/Linux) or `Cmd+Shift+F` (Mac)
2. Enable regex mode
3. Select your target directory
4. Use the patterns above one at a time
