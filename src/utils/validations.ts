// utils/validations.ts
import { PasswordRequirement } from "../enums/password-requirements.enums";
import { consecutiveLettersRegex } from "./consecutive-regex";

export interface ValidationRule {
  description: string;
  validation: (password: string) => boolean;
}

export const validationRules: Record<PasswordRequirement, ValidationRule> = {
  [PasswordRequirement.SpecialCharacters]: {
    description: PasswordRequirement.SpecialCharacters,
    validation: (password: string) => /[!@#$%^&*]/.test(password),
  },
  [PasswordRequirement.HasNumber]: {
    description: PasswordRequirement.HasNumber,
    validation: (password: string) => /\d/.test(password),
  },
  [PasswordRequirement.HasUppercase]: {
    description: PasswordRequirement.HasUppercase,
    validation: (password: string) => /[A-Z]/.test(password),
  },
  [PasswordRequirement.NoConsecutiveLetters]: {
    description: PasswordRequirement.NoConsecutiveLetters,
    validation: (password: string) => {
      if (!password) return false;
      const regex = consecutiveLettersRegex();
      return !regex.test(password);
    },
  },
};

  