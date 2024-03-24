export interface ToastContextProps {
  toastSuccess: (title: string, message: string) => void;
  toastError: (title: string, message: string) => void;
}
