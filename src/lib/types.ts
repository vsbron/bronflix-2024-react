import { ReactNode } from "react";

// Union for the headers
type Headings = "h1" | "h2";

// Components
export type HeadingProps = { children: string; as?: Headings };
export type LinkItemProps = { icon: ReactNode; title: string };
export type WrapperProps = { children: ReactNode };
