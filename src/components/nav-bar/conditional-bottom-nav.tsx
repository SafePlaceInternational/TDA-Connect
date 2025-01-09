import BottomNavBar from "./bottom-nav-bar";
import { useSession } from "next-auth/react";

export default function ConditionalBottomNav() {
  const { data: user } = useSession();
  console.log(user);

  return <>{user && <BottomNavBar /> }</>;
}
