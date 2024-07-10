enum DIR {
	NEXT = 0,
	PREV = 1,
}

function getClosestArticle() {
	let closestArticle: { y: number; article: HTMLElement } | undefined;
	const articles = document.getElementsByTagName("article");
	for (let i = 0; i < articles.length; i++) {
		const article = articles[i];
		const pos = article.getBoundingClientRect();
		const y = Math.abs(pos.y);
		article.removeAttribute("data-selected");
		if (!closestArticle || y < closestArticle.y) {
			closestArticle = {
				article,
				y,
			};
		}
	}
	if (closestArticle?.article) {
		closestArticle?.article.setAttribute("data-selected", "true");
	}
	return closestArticle?.article;
}

function getSibling(el: HTMLElement, dir = DIR.NEXT) {
	if (
		dir === DIR.NEXT &&
		el?.nextElementSibling?.tagName.toLowerCase() === "article"
	) {
		return el.nextElementSibling;
	}
	if (
		dir === DIR.PREV &&
		el?.previousElementSibling?.tagName.toLowerCase() === "article"
	) {
		return el.previousElementSibling;
	}
	return el;
}

function getSelected(dir = DIR.NEXT) {
	const selected = document.querySelector(
		"article[data-selected]",
	) as HTMLElement;
	let nextSelected: HTMLElement | undefined;
	if (selected) {
		nextSelected = getSibling(selected, dir) as HTMLElement;
		selected.removeAttribute("data-selected");
	} else {
		nextSelected = getClosestArticle() as HTMLElement;
	}
	nextSelected?.setAttribute("data-selected", "true");
	nextSelected?.scrollIntoView({ behavior: "smooth" });
	nextSelected?.focus();
}

export function getNext() {
	getSelected(DIR.NEXT);
}

export function getPrev() {
	getSelected(DIR.PREV);
}
