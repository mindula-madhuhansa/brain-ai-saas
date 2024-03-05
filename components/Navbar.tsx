import { UserButton } from "@clerk/nextjs";

import MobileSidebar from "./MobileSidebar";
import { getApiLimitCount } from "@/lib/apiLimits";

async function Navbar() {
  const apiLimitCount = await getApiLimitCount();

  return (
    <div className="flex items-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default Navbar;
