import Image from "next/image";

function Header() {
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4">
        <Image src="/logo.svg" alt="PlanoPro" width={32} height={32} />
        <h1 className="text-primary text-xl font-semibold">PlanoPro</h1>
      </div>
    </div>
  );
}

export default Header;
