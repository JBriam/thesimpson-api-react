import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header></Header>
      <main className="flex-1 bg-gray-200 pt-18">
        {children}
      </main>
      <Footer></Footer>
    </div>
  );
}
