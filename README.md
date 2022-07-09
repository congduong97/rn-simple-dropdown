## rn-simple-dropdown ##
A simple dropdown component
## Features ##
- Pure js
- Compatible with both iOS and Android.
- Easy to customize item and style.
<img src="https://user-images.githubusercontent.com/39731881/176364706-68edae2e-3ad1-47ea-bb06-1b9ca82a9990.gif" width="250" height="550"/>

## Installation ##

```
  npm i rn-simple-dropdown
```
or

```
  yarn add rn-simple-dropdown
```

## Usage ##

```js
 import Dropdown from 'rn-simple-dropdown';
 ...
  const DATA = [
   {key: '1', label: 1},
   {key: '2', label: 2},
   {key: '3', label: 3},
   {key: '4', label: 5},
   {key: '5', label: 6},
   {key: '6', label: 7},
   {key: '7', label: 8},
   {key: '8', label: 9},
   {key: '9', label: 10},
   {key: '10', label: 11},
   {key: '11', label: 12},
 ];
 ....
 <Dropdown data={DATA} placeholder="placeholder" maxHeightList={200} />
```

## Props ##
| name  | type | default | description  |
| ------- | ------- | ------- | ------- |
| data  | **require** Array<{key:string\|numner, label:string\|number}>    | undefined     |       list data       |
| initValue | {key:string\|numner, label:string\|number}| undefined  |initial initialized value|
|  placeholder | string | undefined |    The string that will be rendered before dropdown has been selected  |
| onChange | function | (val) => void | Callback that is called when the value be changed. |
| style | ViewStyle | null | Style is applied to dropdown |
| listContainerStyle | ViewStyle | null | Style is applied to container of list |
| activeColor | string | '#f5f5f5'| backgroundcolor of active item |
| renderViewItem | function | (item, activeItem) => JSX.Element \| undefined | Custom item function |
| icon | View | any | right icon on dropdown |
| overlayColor | string | 'transparent' | color of backdrop |
| maxHeightList | number | undefined | max height to set list data can scroll |
| scrollStyle | ViewStyle | undefined | style apply to scrollview of list data |
| textStyle | TextStyle | undefined | style apply to text value in dropdown |
| placeholderStyle | TextStyle | undefined | style aplly to placerholder text |
| ref | Ref | undefined | Reference of dropdown |

### Method ##
| name  | description  |
| ------- | ------- |
| open() | Open dropdown |
| close() | Close dropdown |
| getValue() | get value of selected item |
| setValue(item)| set value for dropdown |

## Next version ##

Looking forward to your constructive comments and suggestions

