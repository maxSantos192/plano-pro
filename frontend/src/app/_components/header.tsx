import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="PlanoPro" width={32} height={32} />
          <h1 className="text-primary text-xl font-semibold">PlanoPro</h1>
        </div>

        <div className="space-x-4">
          <Link href="/" className="group relative">
            <span className="after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:content-[''] group-hover:after:w-full">
              Digitalizar
            </span>
          </Link>
          <Link href="/planos" className="group relative">
            <span className="after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 after:content-[''] group-hover:after:w-full">
              Meus Planos
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
