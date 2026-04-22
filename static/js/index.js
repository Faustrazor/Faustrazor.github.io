function copyBibTeX() {
  const bibtexElement = document.getElementById("bibtex-code");
  const button = document.querySelector(".copy-bibtex-btn");
  const copyText = button ? button.querySelector(".copy-text") : null;

  if (!bibtexElement || !button || !copyText) {
    return;
  }

  navigator.clipboard.writeText(bibtexElement.textContent).then(() => {
    button.classList.add("copied");
    copyText.textContent = "Copied";

    window.setTimeout(() => {
      button.classList.remove("copied");
      copyText.textContent = "Copy";
    }, 1800);
  }).catch(() => {
    const textarea = document.createElement("textarea");
    textarea.value = bibtexElement.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    button.classList.add("copied");
    copyText.textContent = "Copied";

    window.setTimeout(() => {
      button.classList.remove("copied");
      copyText.textContent = "Copy";
    }, 1800);
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

window.addEventListener("scroll", () => {
  const scrollButton = document.querySelector(".scroll-to-top");
  if (!scrollButton) {
    return;
  }

  if (window.scrollY > 320) {
    scrollButton.classList.add("visible");
  } else {
    scrollButton.classList.remove("visible");
  }
});
