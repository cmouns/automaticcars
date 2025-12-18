import React from "react";

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
  variant?: "dark" | "light";
}

export type PageType =
  | "home"
  | "reservation"
  | "fleet"
  | "lld"
  | "subscription"
  | "news"
  | "about"
  | "conditions"
  | "contact";

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
  phoneNumber: string;
  dateOfBirth: string;
}

export interface UserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
  licenseNumber: string;
  licenseExpirationDate: string;
  licenseObtainedDate: string;
  avatarUrl?: string;
  licenseFrontPath?: string | null;
  licenseBackPath?: string | null;
  isPro?: boolean;
}

export interface FileUploadState {
  file: File | null;
  fileName: string | null;
  uploading: boolean;
  success: boolean;
}
