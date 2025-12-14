import "./List.css";

const List = () => {
  return (
    <div className="List">
      <input type="text" placeholder="검색어를 입력하세요" />
      <ul>
        <li>
          React 공부하기
          <div>
            <span>2025.12.11</span>
            <button>삭제</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default List;
