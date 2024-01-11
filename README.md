# React Essential Modal
This plugin is a modal component for React, with a default style fully customizable**  
https://www.npmjs.com/package/react-essential-modal

### Installation
Install the plugin with npm:

```npm install react-essential-modal```

### Usage
Import the plugin into your React file:

```import Modal from 'react-essential-modal'```

Use the Modal component in your code:
```javascript
<Modal isOpen={isModalOpen} onClose={closeModal} message={message}></Modal>
```

You can customize the style of the overlay, modal, and button using the necessary props.

```javascript
<Modal
  isOpen={isModalOpen}
  onClose={closeModal}
  message={message}
  overlayStyle={myOverlayStyles}
  modalStyle={myModalStyles}
  buttonStyle={myButtonStyles}
  >
</Modal>
```
### Props
- `isOpen` (boolean): Determines whether the modal is open or closed.
- `onClose` (function): Function to execute when closing the modal.
- `message` (string): Message or content to display in the modal.
- `overlayStyle`  (object): Object of styles to customize the overlay.
- `modalStyle` (object): Object of styles to customize the modal.
- `buttonStyle` (object): Object of styles to customize the button.

### Author
Benjamin Siret

### Licence
MIT

### Development Dependencies
- `@babel/cli": "^7.23.0`
- `@babel/core": "^7.23.3`
- `@babel/preset-env": "^7.23.3`
- `@babel/preset-react": "^7.23.3`

### Babel Prerequisites
This project uses the following Babel presets:
- `@babel/preset-env`
- `@babel/preset-react`

Ensure you have these presets installed in your project to use this plugin.
