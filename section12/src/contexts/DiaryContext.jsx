import { createContext } from 'react';

//일기 데이터르 공급할 Context
export const DiaryStateContext = createContext([]);
export const DiaryDispatchContext = createContext({
    onCreate: () => {},
    onUpdate: () => {},
    onDelete: () => {}
});