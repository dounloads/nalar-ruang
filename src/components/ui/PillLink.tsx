import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type PillLinkProps = {
  to: string;
  children: ReactNode;
  light?: boolean;
  icon?: boolean;
  className?: string;
};

export function PillLink({ to, children, light = false, icon = false, className = "" }: PillLinkProps) {
  return (
    <Link
      to={to}
      className={`pill-link ${light ? "pill-link-light" : "pill-link-dark"} ${className}`}
    >
      <span>{children}</span>
      {icon ? (
        <span className="pill-icon" aria-hidden="true">
          <ArrowUpRight size={14} strokeWidth={1.8} />
        </span>
      ) : null}
    </Link>
  );
}