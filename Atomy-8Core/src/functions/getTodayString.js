// 오늘 날짜를 파싱해서 String 형식으로 반환하는 함수

import { format } from 'date-fns';

// 'Thu Jul 21 2022 00:00:00 GMT+0900 (KST)' => '2022-07-21' => AsyncStorage 키값으로 사용
export default getTodayString = () => {
  const today = new Date();
  const formatToday = format(today, 'yyyy-MM-dd');
  return formatToday;
};
