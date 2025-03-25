export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
export const validateLoginForm = (email: string, password: string) => {
    let errors = { email: "", password: "" };
    let isValid = true;
  
    if (!isValidEmail(email)) {
      errors.email = "Please enter a valid email!";
      isValid = false;
    }
  
    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters!";
      isValid = false;
    }
  
    return { errors, isValid };
};
  
export const validateRegisterForm = (fullname: string, email: string, password: string) => {
    let errors = { fullname: "", email: "", password: "" };
    let isValid = true;
  
    if (fullname.trim().length < 3) {
      errors.fullname = "Fullname must be at least 3 characters!";
      isValid = false;
    }
  
    if (!isValidEmail(email)) {
      errors.email = "Please enter a valid email!";
      isValid = false;
    }
  
    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters!";
      isValid = false;
    }
  
    return { errors, isValid };
};
  