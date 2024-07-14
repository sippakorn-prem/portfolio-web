export function setIntesectionObserver(param: {
	observeSelector: string;
	appendStyle?: string;
	callback?: (entry: IntersectionObserverEntry, index: number) => void;
}): void {
	const { observeSelector, appendStyle, callback } = param;
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry, i) => {
			if (callback) callback(entry, i);
			else {
				if (entry.isIntersecting) {
					entry.target.classList.add(appendStyle || '');
				} else {
					entry.target.classList.remove(appendStyle || '');
				}
			}
		});
	});
	const hiddenElements = document.querySelectorAll(observeSelector);
	hiddenElements.forEach((element) => observer.observe(element));
}
