function RegisterHandler() {
  const nameInput = document.querySelector<HTMLInputElement>(".name-input")!;
  const emailInput = document.querySelector<HTMLInputElement>(".email-input")!;
  const passwordInput =
    document.querySelector<HTMLInputElement>(".password-input")!;
  const registerBtn =
    document.querySelector<HTMLButtonElement>("#register-btn")!;

  const errorName =
    document.querySelector<HTMLParagraphElement>(".error-name")!;
  const errorEmail =
    document.querySelector<HTMLParagraphElement>(".error-email")!;
  const errorPassword =
    document.querySelector<HTMLParagraphElement>(".error-password")!;

  registerBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    errorName.textContent = "";
    errorEmail.textContent = "";
    errorPassword.textContent = "";

    let tekshiruv = true;

    if (name === "") {
      errorName.textContent = "Iltimos ismingizni kiriting.";
      tekshiruv = false;
    }

    if (email === "") {
      errorEmail.textContent = "Iltimos email manzilini kiriting.";
      tekshiruv = false;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/.test(email)) {
      errorEmail.textContent = "Iltimos to'g'ri email kiriting.";
      tekshiruv = false;
    }

    if (password === "") {
      errorPassword.textContent = "Iltimos parolni kiriting.";
      tekshiruv = false;
    }

    if (!tekshiruv) return;

    console.log(`Ro'yxatdan o'tdingiz: ${name}, ${email}, ${password}`);

    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
  });
}

export const registerInit = () => {
  RegisterHandler();
};
