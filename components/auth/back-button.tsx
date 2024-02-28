import Link from "next/link";
import React from "react";
import { Button } from "@/ui/button";

type Props = {
  href: string;
  label: string;
};

const BackButton = ({ href, label }: Props) => {
  return (
    <Button variant={"link"} size={"sm"} asChild className="w-full font-normal">
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
