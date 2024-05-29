import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { validationRules } from "../../utils/validations";
import styles from "./password-component.module.css";
import { PasswordRequirementsPropsInterface } from "../../interfaces/password-requirements-props.interface";
import { PasswordRequirement } from "../../enums/password-requirements.enums";

export const PasswordRequirements = ({
  passwordRequirements,
  validationResults,
}: PasswordRequirementsPropsInterface) => {
  return (
    <div className={styles["conditions-container"]}>
      {passwordRequirements.map((requirement, index) => {
        const ruleKey = Object.keys(validationRules).find(
          (key) =>
            validationRules[key as PasswordRequirement].description ===
            requirement
        ) as PasswordRequirement | undefined;
        const isValid = ruleKey ? validationResults[ruleKey] : false;
        return (
          <div key={index} className={styles["condition"]}>
            {isValid ? (
              <CheckIcon
                className={`${styles["validation-icon"]} ${styles["success-color"]}`}
              />
            ) : (
              <CloseIcon
                className={`${styles["validation-icon"]} ${styles["error-color"]}`}
              />
            )}
            <p className={styles["condition-description"]}>{requirement}</p>
          </div>
        );
      })}
    </div>
  );
};
