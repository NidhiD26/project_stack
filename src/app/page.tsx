import LoginButton from "@/components/loginButton";

export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '5rem' }}>
      <h1>Project Stack</h1>
      <p>Use the button below to test the sign-in flow.</p>
      <div style={{ marginTop: '2rem' }}>
        <LoginButton />
      </div>
    </main>
  );
}