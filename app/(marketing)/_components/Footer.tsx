import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className=" fixed bottom-0 w-full p-4 border-t bg-slate-100">
      <div className=" md:max-w-screen-2xl mx-auto w-full flex justify-between items-center">
        <Logo />
        <div className=" space-x-4 md:block md:w-auto w-full flex justify-between items-center">
          <Button size="sm" variant="ghost">
            privacy policy{" "}
          </Button>
          <Button size="sm" variant="ghost">
            Terms of service{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
