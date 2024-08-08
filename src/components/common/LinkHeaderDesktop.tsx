import { NavigationLinks } from "@/data/NavigatonLink";

export default function LinkHeaderDesktop() {
  return (
    <ul className="mr-auto hidden w-full gap-10 sm:flex">
      {NavigationLinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.path}
            className="text-sm text-linkUnactive transition hover:text-linkActive"
          >
            {link.linkName}
          </a>
        </li>
      ))}
    </ul>
  );
}
