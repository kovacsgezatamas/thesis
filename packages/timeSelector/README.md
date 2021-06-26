# TimeSelector component - Thesis UI

<br />

## Installation

```sh
$ yarn add @thesis-ui/time-selector
$ npm install @thesis-ui/time-selector
```

<br />

## Usage

```jsx
import TimeSelector from '@thesis-ui/time-selector';

const [time, setTime] = useState();

function onChange(newTime) {
  setTime(newTime);
}

<TimeSelector
  value={time}
  onChange={onChange}
/>
```

<br />
