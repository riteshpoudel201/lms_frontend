/* 
Validation Rules:

 - 6 characters min
 - 1 lowercase min
 - 1 uppercase min 
 - 1 digit min
 - 1 special characters from !@#$%^&*()<>{} min
*/

export const validator = (password="", confirmPassword="") => {
  const error = [];
  console.log("Password: ", password);
  console.log("C_Password: ", confirmPassword);
  console.log("C_Password === password: ", confirmPassword === password);
  password.length < 6 && error.push("At least, 6 characters required");
  !/[A-Z]/.test(password) &&
    error.push("At least a character should be uppercase.");
  !/[a-z]/.test(password) &&
    error.push("At least a character should be lowercase.");
  !/[0-9]/.test(password) &&
    error.push("At least password should include a number in it.");
  !/[!@#$%^&*()<>?{}]/.test(password) &&
    error.push(
      `At least password should include a special character among "!@#$%^&*()<>?{}" in it.`
    );
  password.trim() !== confirmPassword.trim() &&
    error.push("Password do not match.");
  return error;
};
