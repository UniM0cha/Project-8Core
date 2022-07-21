import { createContext, useState } from 'react';

const DateContext = createContext({ date: 0, dispatch: () => {} });

const DateProvider = ({ children }) => {
  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);

  const [date, setDate] = useState(today);

  const value = { date: date, dispatch: setDate };
  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

export { DateProvider };
export default DateContext;
