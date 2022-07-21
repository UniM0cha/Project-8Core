// 오늘 날짜를 파싱해서 String 형식으로 반환하는 함수
// 'Thu Jul 21 2022 00:00:00 GMT+0900 (KST)' => '1658329200000'
export default getTodayString = () => {
  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);
  const todayString = Date.parse(today).toString();
  return todayString;
};
