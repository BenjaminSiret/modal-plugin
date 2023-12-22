# React Essential Modal
This plugin is a modal component for React, with style customization using **Material-UI (MUI).**  
https://www.npmjs.com/package/react-essential-modal

### Installation
Install the plugin with npm:

```npm install react-essential-modal```

If MUI is **not** installed in your application:
```npm install @mui/material @emotion/react @emotion/styled```

### Usage
Import the plugin into your React file:

```import Modal from 'react-essential-modal'```

Use the Modal component in your code:
```javascript
<Modal isOpen={isModalOpen} onClose={closeModal} message={message}></Modal>
```

You can customize the style of the overlay, modal, and button using the necessary props.
:raised_hand: Pay attention, only *variants* from **MUI** are accepted for the button.

```javascript
<Modal
  isOpen={isModalOpen}
  onClose={closeModal}
  message={message}
  overlayStyles={myOverlayStyles}
  modalStyles={myModalStyles}
  buttonVariant={myVariant}
  buttonStyles={myButtonStyles}
  >
</Modal>
```
### Props
- `isOpen` (boolean): Determines whether the modal is open or closed.
- `onClose` (function): Function to execute when closing the modal.
- `message` (string): Message or content to display in the modal.
- `overlayStyles`  (object): Object of styles to customize the overlay.
- `modalStyles` (object): Object of styles to customize the modal.
- `buttonVariant` (string): Button variant, must be a value from MUI.
- `buttonStyles` (object): Object of styles to customize the button.

### MUI Compatibility
This component was created with MUI version 5.14.17.
Ensure you have this version (or a later version) installed in your project.
For additional guidance on installing MUI, consult the [documentation](https://mui.com/material-ui/)

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
