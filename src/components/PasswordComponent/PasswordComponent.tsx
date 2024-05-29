import { useState } from "react";
import { validationRules } from "../../utils/validations";
import { Title } from "./Title";
import { PasswordInput } from "./PasswordInput";
import { PasswordRequirements } from "./PasswordRequirements";
import styles from "./password-component.module.css";
import { PasswordComponentPropsInterface } from "../../interfaces/password-component-props.interface";

export const PasswordComponent = ({
  passwordRequirements,
}: PasswordComponentPropsInterface) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [validationResults, setValidationResults] = useState<
    Record<string, boolean>
  >({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword.trim());
    validatePassword(newPassword);
  };

  const validatePassword = (password: string) => {
    const results: Record<string, boolean> = {};
    for (const key in validationRules) {
      results[key] = validationRules[key].validation(password.trim());
    }
    setValidationResults(results);
  };

  return (
    <>
      <div className={styles.container}>
        <Title />
        <div className={styles["form-container"]}>
          <PasswordInput
            password={password}
            showPassword={showPassword}
            onPasswordChange={handleInputChange}
            toggleShowPassword={() => setShowPassword(!showPassword)}
          />
          <PasswordRequirements
            passwordRequirements={passwordRequirements}
            validationResults={validationResults}
          />
        </div>
      </div>
    </>
  );
};
