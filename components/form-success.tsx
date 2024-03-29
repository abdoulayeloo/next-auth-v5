import { FaCheckCircle } from "react-icons/fa";

type Props = {
  message: string;
};

export const FormSuccess = ({ message }: Props) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 rounded-md bg-green-500/15 p-3 text-sm text-green-500">
      <FaCheckCircle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
