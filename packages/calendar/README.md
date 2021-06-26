# Calendar component - Thesis UI

<br />

## Installation

```sh
$ yarn add @thesis-ui/calendar
$ npm install @thesis-ui/calendar
```

<br />

## Usage

```js
import Calendar from '@thesis-ui/calendar';

const [date, setDate] = useState();

<Calendar
  date={date}
  mode="DATE"
  monthsNumber={1}
  onDateChange={setDate}
/>
```

<br />
