
"use client";
import { useSession, signOut } from "next-auth/react";
import { LoginModal } from "@/components/(auth)/LoginModal";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">Project Stack</h1>
        <p className="text-xl text-foreground mb-8">Your gateway to collaborative projects.</p>
        {
          session ? (
            <div className="flex flex-col items-center space-y-4">
              <p className="text-lg text-foreground">Signed in as {session.user?.email}</p>
              <Button onClick={() => signOut()} variant="destructive">
                Sign out
              </Button>
            </div>
          ) : (
            <LoginModal />
          )
        }
      </div>
    </main>
  );
}
