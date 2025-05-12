import EmblaCarousel from "embla-carousel";

export function initTestimoniosCarousel() {
  const emblaNode = document.querySelector(
    ".embla__viewport"
  ) as HTMLElement | null;
  const prevBtn = document.querySelector(
    "#prevBtn"
  ) as HTMLButtonElement | null;
  const nextBtn = document.querySelector(
    "#nextBtn"
  ) as HTMLButtonElement | null;

  if (!emblaNode || !prevBtn || !nextBtn) return;

  const embla = EmblaCarousel(emblaNode, {
    loop: true,
    align: "start",
  });

  prevBtn.addEventListener("click", () => embla.scrollPrev());
  nextBtn.addEventListener("click", () => embla.scrollNext());

  // Auto-play
  let autoPlayInterval = setInterval(() => embla.scrollNext(), 4000);

  emblaNode.addEventListener("pointerenter", () =>
    clearInterval(autoPlayInterval)
  );
  emblaNode.addEventListener("pointerleave", () => {
    autoPlayInterval = setInterval(() => embla.scrollNext(), 4000);
  });
}
