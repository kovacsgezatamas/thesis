# Toggle component - Thesis UI

<br />

## Installation

```sh
$ yarn add @thesis-ui/toggle
$ npm install @thesis-ui/toggle
```

<br />

## Usage

```jsx
import Toggle from '@thesis-ui/toggle';

const [isOn, setIsOn] = useState(false);

function onChange() {
  setIsOn(!isOn);
}

<Toggle
  isChecked={isOn}
  value="testValue"
  labelValue={`Click me to turn ${isOn ? 'off' : 'on'}`}
  onChange={onChange}
/>
```

<br />
