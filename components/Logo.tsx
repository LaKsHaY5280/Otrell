import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className=" hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src={logo} alt="Logo" height={30} width={30} />
        <p className=" text-lg text-neutral-700 pb-1">Otrell</p>
      </div>
    </Link>
  );
};

export default Logo;
