"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LoginModal } from "@/components/LoginModal";
import { Button } from "@/components/ui/button";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  // If user is logged in, you can redirect them or show different content
  if (session) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-foreground mb-4">Welcome back!</h1>
          <p className="text-xl text-foreground mb-8">Signed in as {session.user?.email}</p>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => router.push('/dashboard')}>
              Go to Dashboard
            </Button>
            <Button onClick={() => signOut()} variant="destructive">
              Sign out
            </Button>
          </div>
        </div>
      </main>
    );
  }

  // Show landing page for non-authenticated users
  return (
    <LandingPage 
      onGetStarted={() => {
        // Open login modal or redirect
        // You'll need to expose the LoginModal trigger
      }}
      onExploreProjects={() => {
        router.push('/projects');
      }}
    />
  );
}