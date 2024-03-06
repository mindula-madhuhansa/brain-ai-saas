"use client";

import { Zap } from "lucide-react";
import axios from "axios";
import { useState } from "react";

import { SubscriptionButtonProps } from "@/typings";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

function SubscriptionButton({ isPro = false }: SubscriptionButtonProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onclick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");
      window.location.href = response.data.url;
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      disabled={loading}
      variant={isPro ? "default" : "premium"}
      onClick={onclick}
    >
      {isPro ? "Manage Subscription" : "Upgrade"}
      {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
}

export default SubscriptionButton;
