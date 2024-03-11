import React from "react";
import { Card1 } from "./components/card1";
import { UserCard } from "./components/user-card";
import { useSelector } from "react-redux";

export const App = () => {
  const { todoList } = useSelector((state) => state.todoSlice);

  return (
    <>
      <div className="bg-emerald-500 h-[100vh]">
        <div className="container pt-[20px]">
          <Card1 />
          {todoList?.map((item) => (
            <UserCard
              key={item.id}
              name={item.name}
              surname={item.surname}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default App;
