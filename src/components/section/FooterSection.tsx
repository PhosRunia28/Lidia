import { Facebook, Instagram, Twitter } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="container">
      <div className="mb-20 flex flex-col justify-center gap-14 md:mb-24 md:flex-row md:gap-20 lg:mb-28">
        {/* logo */}
        <div className="flex flex-col gap-4 text-center">
          <h4 className="text-xl font-bold text-black">Managed By</h4>
          <img
            src="./logoFooter.svg"
            alt="logo footer"
            className="mx-auto w-full max-w-48 bg-cover bg-center"
          />
        </div>
        {/* social Media */}
        <div className="flex flex-col gap-4 text-center">
          <h4 className="text-xl font-bold text-black">Social Media</h4>
          <div className="flex h-full items-center justify-center gap-8">
            <a href="#" className="group">
              <Twitter className="h-10 w-10 transition group-hover:text-primary" />
            </a>
            <a href="#" className="group">
              <Instagram className="h-10 w-10 transition group-hover:text-primary" />
            </a>
            <a href="#" className="group">
              <Facebook className="h-10 w-10 transition group-hover:text-primary" />
            </a>
          </div>
        </div>
        {/* Slogan */}
        <div className="flex flex-col gap-4 text-center">
          <h4 className="text-xl font-bold text-black">Slogan</h4>
          <div className="flex h-full items-center justify-center gap-6">
            <h5 className="text-xl font-bold text-black">#RentFavBooks</h5>
          </div>
        </div>
      </div>
    </footer>
  );
}
