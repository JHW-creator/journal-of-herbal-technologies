import { IllustNotFound } from "@/components/illustrations/EmptyStates";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center sm:py-20">
      <IllustNotFound />
      <h1 className="mt-6 font-display text-3xl font-semibold">Page not found</h1>
      <div className="mt-8">
        <Button asChild variant="soft">
          <Link href="/">Home</Link>
        </Button>
      </div>
    </div>
  );
}
