# real-dark-mode

A simple npm package to create the real dark mode experience on your website. It creates a spotlight effect on the page following your mouse, making the rest of the page darker.

## Installation

```bash
npm install real-dark-mode
```

## Usage

```javascript
import { realDarkMode } from "real-dark-mode";

realDarkMode();
```

### Options

| Option  | Type   | Default | Description                                                                 |
| ------- | ------ | ------- | --------------------------------------------------------------------------- |
| color   | string | #000000 | The color of the backdrop. Can be any valid CSS color.                      |
| size    | number | 100     | The size of the spotlight in pixels.                                        |
| opacity | number | 0.95    | The opacity of the spotlight. Must be a number between 0 and 1 (inclusive). |

```javascript
import { realDarkMode } from "real-dark-mode";

realDarkMode({
  color: "#000000",
  size: 100,
  opacity: 0.95,
});
```

## Contributing

Pull requests are welcome. For changes, please open an issue first to discuss what you would like to change. After that, feel free to open a pull request.

## License

[MIT](https://choosealicense.com/licenses/mit/)
