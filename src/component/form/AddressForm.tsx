import { FormWrapper } from "./FormWrapper";
type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type formDataProps = AddressData & {
  upDateField: (fiels: Partial<AddressData>) => void;
};

export function AddressForm({
  street,
  city,
  state,
  zip,
  upDateField,
}: formDataProps) {
  return (
    <FormWrapper title="Address">
      <label htmlFor="">Street</label>
      <input
        autoFocus
        required
        type="text"
        value={street}
        className="rounded-md outline-none border border-gray-400 py-2 px-3"
        onChange={(e) => upDateField({ street: e.target.value })}
      />
      <label htmlFor="">City</label>
      <input
        required
        type="text"
        value={city}
        className="rounded-md outline-none border border-gray-400 py-2 px-3"
        onChange={(e) => upDateField({ city: e.target.value })}
      />
      <label htmlFor="">State</label>
      <input
        required
        type="text"
        value={state}
        className="rounded-md outline-none border border-gray-400 py-2 px-3"
        onChange={(e) => upDateField({ state: e.target.value })}
      />
      <label htmlFor="">Zip</label>
      <input
        required
        type="text"
        value={zip}
        className="rounded-md outline-none border border-gray-400 py-2 px-3"
        onChange={(e) => upDateField({ zip: e.target.value })}
      />
    </FormWrapper>
  );
}
