import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/reducer/todo-reducer";

export const UserCard = ({ name, surname, id }) => {
  const dispatch = useDispatch();
  const delTodo = () => dispatch(deleteTodo({ id }));

  return (
    <>
      <div className="border-solid mb-1 border-black bg-slate-600 w-[300px] text-center p-[20px] border-[2px]">
        <h1 className="font-medium text-violet-400 mb-2 text-xl">{name}</h1>
        <h2 className="font-medium text-violet-400 mb-2 text-xl">{surname}</h2>
        <button
          className=" py-[20px] px-[100px] bg-blue-500 font-semibold text-lg text-slate-700 "
          onClick={delTodo}
        >
          delete
        </button>
      </div>
    </>
  );
};
