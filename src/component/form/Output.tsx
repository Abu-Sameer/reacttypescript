type Props = {
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

export default function Output({
  firstName,
  lastName,
  age,
  street,
  state,
  city,
  zip,
  email,
  password,
}: Props) {
  return (
    <div>
      <p>
        First Name: <span className="font-bold">{firstName}</span>
      </p>
      <p>
        Last Name: <span className="font-bold">{lastName}</span>
      </p>
      <p>
        Age: <span className="font-bold">{age}</span>
      </p>
      <p>
        State: <span className="font-bold">{state}</span>
      </p>
      <p>
        City: <span className="font-bold">{city}</span>
      </p>
      <p>
        Street: <span className="font-bold">{street}</span>
      </p>
      <p>
        Zip: <span className="font-bold">{zip}</span>
      </p>
      <p>
        Email: <span className="font-bold">{email}</span>
      </p>
      <p>
        Password: <span className="font-bold">{password}</span>
      </p>
    </div>
  );
}
