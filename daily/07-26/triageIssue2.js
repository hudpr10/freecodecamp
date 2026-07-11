/*
Issue Triage 2

Given an issue title and an array of current labels, return an updated array of labels based on the following rules:

If the issue doesn't have any labels, add:
  - "bug" and "needs triage" if the title contains "error" or "bug"
  - "enhancement" and "discussing" if the title contains "feature" or "add"

Otherwise, if the given labels contain:
  - "needs triage" and the title contains "simple" or "easy", remove "needs triage" and add "good first issue"
  - "discussing" and the title contains "planned" or "next", remove "discussing" and add "on the roadmap"
  - Otherwise, if "needs triage" or "discussing" is present, remove it and add "help wanted"

If the title contains:
  - "security", add a "critical" label
*/

const transitions = [
  {
    current: "needs triage",
    words: ["simple", "easy"],
    next: "good first issue",
  },
  {
    current: "discussing",
    words: ["planned", "next"],
    next: "on the roadmap",
  },
  { current: "needs triage", words: [""], next: "help wanted" },
  { current: "discussing", words: [""], next: "help wanted" },
];

function triageIssue(title, labels) {
  const titleContains = (keywords) =>
    keywords.some((word) => title.includes(word));

  if (labels.length === 0) {
    if (titleContains(["bug", "error"])) labels.push("bug", "needs triage");
    if (titleContains(["feature", "add"]))
      labels.push("enhancement", "discussing");
  } else {
    for (const rule of transitions) {
      const index = labels.indexOf(rule.current);
      // Se a label existe e (ou não exige palavras específicas ou o título contém as palavras)
      if (index !== -1 && (rule.words[0] === "" || titleContains(rule.words))) {
        labels.splice(index, 1, rule.next);
        break; // Remove e substitui a primeira que encontrar, simulando o fluxo original
      }
    }
  }

  // 4. Regra global (independe do estado inicial das labels)
  if (titleContains(["security"])) {
    labels.push("critical");
  }

  return labels;
}

console.log(triageIssue("app crashes with error", []));
// ['bug', 'needs triage']

console.log(triageIssue("add dark mode", ["enhancement", "discussing"]));
// ['enhancement', 'help wanted']

console.log(triageIssue("easy a11y fix", ["bug", "needs triage"]));
// ['bug', 'good first issue']
