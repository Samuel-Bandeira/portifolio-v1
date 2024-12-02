import { Project } from "../components/Project";

export default function Projects() {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="flex flex-col items-center mt-10 mb-12">
        <p className="text-7xl font-semibold mb-10">Projects</p>
        <p className="text-2xl w-[750px] text-center">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
      </div>
      <div className="flex flex-col gap-y-[200px] mt-[50px]">
        {[1, 2, 3].map(() => (
          <Project />
        ))}
      </div>
    </div>
  );
}
