import Home from "@/components/home-page/page";
import { getServerSession } from "next-auth";
import { authOption } from "./api/auth/[...nextauth]/route";
import SignIn from "./sign-in/page";

export default async function Main() {
  const session = await getServerSession(authOption);
  return (
    <div className="w-full flex justify-center">
      {session ? <Home /> : <SignIn />}
    </div>
  );
}
