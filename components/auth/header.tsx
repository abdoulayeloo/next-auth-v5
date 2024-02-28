import React from "react";

type Props = {
  label: string;
};

const Header = ({ label }: Props) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-4">
      <h1 className="text-2xl font-black text-gray-800 drop-shadow-md">
        🔐 Authentification
      </h1>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default Header;
