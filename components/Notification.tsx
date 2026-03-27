"use client";

import React, { useEffect, useState, useCallback } from "react";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export type NotificationType = "success" | "error" | "info" | "warning";

interface NotificationProps {
  title: string;
  message: string;
  type?: NotificationType;
  duration?: number;
  onClose?: () => void;
  show?: boolean;
}

const icons = {
  success: <CheckCircle className="w-5 h-5 text-green-500" />,
  error: <AlertCircle className="w-5 h-5 text-red-500" />,
  info: <Info className="w-5 h-5 text-blue-500" />,
  warning: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
};

const borderColors = {
  success: "border-green-500/20 bg-green-50 dark:bg-green-900/10",
  error: "border-red-500/20 bg-red-50 dark:bg-red-900/10",
  info: "border-blue-500/20 bg-blue-50 dark:bg-blue-900/10",
  warning: "border-yellow-500/20 bg-yellow-50 dark:bg-yellow-900/10",
};

export function Notification({
  title,
  message,
  type = "info",
  duration = 5000,
  onClose,
  show = false,
}: NotificationProps) {
  const [isVisible, setIsVisible] = useState(show);
  const [progress, setProgress] = useState(100);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    setIsVisible(show);
    if (show) {
      setProgress(100);
      const timer = setInterval(() => {
        setProgress((prev) => Math.max(0, prev - 100 / (duration / 100)));
      }, 100);

      const closeTimer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => {
        clearInterval(timer);
        clearTimeout(closeTimer);
      };
    }
  }, [show, duration, handleClose]);

  if (!isVisible && !show) return null;

  return (
    <div
      className={cn(
        "fixed top-4 right-4 z-[100] w-full max-w-sm overflow-hidden rounded-xl border p-4 shadow-lg transition-all duration-300 transform",
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
        borderColors[type]
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">{icons[type]}</div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            {title}
          </h3>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            {message}
          </p>
        </div>
        <button
          onClick={handleClose}
          className="flex-shrink-0 rounded-lg p-1 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-slate-200 dark:bg-slate-800 w-full">
        <div
          className={cn(
            "h-full transition-all duration-100 ease-linear",
            type === "success" && "bg-green-500",
            type === "error" && "bg-red-500",
            type === "info" && "bg-blue-500",
            type === "warning" && "bg-yellow-500"
          )}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
