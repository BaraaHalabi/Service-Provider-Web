export const validate = (data, formType) => {
  const errors = {};

  if (formType === "signUp") {
    if (!data.name) {
      errors.name = "Name is required";
    } else if (data.name.length < 3) {
      errors.name = "Name must be at least 3 characters long";
    }

    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (!data.location) {
      errors.location = "Location is required";
    }
  }

  return errors;
};
