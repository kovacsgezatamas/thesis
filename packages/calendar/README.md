# Calendar component - Thesis UI

<br />

## Installation

```sh
$ yarn add @thesis-ui/calendar
$ npm install @thesis-ui/calendar
```

<br />

## Usage

```jsx
import Calendar from '@thesis-ui/calendar';

const [date, setDate] = useState();

<Calendar
  date={date}
  mode="DATE"
  monthsNumber={2}
  onDateChange={setDate}
/>
```

<br />
