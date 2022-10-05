window.onload = function () {
  let emailInput = document.getElementsByClassName("email-modal__input")[0];
  let emailButton = document.getElementsByClassName("email-modal__button")[0];
  let shade = document.getElementsByClassName("container-shade")[0];
  let thankYou = document.getElementsByClassName("thank-you")[0];
  let exitBtn = document.getElementsByClassName("thank-you__x-btn")[0];

  function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  let addErrors = () => {
    document
      .getElementsByClassName("email-modal__error-message")[0]
      .classList.add("email-modal__error-message--active");
  };

  let removeErrors = () => {
    document
      .getElementsByClassName("email-modal__error-message")[0]
      .classList.remove("email-modal__error-message--active");
  };

  emailInput.addEventListener("click", () => {
    removeErrors();
  });

  emailButton.addEventListener("click", () => {
    if (emailIsValid(emailInput.value)) {
      shade.style = "display:block";
      thankYou.style = "display:block";
    } else {
      addErrors();
    }
  });

  exitBtn.addEventListener("click", () => {
    shade.style = "display:none";
    thankYou.style = "display:none";
  });
};
