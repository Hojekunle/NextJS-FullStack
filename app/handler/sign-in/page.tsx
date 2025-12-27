import Link from "next/link";
import { SignIn } from "@stackframe/stack";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-30 to-green-100">
        <div className="max-w-md w-full space-y-8">
            <SignIn />

            <Link href="/">
            ← Back to Home
            </Link>
        </div>
      
    </div>
  );
}