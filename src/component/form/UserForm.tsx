import { FormWrapper } from "./FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type formDataProps = UserData & {
  upDateField: (field: Partial<UserData>) => void;
};

export function UserForm({
  firstName,
  lastName,
  age,
  upDateField,
}: formDataProps) {
  return (
    <FormWrapper title="User Details">
      <label htmlFor="">First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        className="rounded-md outline-none border border-gray-400 py-2 px-3"
        onChange={(e) => upDateField({ firstName: e.target.value })}
      />
      <label htmlFor="">Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        className="rounded-md outline-none border border-gray-400 py-2 px-3"
        onChange={(e) => upDateField({ lastName: e.target.value })}
      />
      <label htmlFor="">Age</label>
      <input
        required
        min={1}
        type="number"
        value={age}
        className="rounded-md outline-none border border-gray-400 py-2 px-3"
        onChange={(e) => upDateField({ age: e.target.value })}
      />
    </FormWrapper>
  );
}
