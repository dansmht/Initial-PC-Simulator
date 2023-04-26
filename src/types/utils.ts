import { ReactNode } from "react";

export type Fn = () => void;
export type Nullable<T> = T | null;
export type MaybeEmpty<T> = T | Record<string, never>;
export type MakeOptional<T, Key extends keyof T> = Omit<T, Key> & Partial<Pick<T, Key>>;

export type Color = `#${string}`;

export type HasChildren = { children: ReactNode };
