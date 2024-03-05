import {
  Code,
  Image,
  MessageSquare,
  Music,
  Video,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import * as z from "zod";

// Routes
export const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image generation",
    icon: Image,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video generation",
    icon: Video,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

// Dashboard Tools
export const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Image generation",
    icon: Image,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "Video generation",
    icon: Video,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    label: "Music generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music",
  },
  {
    label: "Code generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
];

// Image Generation
export const amountOptions = [
  {
    value: "1",
    label: "1 Photo",
  },
  {
    value: "2",
    label: "2 Photos",
  },
  {
    value: "3",
    label: "3 Photos",
  },
  {
    value: "4",
    label: "4 Photos",
  },
  {
    value: "5",
    label: "5 Photos",
  },
];

export const resolutionOptions = [
  {
    value: "256x256",
    label: "256x256",
  },
  {
    value: "512x512",
    label: "512x512",
  },
  {
    value: "1024x1024",
    label: "1024x1024",
  },
];

// Max Free Counts
export const MAX_FREE_COUNTS = 5;
