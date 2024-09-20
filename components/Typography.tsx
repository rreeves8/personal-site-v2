import { cn } from "@/lib/utils";
import {
  createElement,
  CSSProperties,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from "react";

const variants = {
  H1: "text-2xl font-semibold leading-none tracking-tight",
  H2: "text-xl font-semibold leading-none tracking-tight",
  H3: "font-semibold leading-none tracking-tight",
  H4: "text-lg font-semibold leading-none tracking-tight",
  H5: "text-base font-semibold leading-none tracking-tight",
  H6: "text-sm font-semibold leading-none tracking-tight",
};

const getReact =
  (jsxTag: keyof typeof variants) =>
  ({ className, children }: PropsWithChildren<{ className?: string }>) =>
    createElement(jsxTag.toLocaleLowerCase(), {
      children,
      className: cn("scroll-m-20 tracking-tight", variants[jsxTag], className),
    });

export const Typography = Object.keys(variants).reduce((acc, curr) => {
  acc[curr as keyof typeof acc] = getReact(curr as keyof typeof variants);
  return acc;
}, {} as Record<keyof typeof variants, ReturnType<typeof getReact>>);
