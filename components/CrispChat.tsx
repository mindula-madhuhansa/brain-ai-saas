"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("29f567e6-445c-4dde-a92f-7d79ad87dff5");
  }, []);

  return null;
};
