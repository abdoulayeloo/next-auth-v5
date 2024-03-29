import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const SettingsPage = async ({}: Props) => {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button variant={"outline"} type="submit">
          Déconnexion
        </Button>
      </form>
    </div>
  );
};

export default SettingsPage;
