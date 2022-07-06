import { createContext, useState } from 'react';

const DateContext = createContext({ date: '', dispatch: () => {} });

export default DateContext;
