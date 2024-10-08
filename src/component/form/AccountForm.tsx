import { FormWrapper } from "./FormWrapper";

type AccountData = {
  email: string;
  password: string;
};

type formDataProps = AccountData & {
  upDateField: (field: Partial<AccountData>) => void;
};

export function AccountForm({ email, password, upDateField }: formDataProps) {
  return (
    <FormWrapper title="Account Creation">
      <label htmlFor="">Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        className="rounded-md outline-none border border-gray-400 py-2 px-3"
        onChange={(e) => upDateField({ email: e.target.value })}
      />
      <label htmlFor="">Password</label>
      <input
        required
        type="password"
        value={password}
        className="rounded-md outline-none border border-gray-400 py-2 px-3"
        onChange={(e) => upDateField({ password: e.target.value })}
      />
    </FormWrapper>
  );
}
