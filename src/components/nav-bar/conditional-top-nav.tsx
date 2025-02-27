import Navbar from "./top-nav-bar";
import NavbarBeforeLogin from "./top-nav-bar-before-login";
import { useSession } from "next-auth/react";

export default function ConditionalTopNav() {
  const {data:user} =  useSession();

  return <>{user ? <Navbar /> : <NavbarBeforeLogin />}</>;
}
