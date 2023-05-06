export function setIntesectionObserver(appendStyle: string, observeStyle: string): void {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(appendStyle);
      } else {
        entry.target.classList.remove(appendStyle);
      }
    });
  });
  const hiddenElements = document.querySelectorAll(`.${observeStyle}`);
  hiddenElements.forEach((element) => observer.observe(element));
}
