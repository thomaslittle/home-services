import React, { ReactNode } from "react";

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="py-6">
      <div className="container mx-auto h-lvh max-w-screen-lg px-4">{children}</div>
    </main>
  );
};

export default Container;
