import React, { useState, useEffect } from 'react';

export default function AppSPA02() {
  const [current, setCurrent] = useState('page1');

  return (
    <div>
      <div>
        <button onClick={() => setCurrent('page1')}>page1</button>
        <button onClick={() => setCurrent('page2')}>page2</button>
        <button onClick={() => setCurrent('page3')}>page3</button>
      </div>
      {current == 'page1' && <Page1 />}
      {current == 'page2' && <Page2 />}
      {current == 'page3' && <Page3 />}
    </div>
  );
}
const Page1 = () => <div>Page1</div>;
const Page2 = () => <div>Page2</div>;
const Page3 = () => <div>Page3</div>;
