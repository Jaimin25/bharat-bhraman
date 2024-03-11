"use client";

import { createContext, useContext } from "react";

import { ToastContextProps } from "@/typings/toast-provider-props";
import { useToast as useChakraToast } from "@chakra-ui/react";

const ToastContext = createContext<ToastContextProps>({
  toastSuccess: () => {},
  toastError: () => {},
});

export const useToast = () => {
  return useContext(ToastContext);
};

export default function ToastProvider({ children }: { children: React.ReactNode }) {
  const toast = useChakraToast();

  const toastSuccess = (title: string, message: string) => {
    toast({
      title: title,
      description: message,
      status: "success",
      duration: 1000,
    });
  };

  const toastError = (title: string, message: string) => {
    toast({
      title: title,
      description: message,
      status: "error",
      duration: 1000,
    });
  };

  return <ToastContext.Provider value={{ toastSuccess, toastError }}>{children}</ToastContext.Provider>;
}
