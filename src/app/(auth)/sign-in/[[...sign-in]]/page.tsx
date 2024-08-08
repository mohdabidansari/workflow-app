import { SignedOut, SignIn, SignInButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignedOut>
      <SignInButton />
    </SignedOut>
  );
}
