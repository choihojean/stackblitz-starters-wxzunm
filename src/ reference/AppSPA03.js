import React, { useState, useEffect } from 'react';

export default function AppSPA03() {
  const [current, setCurrent] = useState(['page1', {}]);
  const goPage = (name, data = {}) => setCurrent([name, data]);

  return (
    <div>
      <div>
        <button onClick={() => setCurrent(['page1', { id: 5 }])}>page1</button>
        <button onClick={() => goPage('page2')}>page2</button>
        <button onClick={() => goPage('page3', { id: 10 })}>page3</button>
      </div>
      {current[0] == 'page1' && <Page1 data={current[1]} />}
      {current[0] == 'page2' && <Page2 data={current[1]} />}
      {current[0] == 'page3' && <Page3 data={current[1]} />}
    </div>
  );
}

const Page1 = ({ data }) => <div>Page1 : {JSON.stringify(data)}</div>;
const Page2 = ({ data }) => <div>Page2 : {JSON.stringify(data)}</div>;
const Page3 = ({ data }) => <div>Page3 : {JSON.stringify(data)}</div>;
