# Awesome ToolTips

A custom made light weight HTML web component made using vanilla javascript which allows you to insert short tooltips in between your text with a single line of code.

## Installation
Run this in your project directory
```Bison
npm install awesome-tooltips
         or
yarn add awesome-tooltips
```
## Usage
In the file you want to use this in import the script using
```html
<script src="node_modules/awesome-tooltips/src/index.js"></script>
```
and use the tool-tip tag using
```html
<tool-tip></tool-tip>
```
## Documentation
| Attribute Name | Description | Default |
|-|-|-|
| circle_background | Sets the background color of the circle. | blue |
| circle_icon | Sets the icon of the circle. It can be a String or a word but a single character is recommended | ! |
| circle_icon_size | Sets the size of the icon. | Inherits from the parent |
| circle_radius | Sets the radius of the circle. | Inherits from the parent |
| tip_background | Sets the background color of the  tip. | white |
| tip_color | Sets the color of the tip. | black |
| tip_position | Sets the position of the tip to one of the predefined positions. top, bottom, left, right, top-right, top-left, bottom-right, bottom-left. | none |
| custom_tip_position | Sets the position of the tip to a custom location set by the user. This need to be passed as an object in which the top, left, right, bottom attributes need to be assigned. | none |
| tip_height | Sets the height of the tip. | auto |
| tip_width | Sets the width of the tip. | 200px |
