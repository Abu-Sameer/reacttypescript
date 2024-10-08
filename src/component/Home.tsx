import { FormEvent, useState } from "react";
import { useMultistepForm } from "../useMultistepForm";
import { AccountForm } from "./form/AccountForm";
import { AddressForm } from "./form/AddressForm";
import { UserForm } from "./form/UserForm";
import Output from "./form/Output";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  state: string;
  city: string;
  zip: string;
  email: string;
  password: string;
};

const INITAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  state: "",
  city: "",
  zip: "",
  email: "",
  password: "",
};

export default function Home() {
  const [data, setData] = useState(INITAL_DATA);
  function upDateFields(field: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...field };
    });
  }
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    back,
    next,
    isLastStep,
    isLastPage,
  } = useMultistepForm([
    <UserForm {...data} upDateField={upDateFields} />,
    <AddressForm {...data} upDateField={upDateFields} />,
    <AccountForm {...data} upDateField={upDateFields} />,
    <Output {...data} />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (isLastPage) {
      alert("Account creation successful");
    }
    if (!isLastStep) {
      return next();
    }
  }

  return (
    <div className="relative bg-white border-2 border-black rounded-md p-8 m-4 max-w-max">
      <form onSubmit={onSubmit} className="">
        <div className="absolute top-2 right-2">
          <span className="font-bold">{currentStepIndex + 1}</span>/{" "}
          {steps.length}
        </div>
        {step}
        <div className="mt-4 flex gap-2 justify-end">
          {!isFirstStep && (
            <button
              type="button"
              onClick={back}
              className="py-2 px-4 border-gray-400 border rounded hover:bg-black/10 transition-all duration-200 active:scale-90"
            >
              Back
            </button>
          )}
          {!isLastStep && (
            <button
              type="submit"
              className="py-2 px-4 border-gray-400 border rounded hover:bg-black/10 transition-all duration-200 active:scale-90"
            >
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
