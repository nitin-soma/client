import React, { useState } from "react";
import "./PasswordChecker.css";

const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    var strength = 0;
    strength += /.{8,}/.test(passwordValue);
    strength += /[A-Z]/.test(passwordValue);
    strength += /[a-z]/.test(passwordValue);
    strength += /[0-9]/.test(passwordValue);
    strength += /[^A-Za-z0-9]/.test(passwordValue);

    switch (strength) {
      case 0:
        setPasswordStrength("Weak");
        break;
      case 1:
        setPasswordStrength("Weak");
        break;
      case 2:
        setPasswordStrength("Weak");
        break;
      case 3:
        setPasswordStrength("Medium");
        break;
      case 4:
        setPasswordStrength("Medium");
        break;
      case 5:
        setPasswordStrength("Strong");
        break;
      default:
        setPasswordStrength();
        break;
    }
  };

  return (
    <div className="pass-check">
      <label htmlFor="pwd">Enter password</label>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter password"
      />
      <p data-strength={passwordStrength}>
        Password strength: {passwordStrength}
      </p>
    </div>
  );
};

export default PasswordChecker;
