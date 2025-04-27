"use client";
import React from "react";
import useCartSidebar from "@/hooks/use-cart-sidebar";
import CartSidebar from "./cart-sidebar";
import { Toaster } from "sonner";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const isCartSidebarOpen = useCartSidebar();

  return (
    <>
      {/* If use CartSidebar is true, then we will render the CartSidebar component */}
      {isCartSidebarOpen ? (
        <div className="flex min-h-screen">
          <div className="flex-1 overflow-hidden">{children}</div>
          <CartSidebar />
        </div>
      ) : (
        // If use CartSidebar is false, then we will render the children
        <div>{children}</div>
      )}
      <Toaster />
    </>
  );
}
