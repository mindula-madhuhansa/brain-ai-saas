import { UserButton } from "@clerk/nextjs";

import MobileSidebar from "./MobileSidebar";
import { getApiLimitCount } from "@/lib/apiLimits";
import { checkSubscription } from "@/lib/subscription";

async function Navbar() {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="flex items-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount} isPro={isPro} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default Navbar;
