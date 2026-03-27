"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const maxWidthClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
};

export function Modal({
  title,
  children,
  isOpen,
  onClose,
  maxWidth = "md",
}: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[110] flex items-center justify-center p-4 transition-all duration-300",
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      )}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={cn(
          "relative w-full rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-2xl transition-all duration-300 transform",
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4",
          maxWidthClasses[maxWidth]
        )}
      >
        <div className="flex items-center justify-between mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-2 text-slate-600 dark:text-slate-300">
          {children}
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl px-4 py-2 font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
          >
            Đóng
          </button>
          <button
            onClick={onClose}
            className="rounded-xl bg-primary px-6 py-2 font-semibold text-white shadow-md hover:bg-primary/90 transition-all active:scale-95"
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
}
