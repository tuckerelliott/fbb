export default function decorate(block) {
  if (!block.querySelector(":scope > div:first-child picture")) {
    block.classList.add("no-image");
  }

  const stripeDiv = block.querySelector("div:last-child");
  if (stripeDiv) {
    const stripe = document.createElement("div");
    stripe.innerHTML = `<div class="Hero_ds-hero__stripe__MVj9F Hero_orange__igC_h"><div class="Hero_stripe-top__xMSJ9"></div><div class="Hero_stripe-middle__8QIty"></div><div class="Hero_stripe-bottom__sUeDL"></div></div>`;
    stripeDiv.replaceWith(stripe);
  }
}
