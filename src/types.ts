import React from 'react';


export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface AuthModalProps extends ModalProps {
  onToggleView: () => void;
  onForgotPassword?: () => void;
  onBackToLogin?: () => void;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
}


export type PageType = 'home' | 'reservation' | 'fleet' | 'lld' | 'subscription' | 'news' | 'about' | 'conditions' | 'contact';

export interface NavItem {
  id: string;
  label: string;
  href?: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
}