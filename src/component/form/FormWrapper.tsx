import { ReactNode } from "react";

type FormWarpperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWarpperProps) {
  return (
    <>
      <h2 className="text-center m-0 mb-8 text-3xl font-bold">{title}</h2>
      <div className="grid gap-y-4 px-2 justify-start">{children}</div>
    </>
  );
}
