import { LucideIcon } from "lucide-react";

interface ChatCompletionRequestMessage {
  role: "user" | "assistant" | "system";
  content: string;
  name?: string;
}

interface EmptyProps {
  label: string;
}

interface HeadingProps {
  title: string;
  decription: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

interface FreeCounterProps {
  apiLimitCount: number;
  isPro: boolean;
}

interface UseProModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

interface SubscriptionButtonProps {
  isPro: boolean;
}
