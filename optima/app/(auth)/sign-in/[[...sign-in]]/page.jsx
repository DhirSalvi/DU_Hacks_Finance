import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <SignIn afterSignInUrl="/Dashboard" />
    </main>
  );
}
