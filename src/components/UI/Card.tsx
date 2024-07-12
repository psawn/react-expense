import { ReactNode } from "react";
import "./Card.css";

export function Card({ children, className }: { children: ReactNode; className: string }) {
  const classes = "card " + className;

  return <div className={classes}>{children}</div>;
}
