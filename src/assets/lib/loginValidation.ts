
export function LoginValidation(email: string, password: string, setError: CallableFunction) {
  const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!email || !password) {
    setError("All fields are required");
    return;
  }

  if (!emailRegex.test(email)) {
    setError("Invalid email format");
    return;
  }
}
