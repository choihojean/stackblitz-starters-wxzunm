import React, { useState, useEffect } from 'react';

export default function AppSPA04() {
  const [[page, param], setCurrent] = useState(['list', {}]);
  const [todos, setTodos] = useState([
    { id: 1, title: '춤추기' },
    { id: 2, title: '밥먹기' },
  ]);

  const goPage = (name, data = {}) => setCurrent([name, data]);

  return (
    <div>
      <div>
        <button onClick={() => setCurrent(['main', { id: 5 }])}>main</button>
        <button onClick={() => goPage('list')}>list</button>
        <button onClick={() => goPage('add')}>add</button>
      </div>
      {page == 'main' && <Main />}
      {page == 'list' && <ListPage todos={todos} goPage={goPage} />}
      {page == 'add' && (
        <AddPage todos={todos} setTodos={setTodos} goPage={goPage} />
      )}
      {page == 'read' && <ReadPage todos={todos} param={param} />}
    </div>
  );
}

const Main = () => (
  <div>
    <div>Main!!!</div>
  </div>
);
const ListPage = ({ todos, goPage }) => (
  <div>
    {todos.map((todo) => (
      <div>
        {todo.title}
        <button onClick={() => goPage('read', { id: todo.id })}>R</button>
      </div>
    ))}
  </div>
);

const AddPage = ({ todos, setTodos, goPage }) => {
  const [title, setTitle] = useState('');
  return (
    <div>
      <div>할일 추가</div>
      <input
        type="text"
        onChange={(evt) => setTitle(evt.target.value)}
        value={title}
      />
      <button
        onClick={() => {
          setTodos([...todos, { id: todos[todos.length - 1].id + 1, title }]);
          goPage('list');
        }}
      >
        Add
      </button>
    </div>
  );
};

const ReadPage = ({ todos, param }) => (
  <div>
    <div>할일 : id {param.id}</div>
    <div>제목 : {todos.filter((todo) => todo.id == param.id)[0].title}</div>
  </div>
);
