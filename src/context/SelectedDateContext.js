import { format } from 'date-fns';
import { createContext, useState } from 'react';

const SelectedDateContext = createContext({
  selectedDate: '',
  setSelectedDate: () => {},
});

const SelectedDateProvider = ({ children }) => {
  const todayString = format(new Date(), 'yyyy-MM-dd');
  const [selectedDate, setSelectedDate] = useState(todayString);

  const value = {
    selectedDate: selectedDate,
    setSelectedDate: setSelectedDate,
  };
  return (
    <SelectedDateContext.Provider value={value}>
      {children}
    </SelectedDateContext.Provider>
  );
};

export { SelectedDateProvider };
export default SelectedDateContext;
