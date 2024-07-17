import Link from "next/link";

import { getNumberSuffix } from "@/utils/stringUtils";

export default function Header({}) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center mb-6 md:mb-0">
      <TopRightCorner />

      <Link href="/">
        <h1 className="text-2xl md:text-3xl font-bold my-6 md:my-8 max-w-[10rem] md:max-w-[12rem]">
          HOW WE GOT HERE
        </h1>
      </Link>

      <div>
        <nav className="flex items-center gap-2 mb-1">
          <NavItem href="/">Home</NavItem>
          <Divider />
          <NavItem href="/about">About</NavItem>
        </nav>
        <p className="text-sm">
          <span className="text-foreLight">
            The Interactive Timeline of Human History
          </span>
        </p>
      </div>
    </div>
  );
}

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className="font-semibold clickable">
      {children}
    </a>
  );
}

function Divider() {
  return <span className="text-fore opacity-30">/</span>;
}

function TopRightCorner() {
  const currentYear = new Date().getFullYear();

  const century = Math.ceil(currentYear / 100);
  const suffix = getNumberSuffix(century);
  const percentage = currentYear.toString().slice(-2);

  return (
    <div className="absolute top-0 right-0 py-2 px-4 bg-yellow-100 rounded-bl-md text-yellow-700 border-yellow-200 border-l border-b">
      <p className="text-right text-xs">
        {century}
        {suffix} century is being generated ({percentage}%)
      </p>
    </div>
  );
}
