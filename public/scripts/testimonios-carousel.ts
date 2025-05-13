// @ts-ignore
import EmblaCarousel from "https://cdn.skypack.dev/embla-carousel";

export function initTestimoniosCarousel() {
  const emblaNode = document.querySelector(".embla__viewport");
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");

  if (!emblaNode || !prevBtn || !nextBtn) return;

  const embla = EmblaCarousel(emblaNode, {
    loop: true,
    align: "start",
  });

  prevBtn.addEventListener("click", () => embla.scrollPrev());
  nextBtn.addEventListener("click", () => embla.scrollNext());

  let autoPlayInterval = setInterval(() => embla.scrollNext(), 4000);

  emblaNode.addEventListener("pointerenter", () => {
    clearInterval(autoPlayInterval);
  });

  emblaNode.addEventListener("pointerleave", () => {
    autoPlayInterval = setInterval(() => embla.scrollNext(), 4000);
  });
}
