// File: components/common/Card.tsx
export interface CardProps {
  title?: string;
  content?: string;
  imageUrl?: string;
  onClick?: () => void;
}
// File: components/common/Button.tsx
export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary';
}