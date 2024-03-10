import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/reducer/todo-reducer";

export const Card1 = () => {
  const dispatch = useDispatch();
  const { register, reset, handleSubmit } = useForm();
  const submit = (data) => {
    dispatch(addTodo({ ...data, id: nanoid() }));
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submit)}
        className=" fixed  right-[35%] w-[500px] flex flex-col items-center gap-[50px] p-[30px] rounded-[30px] bg-slate-500 mx-auto"
      >
        <input
          {...register("name")}
          type="text"
          name="name"
          placeholder="Given Name"
          id={nanoid()}
          className="outline-none w-[300px] border-[2px] border-solid border-l-purple-800 p-[20px]"
        />
        <input
          {...register("surname")}
          type="text"
          name="surname"
          placeholder="Last Name"
          id={nanoid()}
          className="outline-none w-[300px] border-[2px] border-solid border-l-purple-800 p-[20px]"
        />
        <button
          type="submit"
          className=" py-[20px] px-[130px] bg-blue-500 font-semibold text-lg text-slate-700 "
        >
          send
        </button>
      </form>
    </>
  );
};
