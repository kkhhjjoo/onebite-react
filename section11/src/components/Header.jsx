import './Header.css';
import { memo } from 'react';

const Header = () => {
  return (
    <div className="Header">
      <h2>오늘은📆</h2>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};
export default memo(Header);
// export default Header;
