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

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---
