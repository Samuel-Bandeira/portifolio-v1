import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex flex-col items-center">
        <p className="text-8xl mb-10">Hey, I'm Samuel Bandeira</p>
        <p className="text-3xl w-[900px] text-center">
          A Result-Oriented Web Developer building and managing Websites and Web
          Applications that leads to the success of the overall product
        </p>
        <Button className="mt-[100px] w-[280px] h-[60px] text-2xl">
          Projects
        </Button>
      </div>
    </div>
  );
}
