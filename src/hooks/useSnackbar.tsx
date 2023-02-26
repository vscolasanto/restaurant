import { useContext } from 'react';
import { SnackBarContext } from '../contexts/snackbar.context';
import { SnackBarContextType } from '~/@types/snackbar';

export const useSnackBarContext = (): SnackBarContextType => {
  const context = useContext(SnackBarContext);

  if (context === undefined) {
    throw new Error('useSnackBarContext must be used within a SnackBarProvider');
  }

  return context;
};
