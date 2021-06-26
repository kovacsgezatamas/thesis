# Checkbox component - Thesis UI

<br />

## Installation

```sh
$ yarn add @thesis-ui/checkbox
$ npm install @thesis-ui/checkbox
```

<br />

## Usage

```jsx
import Checkbox from '@thesis-ui/checkbox';

const [isChecked, setIsChecked] = useState(false);

function onChange() {
  setIsChecked(!isChecked);
}

<Checkbox
  isChecked={isChecked}
  value="testValue"
  labelValue={`Click me to ${isChecked ? 'uncheck' : 'check'}`}
  onChange={onChange}
/>
```

<br />
