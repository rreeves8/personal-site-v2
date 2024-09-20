"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { Separator } from "@/components/ui/separator";
import NextLink from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

export const routes = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

export const DesktopNav = () => {
  const pathname = usePathname();

  const isActive = useMemo(
    () => (path: string) => {
      return pathname === path;
    },
    [pathname]
  );

  return (
    <div className="hidden items-center space-x-4 md:flex">
      <nav className="flex space-x-6 font-medium">
        {routes.map((route) => (
          <NextLink
            key={route.path}
            href={route.path}
            className={`${isActive(route.path) && "text-primary"}`}
          >
            {route.label}
          </NextLink>
        ))}
      </nav>
      <Separator orientation="vertical" className="h-8" />
      <div className="flex items-center space-x-1">
        <Button>filler</Button>
        <NextLink
          href="https://github.com/BadEnd777/Portfolio-Website"
          target="_blank"
          aria-label="GitHub repository"
        >
          <Button variant="ghost" size="icon" aria-label="GitHub repository">
            <span className="icon-[tabler--brand-github] size-5" />
          </Button>
        </NextLink>
      </div>
    </div>
  );
};

export const MobileNav = () => (
  <div className="flex items-center md:hidden space-x-1">
    <Button>Filler</Button>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <span className="icon-[tabler--align-right] size-5" />
          <span className="sr-only">Dropdown Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[150px]">
        {routes.map((route) => (
          <NextLink key={route.path} href={route.path}>
            <DropdownMenuItem>{route.label}</DropdownMenuItem>
          </NextLink>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <NextLink
            href="https://github.com/BadEnd777/Portfolio-Website"
            target="_blank"
            aria-label="GitHub repository"
          >
            View on GitHub
          </NextLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);
