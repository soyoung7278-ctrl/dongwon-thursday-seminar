(function () {
  const brief = window.MONTHLY_BRIEF;
  if (!brief) return;

  const fields = {
    "brief-month": brief.month,
    "brief-kicker": brief.kicker,
    "brief-speaker": brief.speaker,
    "brief-topic": brief.topic,
    "brief-background": brief.background,
    "brief-audience": brief.audience,
    "brief-date": brief.date,
    "brief-format": brief.format,
    "brief-note": brief.note
  };

  Object.entries(fields).forEach(([id, value]) => {
    const node = document.getElementById(id);
    if (node) node.textContent = value;
  });

  const questions = document.getElementById("brief-questions");
  if (questions) {
    brief.questions.forEach((question) => {
      const item = document.createElement("li");
      if (typeof question === "string") {
        item.textContent = question;
      } else {
        const title = document.createElement("strong");
        const detail = document.createElement("p");
        title.textContent = question.title;
        detail.textContent = question.detail;
        item.append(title, detail);
      }
      questions.appendChild(item);
    });
  }
})();
