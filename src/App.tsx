import { PasswordComponent } from "./components/PasswordComponent/PasswordComponent";
import { PasswordRequirement } from "./enums/password-requirements.enums";

const passwordRequirements: PasswordRequirement[] = [
  PasswordRequirement.SpecialCharacters,
  PasswordRequirement.HasNumber,
  PasswordRequirement.HasUppercase,
  PasswordRequirement.NoConsecutiveLetters,
];

function App() {
  return (
    <>
      <PasswordComponent passwordRequirements={passwordRequirements} />
    </>
  );
}

export default App;
