import { PropsWithChildren } from "react";

export const SectionHeader = ({ children }: PropsWithChildren) => {
  return (
      <h2 className="pt-40 pb-10 font-sans-serif text-3xl font-medium text-brown-50 drop-shadow text-center">{children}</h2>
  );
};
