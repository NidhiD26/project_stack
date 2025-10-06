
"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { signIn } from 'next-auth/react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import StackHero from "@/components/StackHero";

export function LoginModal() {
  const modalRef = useRef(null);
  const formRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    tl.fromTo(
      modalRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5 }
    )
      .fromTo(
        formRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 },
        '-=0.3'
      )
      .fromTo(
        imageRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 },
        '-=0.3'
      );
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent ref={modalRef} className="min-w-[800px] min-h-[600px] p-0 flex items-center justify-center rounded-xl border border-border bg-[#F8EAD8]">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
          <div ref={formRef} className="p-8 flex flex-col justify-center">
            <DialogHeader className="text-center">
              <DialogTitle className="text-2xl font-bold text-[#A7727D]">Welcome back</DialogTitle>
              <p className="text-sm text-[#A7727D]">Enter your credentials to continue</p>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <Button
                onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
                className="w-full flex items-center justify-center gap-2 rounded-md border border-[#A7727D] bg-[#A7727D] px-3 py-2 text-sm transition-colors hover:border-[#A7727D] text-[#F9F5E7]"
              >
                <FaGithub className="mr-2" />
                Sign in with GitHub
              </Button>
              <Button
                onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                className="w-full flex items-center justify-center gap-2 rounded-md border border-[#EDDBC7] bg-[#EDDBC7] px-3 py-2 text-sm transition-colors hover:border-[#EDDBC7] text-[#A7727D]"
              >
                <FaGoogle className="mr-2" />
                Sign in with Google
              </Button>
            </div>
          </div>
          <div ref={imageRef} className="hidden md:block relative rounded-r-xl overflow-hidden">
            <StackHero />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
