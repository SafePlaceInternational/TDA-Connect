import ViewPost from "@/components/view-post/view-post";
import TryQuickExit from "../try-quick-exit/page";
import AddPost from "@/components/add-post/add-post";
import ViewGroup from "../view-group/view-group";
import SensitiveTopic from "../view-sensitive-topics/page";
import WelcomeDialog from "../welcome/welcome-dialog";
import Onboarding from "../welcome/user-onboarding";
import WelcomeUser from "../welcome/welcome-user";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import TermsAndConditions from "../terms-and-conditions/terms-and-conditions";

export default async function Home() {
  const session = await getServerSession(authOption);
  let userEmail = session?.user?.email;
  let userDetail = null;
  if (userEmail) {
    try {
      userDetail = await prisma.user.findUnique({
        where: { email: userEmail },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full mt-4">
      {userDetail?.hasAgreedTerms ? (
        <div>
          <AddPost />
          <TryQuickExit />
          <ViewPost />
          <ViewGroup />
          <SensitiveTopic />
          <WelcomeDialog />
          <Onboarding />
          <WelcomeUser />
        </div>
      ) : (
        <TermsAndConditions />
      )}
    </div>
  );
}
