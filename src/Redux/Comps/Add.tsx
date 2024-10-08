import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addPerson } from "../Store/futures/PersonSlice";

export default function Add() {
  const [name, setNames] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    dispatch(addPerson({ name }));
    setNames("");
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="" className="block mb-4">
        Person Name
      </label>
      <input
        type="text"
        ref={inputRef}
        value={name}
        placeholder="Enter person name"
        className="border rounded-md p-2 mr-2 outline-none"
        onChange={(e) => setNames(e.target.value)}
      />
      <button
        type="submit"
        className="bg-violet-500 text-white rounded-md px-8 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
      >
        Add
      </button>
    </form>
  );
}
