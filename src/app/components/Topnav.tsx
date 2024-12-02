import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export const Topnav = () => {
  return (
    <div className="border-b h-[100px] w-full flex items-center justify-between px-8 fixed bg-white">
      <div className="flex gap-4 items-center cursor-pointer">
        <Avatar className="w-[50px] h-[50px]">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-2xl font-semibold">Samuel Bandeira</p>
      </div>
      <div className="flex gap-[50px] mr-10">
        <Link className="text-2xl" href="/">
          Home
        </Link>
        <Link className="text-2xl" href="/about">
          About
        </Link>
        <Link className="text-2xl" href="/projects">
          Projects
        </Link>
      </div>
    </div>
  );
};
