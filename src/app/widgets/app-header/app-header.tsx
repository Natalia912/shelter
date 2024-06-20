import { Logo } from "@/components/ui/logo";
import { MainMenu } from "./main-menu";
import { MobileMenu } from "./mobile-menu";

const links = [
  {
    label: "Питомцы",
    href: "/pets",
  },
  {
    label: "О нас",
    href: "/about-us",
  },
  {
    label: "Сделать пожертвование",
    href: "donate",
    class:
      "bg-emerald-600 text-white hover:bg-emerald-600/75 hover:text-white px-4",
  },
];
export const AppHeader = () => {
  return (
    <div className="flex flex-row justify-between p-4 container">
      <Logo />
      <MainMenu links={links} className="hidden md:flex" />
      <div className="flex md:hidden">
        <MobileMenu>
          <MainMenu links={links} className="flex-col gap-2 items-start" />
        </MobileMenu>
      </div>
    </div>
  );
};
