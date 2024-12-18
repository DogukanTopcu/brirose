"use client";

import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'formAction'>  {
  pendingText?: string;
  formAction: (formData: FormData) => Promise<void>;
};

export function SubmitButton({
  children,
  pendingText = "Submitting...",
  formAction,
  ...props
}: Props) {
  const { pending } = useFormStatus();

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const form = event.currentTarget.closest('form');
    if (form) {
      const formData = new FormData(form);
      await formAction(formData);
    }
  };

  return (
    <Button type="submit" aria-disabled={pending} onClick={handleClick} {...props}>
      {pending ? pendingText : children}
    </Button>
  );
}
