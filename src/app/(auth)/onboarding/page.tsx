import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { OnboardingForm } from "./components/OnboardingForm"
export default function OnboardingPage() {
  return (
    <main 
      className="min-h-dvh"
      style={{
        backgroundColor: '#e1f0da',
        color: '#0e120e'
      }}
    >
      <section className="mx-auto w-full max-w-4xl px-4 py-10 md:py-14">
        <header className="mb-8">
          <div 
            className="mb-3 inline-flex items-center rounded-md px-3 py-1 text-xs font-medium"
            style={{
              backgroundColor: '#bfd8af',
              color: '#0e120e'
            }}
          >
            ProjectStack — College Project Management Platform
          </div>
          <h1 
            className="text-pretty text-3xl font-semibold leading-tight md:text-4xl"
            style={{ color: '#0e120e' }}
          >
            Share, discover, and collaborate on real-time student projects
          </h1>
          <p 
            className="mt-3 max-w-2xl text-sm leading-6 md:text-base"
            style={{ color: '#0e120e' }}
          >
            A collaborative platform for university students to showcase work, find contributors, and build a mini
            project portfolio.
          </p>
        </header>

        <Card 
          className="border"
          style={{
            backgroundColor: '#d4e7c5',
            borderColor: '#bfd8af'
          }}
        >
          <CardHeader>
            <CardTitle style={{ color: '#0e120e' }}>Create your profile</CardTitle>
            <CardDescription style={{ color: '#0e120e' }}>
              Tell us about yourself so we can match you to the right projects and collaborators.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <OnboardingForm />
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <p className="text-xs" style={{ color: '#0e120e' }}>
              By continuing, you agree to our terms of use.
              <span className="sr-only"> and privacy policy</span>
            </p>
            <Link 
              href="/" 
              className="text-sm underline underline-offset-4 hover:opacity-80"
              style={{ color: '#0e120e' }}
            >
              Skip for now
            </Link>
          </CardFooter>
        </Card>

        <footer className="mt-8 flex items-center justify-center">
          <div 
            className="rounded-md px-3 py-2 text-center text-xs"
            style={{
              backgroundColor: '#bfd8af',
              color: '#0e120e'
            }}
          >
            Built to streamline collaborative learning and innovation on campus.
          </div>
        </footer>
      </section>
    </main>
  )
}