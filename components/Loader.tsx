import Image from "next/image";
import React from "react";

function Loader() {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="relative animate-pulse">
        <Image src="/logo.png" alt="logo" width={80} height={80} />
      </div>
      <p className="text-sm text-muted-foreground">Brain is thinking...</p>
    </div>
  );
}

export default Loader;
