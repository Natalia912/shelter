import { cn } from "@/lib/utils";
import Link from "next/link";
export const MainMenu = ({
  links,
  className,
}: {
  links: { href: string; label: string; class?: string }[];
  className?: string;
}) => (
  <ul className={cn("flex gap-6", className)}>
    {links.map((link) => (
      <li
        className={cn(
          "text-slate-950 py-2 hover:text-slate-950/50 transition ease-in-out rounded-lg",
          link.class,
        )}
      >
        <Link href={link.href} key={link.href}>
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
);
