import { useState } from 'react';

const ConditionalRendering = () => {

  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLoginToggle = () => {
    setLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>歡迎登入！</p>
      ) : (
        <p>請按下登入按鈕來觀看內容</p>
      )}
      <button onClick={handleLoginToggle}>
        {isLoggedIn ? '登出' : '登入'}
      </button>
    </div>
  );
}

export default ConditionalRendering;