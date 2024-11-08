import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="Finance AI Logo" width={173} height={39} />
        <NavMenu />
      </div>
      <UserButton showName />
    </header>
  );
};

export default Header;
