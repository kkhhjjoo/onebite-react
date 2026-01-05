import { useState, useContext } from 'react';

import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';
import { DiaryStateContext } from '../contexts/DiaryContext';
// import { data } from "react-router-dom";

// PivotDate state 값을 기준으로 2월이면 2월 데이터만 출력, 3월이면 3월 데이터만 출력
// pivotDate state에 저장된 날짜와 일기  data를 기반으로 이번 달에 해당하는 데이터만 추출 후 반환
const getMonthlyData = (pivotDate, data) => {
  // 이번 달의 시작 시간
  const beginTime = new Date(
    pivotDate.getFullYear(), // pivot의 연도
    pivotDate.getMonth(), // pivot의 월
    1, // 해당 하는 월의 1일의 0시 0분 0초
    0,
    0,
    0
  ).getTime(); // getTime()을 불러와 타임스탬프 : 숫자값 형식으로 저장

  // 이번 달의 마지막 시간
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1, // 해당 달 +1
    0, // 0일이라는 것은 없으므로 0으로 설정하면 그 달의 바로 전 달의 마지막 날이 됨,
    23,
    59,
    59
  ).getTime();
  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date()); // 날짜를 보관하는 state

  const monthlyData = getMonthlyData(pivotDate, data);
  console.log(monthlyData);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={'<'} />}
        rightChild={<Button onClick={onIncreaseMonth} text={'>'} />}
      />
      <DiaryList data={ monthlyData} />
    </div>
  );
};

export default Home;
