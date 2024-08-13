import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavigationLinks } from "@/data/NavigatonLink";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";

export default function LinkHeaderMobile() {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="h-8 w-8" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="flex h-full flex-col items-center justify-center gap-7">
            <VisuallyHidden>
              <SheetTitle>This is Navigation Link</SheetTitle>
              <SheetDescription>
                This is Navigation Description
              </SheetDescription>
            </VisuallyHidden>
            <ul className="mr-auto flex w-full flex-col gap-6">
              {NavigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-sm text-black transition hover:text-linkActive"
                  >
                    {link.linkName}
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <Button variant="outline" className="border-primary">
                Login
              </Button>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
