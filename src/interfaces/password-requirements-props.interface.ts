import { PasswordRequirement } from "../enums/password-requirements.enums";

export interface PasswordRequirementsPropsInterface {
    passwordRequirements: PasswordRequirement[];
    validationResults: Record<PasswordRequirement, boolean>;
  }