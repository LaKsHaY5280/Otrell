import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className=" md:max-w-screen-2xl mx-auto w-full flex justify-between items-center">
        <Logo />
        <div className=" space-x-4 md:block md:w-auto w-full flex justify-between items-center">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Get Otrell for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
