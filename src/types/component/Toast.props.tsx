export interface ToastProps {
  title: string;
  text: string;
  submitBtnTxt?: string;
  cancelBtnTxt?: string;
  submitLink?: string;
  cancelLink?: string;
  showToast?: boolean;
  autoHide?: boolean;
  delay?: number;
  onClose?: () => void;
  cancelAction?: () => void;
}
