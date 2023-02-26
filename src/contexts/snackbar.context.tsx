import { createContext, useState, useMemo, useCallback, useEffect, useRef, FC } from 'react';
import { SnackBarContextType, SnackBarType } from '~/@types/snackbar';

interface SnackBarProps {
  children?: React.ReactNode;
}

export const SnackBarContext = createContext<SnackBarContextType | undefined>(undefined);

export const SnackBarProvider: FC<SnackBarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [snackBar, setSnackBar] = useState<SnackBarType | undefined>(undefined);
  const timeout = useRef(0);
  const createSnackBar = useCallback((snackbar: SnackBarType) => {
    setSnackBar(snackbar);
    setIsOpen(true);
  }, []);

  const context = useMemo(
    () => ({
      isOpen,
      snackBar,
      createSnackBar,
    }),
    [isOpen, snackBar, createSnackBar],
  );

  useEffect(() => {
    if (snackBar) {
      timeout.current = window.setTimeout(() => {
        setIsOpen(false);
        setSnackBar(undefined);
      }, 4500);
    }
  }, [snackBar, timeout]);

  return <SnackBarContext.Provider value={context}>{children}</SnackBarContext.Provider>;
};
