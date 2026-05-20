const PAYMENT_LINK = "https://pay.kiwify.com.br/acG8KgP";
const THANK_YOU_PAGE = "gracias.html";
const PDF_PATH = "assets/pdf/Como-Construir-un-Imperio-Digital-Desde-Cero-en-2026-Ricardo-Abreu.pdf";

function getPaymentDestination() {
  return PAYMENT_LINK.trim() || THANK_YOU_PAGE;
}

document.querySelectorAll(".payment-button").forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = getPaymentDestination();
  });
});

document.querySelectorAll(".download-button").forEach((button) => {
  button.setAttribute("href", PDF_PATH);
  button.setAttribute("download", "");
});
