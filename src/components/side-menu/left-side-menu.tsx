import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const SideMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="p-2">
          <Image
            src={'/top-nav-bar/burgerMenuIcon.svg'}
            alt="burger menu icon"
            width={24}
            height={24}
          />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={'left'}
        className="bg-inherit flex flex-col items-start"
      >
        <SheetHeader className="mt-[1em]">
          <SheetTitle>
            <div className="flex flex-col gap-[0.5em] items-start text-left text-xl font-bold text-[#13020f]">
              <Avatar className="w-[55px] h-[55px]">
                <AvatarImage
                  src="left-side-menu\profile-photo.png"
                  alt="Yannie"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              Yannie
            </div>
          </SheetTitle>
          <SheetDescription className="text-left text-xs text-[#666666]">
            <Link href={'/profile'}>View Profile</Link>
          </SheetDescription>
        </SheetHeader>
        <Separator className="h-[0.5px]" />
        <div className="flex flex-col gap-[0.5em] items-start text-left my-[0.5em] text-[#13020f] text-base font-medium">
          <Link href={'/friends'}>Friends</Link>
          <Link href={'/groups'}>Groups</Link>
          <Link href={'/saved-items'}>Saved Items</Link>
        </div>
        <Separator className="h-[0.5px]" />
        <div className="flex flex-col gap-[0.5em] items-start text-left my-[0.5em] text-[#13020f] text-base font-medium">
          <Link href={'/resource-center'}>Resource Center</Link>
          <Link href={'/job-board'}>Job Board</Link>
          <Link href={'/tda-course'}>TDA Course</Link>
        </div>
        <Separator className="h-[0.5px]" />
        <div className="flex flex-col gap-[0.5em] items-start text-left my-[0.5em] text-[#13020f] text-base font-medium">
          <Link href={'/my-activity'}>My Activity</Link>
          <Link href={'/settings'}>Settings</Link>
        </div>
        <div className="w-full mb-[1em] mt-auto text-left">
          <Separator className="h-[0.5px] mb-[0.5em]" />
          <Button
            type="submit"
            className="text-[#251a36] font-medium leading-normal tracking-tight p-0 bg-inherit w-fit"
            onClick={() => signOut({ callbackUrl: '/auth/sign-in' })}
          >
            Log Out
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
