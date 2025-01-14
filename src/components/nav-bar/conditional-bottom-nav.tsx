import BottomNavBar from "./bottom-nav-bar";
import { useSession } from "next-auth/react";

export default function ConditionalBottomNav() {
  const { data: user } = useSession();

  return <>{user && <BottomNavBar /> }</>;
}
