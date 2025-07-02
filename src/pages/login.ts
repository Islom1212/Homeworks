function SearchHandler() {
  const emailBtn = document.querySelector<HTMLInputElement>(".email-input")!;
  const passwordBtn =
    document.querySelector<HTMLInputElement>(".password-input")!;
  const loginBtn = document.querySelector<HTMLButtonElement>("#login-btn")!;
  const errorEmail =
    document.querySelector<HTMLParagraphElement>(".error-email")!;
  const errorPassword =
    document.querySelector<HTMLParagraphElement>(".error-password")!;

  loginBtn.addEventListener("click", () => {
    const email = emailBtn.value.trim();
    const password = passwordBtn.value.trim();

    errorEmail.textContent = "";
    errorPassword.textContent = "";

    let tekshiruv = true;

    if (email === "") {
      errorEmail.textContent = "Iltimos email manzilini kiriting.";
      tekshiruv = false;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/.test(email)) {
      errorEmail.textContent = "Iltimos, to'g'ri email manzilini kiriting.";
      tekshiruv = false;
    }

    if (password === "") {
      errorPassword.textContent = "Iltimos parolni kiriting.";
      tekshiruv = false;
    }

    if (!tekshiruv) return;

    console.log(`emailingiz: ${email}, parolingiz: ${password} saqlandi.`);

    emailBtn.value = "";
    passwordBtn.value = "";
  });
}

export const loginInit = () => {
  SearchHandler();
};
