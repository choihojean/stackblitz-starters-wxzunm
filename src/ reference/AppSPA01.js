import React, { useState } from 'react';

export default function AppSPA01() {
  const current = 'sub2';

  return (
    <div>
      {current == 'main' && <Main />}
      {current == 'sub' && <Sub />}
      {current == 'sub2' && <Sub2 />}
    </div>
  );
}

const Main = () => <div>Main</div>;
const Sub = () => <div>Sub</div>;
const Sub2 = () => <div>Sub2</div>;
