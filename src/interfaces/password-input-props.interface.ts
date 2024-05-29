export interface PasswordInputPropsInterface {
    password: string;
    showPassword: boolean;
    onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    toggleShowPassword: () => void;
}