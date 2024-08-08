import LinkHeaderDesktop from "@/components/common/LinkHeaderDesktop";
import LinkHeaderMobile from "@/components/common/LinkHeaderMobile";
import { Button } from "@/components/ui/button";
export default function Header() {
  return (
    <header className="container relative z-20 pb-8 pt-10 sm:py-14">
      <nav className="flex items-center justify-between gap-10">
        {/* logo header */}
        <div className="flex w-full max-w-fit items-center gap-3 md:max-w-32">
          <img src="./logo.svg" alt="logo" className="bg-cover bg-center" />
          <h4 className="text-lg font-bold">Lidia</h4>
        </div>
        <LinkHeaderDesktop />
        {/* login btn */}
        <div className="hidden sm:block">
          <Button variant="outline">Login</Button>
        </div>
        <LinkHeaderMobile />
      </nav>
    </header>
  );
}
