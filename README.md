# real-dark-mode

A simple npm package to create the real dark mode experience on your website. It creates a spotlight effect on the page following your mouse, making the rest of the page darker.

[Demo on Vercel](https://real-dark-mode-demo.vercel.app/)

## Installation

```bash
npm install real-dark-mode
```

We made a plain javascript implementation for websites that don't use npm. It's available in the [plain-js directory](https://github.com/petya0927/real-dark-mode/tree/main/plain-js) and you can use it by importing the index.js file. It's only available in the repo, not the npm package!

```html
<script type="module">
import realDarkMode from "./plain-js/index.js";

realDarkMode();
</script>
```

## Usage

```javascript
import { realDarkMode } from "real-dark-mode";

realDarkMode();
```

When you call the `realDarkMode` function, it will start the dark mode effect. To stop it, call the function again. The effect will stop if the user scrolls.

### Options

| Option  | Type   | Default | Description                                                                 |
| ------- | ------ | ------- | --------------------------------------------------------------------------- |
| color   | string | #000000 | The color of the backdrop. Can be any valid CSS color.                      |
| size    | number | 100     | The size of the spotlight in pixels.                                        |
| falloff | number | 0.5     | The difference of the inner circle's size commpared to the outer one.       |
| opacity | number | 0.95    | The opacity of the spotlight. Must be a number between 0 and 1 (inclusive). |

```javascript
import { realDarkMode } from "real-dark-mode";

realDarkMode({
  color: "#000000",
  size: 100,
  falloff: 0.5,
  opacity: 0.95,
});
```

The package also exports a RealDarkModeOptions interface to deeper typescript integration.

## Contributing

Pull requests are welcome. For changes, please open an issue first to discuss what you would like to change. After that, feel free to open a pull request.

## License

[MIT](https://github.com/petya0927/real-dark-mode/blob/main/LICENSE)
