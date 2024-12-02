export const Project = () => {
  return (
    <div className="flex items-center gap-10 px-[100px]">
      <img
        width={700}
        height={700}
        src="https://www.rammaheshwari.com/assets/jpeg/dopefolio.jpeg"
        alt="project"
      />
      <div className="flex flex-col">
        <p className="text-3xl font-bold mb-5">Portifolio</p>
        <p className="text-xl w-[600px]">
          Dopefolio is a successful Open-Source project that I created which
          have been featured on some of the biggest tech sites like CSS-Tricks,
          Hostinger, etc & used by thousands of developers globally
        </p>
      </div>
    </div>
  );
};
