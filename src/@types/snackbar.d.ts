import { ReactNode } from 'react';

export type SnackBarType = {
  content: ReactNode;
  type: 'INFO' | 'ERROR' | 'SUCCESS';
};

export type SnackBarContextType = {
  snackBar: SnackBarType | undefined;
  isOpen?: boolean;
  createSnackBar: (snackbar: SnackBarType) => void;
};
