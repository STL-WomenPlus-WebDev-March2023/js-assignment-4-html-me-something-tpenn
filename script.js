function init () {
    const summary = document.getElementsByClassName("highlightSummary");

    for (const elem of summary) {
        elem.addEventListener("mouseover", _ => elem.style.background = 'green');
        elem.addEventListener("mouseout", _ => elem.style.background = '');
    }
}

window.addEventListener("load", init);