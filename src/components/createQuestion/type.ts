export type AlertColor = 'success' | 'error' | 'warning' | 'info';

export type BoxShadow = 'none' | string;
export type FormValues = {
  subject: string;
  body: string;
};

export type createQuestionContext = {
  isOpen: boolean;
  closeModal: () => void;
};

export type snackbarType = {
  open: boolean;
  severity: string;
  title: string;
};
