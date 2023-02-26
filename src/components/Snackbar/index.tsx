/* eslint-disable react/prop-types */
import React from 'react';
import { createPortal } from 'react-dom';
import { FaExclamationCircle, FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { useSnackBarContext } from '~/hooks/useSnackbar';

import * as S from './styles';

export interface SnackbarProps {
  type: 'INFO' | 'ERROR' | 'SUCCESS';
  message: string;
  ref: React.ForwardedRef<any>;
  show?: () => void;
}

const Snackbar: React.FC = () => {
  const { snackBar, isOpen } = useSnackBarContext();

  const renderIcon = () => {
    switch (snackBar?.type) {
      case 'INFO':
        return <FaExclamationCircle />;
      case 'ERROR':
        return <FaTimesCircle />;
      case 'SUCCESS':
        return <FaCheckCircle />;
    }
  };

  const setColor = () => {
    switch (snackBar?.type) {
      case 'INFO':
        return 'info';
      case 'ERROR':
        return 'error';
      case 'SUCCESS':
        return 'success';
    }
  };

  React.useEffect(() => {
    console.log(isOpen);
  });

  if (isOpen && snackBar?.content) {
    return createPortal(
      <S.SnackbarContainer className={setColor()}>
        <div className='icon'>{renderIcon()}</div>
        <div className='message'>{snackBar?.content}</div>
      </S.SnackbarContainer>,
      document.body,
    );
  }
  return null;
};

export default Snackbar;
