"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

type ProviderProps = {
  children: React.ReactNode;
};

const client = new QueryClient();

export default function RQProvider({ children }: ProviderProps) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
  