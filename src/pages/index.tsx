import { SignInButton, useUser } from "@clerk/nextjs";
import { LandingPage } from "./components/landingpage";
// import Link from "next/link";
// import { api } from "~/utils/api";

export default function Home() {
  const { isSignedIn } = useUser();
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      {!isSignedIn && (
        <LandingPage>
          <SignInButton />
        </LandingPage>
      )}
      {isSignedIn && (
        <div className="text-center">Welcome to Rhystic Buddy</div>
      )}
    </>
  );
}
