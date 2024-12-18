import { Suspense } from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-12 items-start">
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
      </div>
  );
}
