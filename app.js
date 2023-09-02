lucide.createIcons();

let select = document.querySelector(".select"),
	selectedValue = document.getElementById("selected-value"),
	optionsViewButton = document.getElementById("options-view-button"),
	inputOptions = document.querySelectorAll(".option input");

inputOptions.forEach((input) => {
	input.addEventListener("click", (event) => {
		selectedValue.textContent = input.dataset.label;

		const isMouseOrTouch =
			event.pointerType == "touch" || event.pointerType == "mouse";

		isMouseOrTouch && optionsViewButton.click();
	});
});

window.addEventListener("keydown", (event) => {
	if (!select.classList.contains("open")) return;

	if (event.key == "Escape" || event.key == " ") {
		optionsViewButton.click();
	}
});

optionsViewButton.addEventListener("input", () => {
	select.classList.toggle("open");

	if (!select.classList.contains("open")) return;

	const input =
		document.querySelector(".option input:checked") ||
		document.querySelector(".option input");

	input.focus();
});
