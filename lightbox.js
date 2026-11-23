// 이미지를 누르면 크게 보기
document.addEventListener("click", (e) => {
  const img = e.target.closest("figure img, .phones img");
  if (img) {
    const box = document.createElement("div");
    box.className = "lightbox";
    box.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    box.onclick = () => box.remove();
    if (img.naturalHeight > img.naturalWidth * 2.5) box.classList.add("long");
    document.body.append(box);
    return;
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") document.querySelector(".lightbox")?.remove();
});
