import React, { useState, useRef, useCallback } from "react";
// import SassComponent from "./Component/SassComponent";
// import CSSModule from "./Component/CSSModule";

import TodoTemplate from "./TodoList/TodoTemplate";
import TodoInsert from "./TodoList/TodoInsert";
import TodoList from "./TodoList/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트의 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링 해보기",
      checked: true,
    },
    {
      id: 3,
      text: "일정 관리 앱 만들어보기",
      checked: false,
    },
  ]);

  // ID값은 렌더링되는 정보가 아님, 값이 바뀐다고 해서 컴포넌트가 리렌더링 될 필요 없음
  const nextID = useRef(4);
  // useCallback으로 감싸는 이유: 컴포넌트의 성능을 아끼기 위함.
  // props로 전달해야 할 함수를 만들 때는 useCallback을 사용해 감싸도록 하자.
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextID.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextID.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
