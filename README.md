# react-native-normalized-size

normalizing size of elements across different devices.

## Installation

```sh
npm install react-native-normalized-size
```

## Usage

```js
import normalizedSize from 'react-native-normalized-size';
import { Text } from 'react-native';

// ...

const MyComponent = () => {
    return (
        <Text
            style={{
                fontSize: normalizedSize(20),
            }}>
            My Component
        </Text>
    );
};
```
## Output View
<img width="1067" alt="Screenshot 2024-06-27 at 10 11 43" src="https://github.com/yousefturin/react-native-normalized-size/assets/94796673/fcb480ed-80ef-4058-a167-cf876a28c7b5">


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---
