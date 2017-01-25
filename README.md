# MeterialMenuJS

### Description

MeterialMenuJS is create in order to let developer want to use meterail menu but want to custom their own menu style list. 

- When click on icon, view in tag items will be appear. 
- When mouse leave the menu, view in tag items will be hiddens.

### Note
* Defualt font size of icon is **24px**.
* When you need to custom size of the icon menu, please also override style **font-size** of class **icon**.
  if you are using material-icons font, please also override style **font-size** of class **icon**.

### Require 

- v1.13.1 CSSPlugin.min.js
- v1.13.1 EasePack.min.js
- v1.13.1 TweenLite.min.js
- v3.1.1 jquery.min.js

### Options

- onClice: Event of mouse on click of icon.
- onMouseLeave: Event of mouse leave of icon.

### Form

```html
<menu id="menu1">
    <icon>
        <button type="button"><span class="material-icons">menu</span></button>
    </icon>
    <items>
        <ol>
            <li><a href="#1">Item 1</a></li>
        </ol>
    </items>
</menu>
```


