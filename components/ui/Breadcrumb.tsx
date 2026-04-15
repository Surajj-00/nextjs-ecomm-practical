import { ChevronRight } from "lucide-react";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center text-md text-gray-500 mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">

          {item.href ? (
            <Link href={item.href} className="hover:text-black">
              {item.label}
            </Link>
          ) : (
            <span className="text-black font-medium">{item.label}</span>
          )}

          {index < items.length - 1 && (
            <span className="mx-2 text-gray-400">
              <ChevronRight className="w-4 h-4" />
            </span>
          )}

        </div>
      ))}
    </nav>
  );
}
