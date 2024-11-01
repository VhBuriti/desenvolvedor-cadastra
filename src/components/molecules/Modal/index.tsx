import React from 'react';
import './index.scss';
import CustomText from '../../atoms/CustomText';
import CustomButton from '../../atoms/Button';
import CustomImage from '../../atoms/Image';
import { CloseIcon } from '../../../assets';

interface FullscreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: FullscreenModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" data-modal="fullscreen">
      <div data-modal-header >
        <CustomText text={title} data-modal-title/>
        <CustomButton
          data-modal-close-button
          onClick={onClose}
          label={<CustomImage width={18} height={18} src={CloseIcon}/>}
        />
          
      </div>
      <div data-modal-content>
        {children}
      </div>
    </div>
  );
};

export default Modal;
