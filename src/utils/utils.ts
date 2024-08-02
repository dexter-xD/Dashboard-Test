import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formDataToObject = (formData: FormData) => {
  const obj: Record<string, any> = {};

  formData.forEach((value, key) => {
    obj[key] = value;
  });

  return obj;
};
