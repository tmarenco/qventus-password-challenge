import { consecutiveLettersRegex } from "./consecutive-regex";

export interface ValidationRule {
    description: string;
    validation: (password: string) => boolean;
  }
  
  export const validationRules: Record<string, ValidationRule> = {
    specialCharacters: {
      description: "Has one or more of these special characters: !@#$%^&*",
      validation: (password: string) => /[!@#$%^&*]/.test(password),
    },
    hasNumber: {
      description: "Has a number / digit",
      validation: (password: string) => /\d/.test(password),
    },
    hasUppercase: {
      description: "Has an uppercase letter",
      validation: (password: string) => /[A-Z]/.test(password),
    },
    noConsecutiveLetters: {
      description: "Has NO consecutive letters",
      validation: (password: string) => {
        if(!password) return false;
        const regex = consecutiveLettersRegex();
        return !regex.test(password)
      }

    },
  };
  