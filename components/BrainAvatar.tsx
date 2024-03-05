import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function BrainAvatar() {
  return (
    <Avatar className="h-10 w-12">
      <AvatarImage className="p-1" src="/logo.png" />
    </Avatar>
  );
}

export default BrainAvatar;
