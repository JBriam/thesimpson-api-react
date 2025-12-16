import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </div>
    </>
  );
}
