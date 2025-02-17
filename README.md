# Toast Notify

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/1dev-hridoy/Toast-Notify)
[![Size](https://img.shields.io/badge/size-2.5kb-brightgreen.svg)](https://github.com/1dev-hridoy/Toast-Notify)
[![Stars](https://img.shields.io/github/stars/1dev-hridoy/Toast-Notify?style=social)](https://github.com/1dev-hridoy/Toast-Notify)

A lightweight, customizable toast notification library for modern web applications. Easily add beautiful notifications to your web projects with minimal setup.

## Features

- Zero dependencies
- Simple and intuitive API
- Fully customizable appearance
- Responsive and mobile-friendly
- Multiple notification types (success, error, warning, info)
- Lightweight and fast
- Works in all modern browsers

## Installation

### Using CDN

Add the following links to your HTML file:

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/1dev-hridoy/Toast-Notify@latest/src/toast-notify.css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/gh/1dev-hridoy/Toast-notify@latest/src/toast-notify.js"></script>
```

## Usage

```javascript
// Show a success notification
Toast.success("Operation completed successfully!");

// Show an error notification
Toast.error("An error occurred!");

// Show a warning notification
Toast.warning("Please check your input!");

// Show an info notification
Toast.info("New updates available!");
```

## API Reference

### Methods

- `Toast.success(message, options)`
- `Toast.error(message, options)`
- `Toast.warning(message, options)`
- `Toast.info(message, options)`


### Options

| Option     | Type     | Default | Description                         |
|------------|----------|---------|-------------------------------------|
| duration   | number   | 3000    | Duration in milliseconds           |
| position   | string   | 'top'   | Notification position on screen    |
| theme      | string   | 'light' | Theme of the notification         |

## Customization

You can customize the appearance of your notifications by overriding the default CSS classes. The library provides several CSS classes for different notification types and positions.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Author

Created with  by [1dev-hridoy](https://github.com/1dev-hridoy)

## Support

For support, please [open an issue](https://github.com/1dev-hridoy/Toast-Notify/issues) on GitHub.
