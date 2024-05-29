import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import styles from "./password-component.module.css";
import { PasswordInputPropsInterface } from "../../interfaces/password-input-props.interface";

export const PasswordInput = ({
  password,
  showPassword,
  onPasswordChange,
  toggleShowPassword,
}: PasswordInputPropsInterface) => {
  return (
    <div className={styles["input-container"]}>
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={onPasswordChange}
      />
      <span onClick={toggleShowPassword}>
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </span>
    </div>
  );
};
