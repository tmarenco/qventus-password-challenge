import { PasswordComponent } from "./components/PasswordComponent/PasswordComponent";

const passwordRequirements = [
  "Has one or more of these special characters: !@#$%^&*",
  "Has a number / digit",
  "Has an uppercase letter",
  "Has NO consecutive letters",
];

function App() {
  return (
    <>
      <PasswordComponent passwordRequirements={passwordRequirements} />
    </>
  );
}

export default App;
