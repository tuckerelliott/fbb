export default function decorate(block) {
  const stripeDiv = block.querySelector("div:nth-child(2)");
  if (stripeDiv) {
    const stripe = document.createElement("div");
    stripe.innerHTML = `<div class="stripe">
    <div class="stripe-top"></div
    ><div class="stripe-middle"></div>
    <div class="stripe-bottom"></div>
    </div>`;
    stripeDiv.appendChild(stripe);
  }
}
