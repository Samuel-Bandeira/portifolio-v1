import { Button } from "@/components/ui/button";
import { BsGithub, BsTwitterX, BsYoutube } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

export const SocialMedia = () => {
  return (
    <div className="fixed flex flex-col gap-2 top-[40%] border p-1 items-center">
      <Button
        className="w-[50px] h-[50px] p-1 hover:bg-gray-200"
        variant="ghost"
      >
        <LiaLinkedin style={{ width: "40px", height: "40px" }} />
      </Button>
      <Button
        className="w-[50px] h-[50px] p-1 hover:bg-gray-200"
        variant="ghost"
      >
        <BsTwitterX style={{ width: "30px", height: "30px" }} />
      </Button>
      <Button
        className="w-[50px] h-[50px] p-1 hover:bg-gray-200"
        variant="ghost"
      >
        <BsYoutube style={{ width: "35px", height: "35px" }} />
      </Button>
      <Button
        className="w-[50px] h-[50px] p-1 hover:bg-gray-200"
        variant="ghost"
      >
        <BsGithub style={{ width: "35px", height: "35px" }} />
      </Button>
    </div>
  );
};
