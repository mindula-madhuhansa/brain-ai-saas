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

interface APILimitCountProps {
  apiLimitCount: number;
}

interface UseProModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
