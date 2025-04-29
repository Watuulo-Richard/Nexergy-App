import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CloseButton({
  href,
  parent = "analytics",
}: {
  href: string;
  parent?: string;
}) {
  return (
    <Button className="w-full" type="button" variant="outline" asChild>
      <Link
        href={
          parent === "" ? `/dashboard${href}` : `/dashboard/${parent}${href}`
        }
      >
        Close
      </Link>
    </Button>
  );
}
