(() => {
  const input = document.getElementById("publication-search");
  if (!input) return;

  const normalize = (text) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, " ").trim();
  const groups = Array.from(document.querySelectorAll("#publication-results .publication-year"), (section) => ({
    section,
    entries: Array.from(section.querySelectorAll("ol.bibliography > li"), (element) => ({
      element,
      text: normalize(element.querySelector("[data-publication-search]").dataset.publicationSearch),
    })),
  }));
  const status = document.getElementById("publication-search-status");
  const empty = document.getElementById("publication-search-empty");

  const filter = () => {
    const query = normalize(input.value);
    const terms = query.split(" ").filter(Boolean);
    let total = 0;
    groups.forEach(({ section, entries }) => {
      let matches = 0;
      entries.forEach(({ element, text }) => {
        const matchesQuery = terms.every((term) => text.includes(term));
        element.hidden = !matchesQuery;
        if (matchesQuery) matches += 1;
      });
      section.hidden = matches === 0;
      total += matches;
    });
    empty.hidden = total !== 0;
    status.textContent = `${total} publication${total === 1 ? "" : "s"} ${query ? "found" : "available"}.`;
  };

  input.addEventListener("input", filter);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      input.value = "";
      filter();
    }
  });
  input.closest(".publication-search").hidden = false;
  filter();
})();