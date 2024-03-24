"use client";

import { createContext, useContext } from "react";

import { ToastContextProps } from "@/src/typings/toast-provider-props";
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
      duration: 1500,
    });
  };

  const toastError = (title: string, message: string) => {
    toast({
      title: title,
      description: message,
      status: "error",
      duration: 1500,
    });
  };

  return <ToastContext.Provider value={{ toastSuccess, toastError }}>{children}</ToastContext.Provider>;
}
