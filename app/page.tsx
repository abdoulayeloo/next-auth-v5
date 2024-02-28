import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-black text-white drop-shadow-md">
          🔐 Authentification
        </h1>

        <p className="text-lg text-white">Service d{"'"}authentication</p>
        <div>
          <LoginButton>
            <Button
              className="text-lg font-bold tracking-wider"
              variant={"secondary"}
              size={"lg"}
            >
              Me connecter
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
