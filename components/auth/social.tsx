"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaApple } from "react-icons/fa";
import { Button } from "../ui/button";

type Props = {};

const ShowSocial = ({}: Props) => {
  return (
    <div className="flex w-full items-center justify-evenly gap-x-2">
      <Button
        className="w-full"
        variant={"outline"}
        size={"lg"}
        onClick={() => {}}
      >
        <FcGoogle className="h-6 w-6" />
      </Button>
      <Button
        className="w-full"
        variant={"outline"}
        size={"lg"}
        onClick={() => {}}
      >
        <FaGithub className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ShowSocial;
