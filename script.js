const roadmapByLanguage = {
en: [
  {
    title: "Find a Local Business Opportunity",
    accent: "purple",
    steps: [
      ["Search a niche on Google Maps", "Look for restaurants, salons, clinics, gyms, or service businesses in your area."],
      ["Look for weak or missing websites", "Choose a business where a modern website would make an obvious difference."],
      ["Pick one business", "Collect its name, category, location, phone number, and Google Maps link."]
    ]
  },
  {
    title: "Build the Website with Claude Code",
    accent: "indigo",
    steps: [
      ["Use the Claude Code Master Prompt", "Customize it with the business details below.", "prompt"],
      ["Paste it into Claude Code", "Open a fresh project folder and paste your customized prompt."],
      ["Review the generated website", "Check the layout, services, calls to action, contact information, and mobile view."]
    ]
  },
  {
    title: "Refine the Website",
    accent: "blue",
    steps: [
      ["Improve the visual direction", "Ask for a polished layout that feels specific to the chosen business."],
      ["Check the mobile experience", "Review the navigation, spacing, images, and call-to-action buttons on a narrow screen."],
      ["Verify every button", "Connect calls to action to phone, email, maps, or the relevant contact section."],
      ["Replace placeholder content", "Use the real services, address, opening hours, and business details."],
      ["Run a final review", "Look for copy mistakes, broken links, and visual inconsistencies."]
    ]
  },
  {
    title: "Deploy the Website",
    accent: "purple",
    steps: [
      ["Test your website locally", "Run the development server and click through each important action."],
      ["Create an empty GitHub repository", "Use a clear project name and leave the repository empty."],
      ["Publish the branch from VS Code", "Review the files, commit the project, and sync it to GitHub."],
      ["Create a Hostinger web app", "Choose the Node.js web app flow and connect your GitHub repository."],
      ["Configure the build settings", "Use the Vite build command and the correct output directory."],
      ["Open your live website", "Check that the deployed URL works as expected."]
    ]
  },
  {
    title: "Outreach Messages",
    accent: "gray",
    infoOnly: true,
    steps: [
      ["DM Message (Instagram / WhatsApp)", "Hi, I came across your business and created a quick sample website to show how it could look with a cleaner and more modern online presence.\n\nWould you like me to send you the link?"]
    ]
  }
],
de: [
  {
    title: "Lokales Unternehmen finden",
    accent: "purple",
    steps: [
      ["Nische auf Google Maps suchen", "Suche nach Restaurants, Salons, Praxen, Fitnessstudios oder Dienstleistungsbetrieben in deiner Region."],
      ["Schwache oder fehlende Webseiten finden", "Wähle ein Unternehmen, bei dem eine moderne Webseite einen sichtbaren Unterschied machen würde."],
      ["Ein Unternehmen auswählen", "Sammle Name, Kategorie, Standort, Telefonnummer und Google-Maps-Link."]
    ]
  },
  {
    title: "Webseite mit Claude Code erstellen",
    accent: "indigo",
    steps: [
      ["Claude-Code-Master-Prompt verwenden", "Passe ihn mit den Unternehmensdaten unten an.", "prompt"],
      ["In Claude Code einfügen", "Öffne einen neuen Projektordner und füge deinen angepassten Prompt ein."],
      ["Erstellte Webseite prüfen", "Prüfe Layout, Leistungen, Handlungsaufforderungen, Kontaktdaten und mobile Ansicht."]
    ]
  },
  {
    title: "Webseite verfeinern",
    accent: "blue",
    steps: [
      ["Visuelle Richtung verbessern", "Bitte um ein hochwertiges Layout, das zum ausgewählten Unternehmen passt."],
      ["Mobile Darstellung prüfen", "Prüfe Navigation, Abstände, Bilder und Buttons auf einem schmalen Bildschirm."],
      ["Alle Buttons prüfen", "Verknüpfe Handlungsaufforderungen mit Telefon, E-Mail, Maps oder dem passenden Kontaktbereich."],
      ["Platzhalter ersetzen", "Verwende echte Leistungen, Adresse, Öffnungszeiten und Unternehmensdaten."],
      ["Abschließende Prüfung durchführen", "Suche nach Textfehlern, defekten Links und visuellen Unstimmigkeiten."]
    ]
  },
  {
    title: "Webseite veröffentlichen",
    accent: "purple",
    steps: [
      ["Webseite lokal testen", "Starte den Entwicklungsserver und prüfe jede wichtige Aktion."],
      ["Leeres GitHub-Repository erstellen", "Verwende einen eindeutigen Projektnamen und lasse das Repository leer."],
      ["Branch aus VS Code veröffentlichen", "Prüfe die Dateien, committe das Projekt und synchronisiere es mit GitHub."],
      ["Hostinger-Web-App erstellen", "Wähle eine Node.js-Web-App und verbinde dein GitHub-Repository."],
      ["Build-Einstellungen konfigurieren", "Verwende den Vite-Build-Befehl und das richtige Ausgabeverzeichnis."],
      ["Live-Webseite öffnen", "Prüfe, ob die veröffentlichte URL wie erwartet funktioniert."]
    ]
  },
  {
    title: "Nachrichten zur Kontaktaufnahme",
    accent: "gray",
    infoOnly: true,
    steps: [
      ["Direktnachricht (Instagram / WhatsApp)", "Hallo, ich bin auf Ihr Unternehmen gestoßen und habe eine kurze Beispiel-Webseite erstellt, um zu zeigen, wie Ihr Online-Auftritt moderner und übersichtlicher aussehen könnte.\n\nDarf ich Ihnen den Link senden?"]
    ]
  }
]};

const faqsByLanguage = {
en: [
  ["Why does the generated website feel generic?", "Use a real business with enough useful details from Google Maps. Specific input creates a stronger website."],
  ["Why is important business information missing?", "Add services, hours, address, and contact information in the prompt fields."],
  ["Why do the buttons not work?", "Ask Claude Code to connect each button to a real action such as a phone link or contact section."],
  ["Why is my deployment not updating?", "Push the latest commit to GitHub so the hosting provider can redeploy it."]
],
de: [
  ["Warum wirkt die erstellte Webseite allgemein?", "Verwende ein echtes Unternehmen mit ausreichend Informationen aus Google Maps. Konkrete Angaben führen zu einer stärkeren Webseite."],
  ["Warum fehlen wichtige Unternehmensdaten?", "Ergänze Leistungen, Öffnungszeiten, Adresse und Kontaktdaten in den Prompt-Feldern."],
  ["Warum funktionieren die Buttons nicht?", "Bitte Claude Code darum, jeden Button mit einer echten Aktion wie einem Telefon-Link oder Kontaktbereich zu verbinden."],
  ["Warum wird meine Veröffentlichung nicht aktualisiert?", "Übertrage den neuesten Commit zu GitHub, damit der Hosting-Anbieter die Webseite erneut veröffentlichen kann."]
]};

const fieldDefinitions = [
  { id: "business", promptKey: "BUSINESS_NAME", label: { en: "Business Name", de: "Unternehmensname" }, value: "Hana Nagelstudio – Hana Beauty", section: "basic" },
  { id: "type", promptKey: "BUSINESS_TYPE", label: { en: "Business Type", de: "Unternehmenstyp" }, value: "Beauty Salon", section: "basic", options: ["Restaurant", "Gym", "Dental Clinic", "Beauty Salon", "Real Estate", "Car Rental", "Law Firm", "Cleaning Service", "Spa", "General Local Business"] },
  { id: "city", promptKey: "CITY_AREA", label: { en: "City / Area", de: "Stadt / Region" }, value: "Erfurt, Magdeburger Allee 112", section: "basic" },
  { id: "phone", promptKey: "PHONE_NUMBER", label: { en: "Phone Number", de: "Telefonnummer" }, value: "+49 1522 3436658", section: "basic" },
  { id: "maps", promptKey: "GOOGLE_MAPS_LINK", label: { en: "Google Maps Link", de: "Google-Maps-Link" }, value: "https://www.google.com/maps/search/?api=1&query=Hana+Nagelstudio+Hana+Beauty+Magdeburger+Allee+112+99086+Erfurt", section: "basic" },
  { id: "style", promptKey: "BRAND_STYLE", label: { en: "Brand Style", de: "Markenstil" }, value: "Luxury", section: "style", options: ["Modern SaaS", "Luxury", "Minimal", "Bold", "Corporate"] },
  { id: "color", promptKey: "PRIMARY_COLOR", label: { en: "Primary Color", de: "Primärfarbe" }, value: "Gold", section: "style", options: ["Blue", "Purple", "Black", "Green", "Orange", "Red", "Gold"] },
  { id: "cta", promptKey: "MAIN_CTA", label: { en: "Main CTA", de: "Hauptaktion" }, value: "Call Now", section: "style", options: ["Call Now", "Book Now", "Get Quote", "Message on WhatsApp", "Visit Us"] },
  { id: "tagline", promptKey: "BUSINESS_TAGLINE", label: { en: "Tagline", de: "Leitsatz" }, value: "", section: "advanced" },
  { id: "address", promptKey: "FULL_ADDRESS", label: { en: "Full Address", de: "Vollständige Adresse" }, value: "Magdeburger Allee 112, 99086 Erfurt", section: "advanced" },
  { id: "whatsapp", promptKey: "WHATSAPP_NUMBER", label: { en: "WhatsApp Number", de: "WhatsApp-Nummer" }, value: "", section: "advanced" },
  { id: "email", promptKey: "EMAIL_ADDRESS", label: { en: "Email Address", de: "E-Mail-Adresse" }, value: "", section: "advanced" },
  { id: "services", promptKey: "MAIN_SERVICES", label: { en: "Main Services", de: "Wichtigste Leistungen" }, value: "", section: "advanced", control: "textarea" },
  { id: "secondaryServices", promptKey: "SECONDARY_SERVICES", label: { en: "Secondary Services", de: "Weitere Leistungen" }, value: "", section: "advanced", control: "textarea" },
  { id: "hours", promptKey: "OPENING_HOURS", label: { en: "Opening Hours", de: "Öffnungszeiten" }, value: "", section: "advanced", control: "textarea" },
  { id: "description", promptKey: "BUSINESS_DESCRIPTION", label: { en: "Business Description", de: "Unternehmensbeschreibung" }, value: "", section: "advanced", control: "textarea" },
  { id: "sellingPoints", promptKey: "UNIQUE_SELLING_POINTS", label: { en: "Unique Selling Points", de: "Besondere Stärken" }, value: "", section: "advanced", control: "textarea" },
  { id: "testimonials", promptKey: "TESTIMONIALS", label: { en: "Testimonials / Reviews", de: "Echte Bewertungen" }, value: "", section: "advanced", control: "textarea" },
  { id: "secondaryCta", promptKey: "SECONDARY_CTA", label: { en: "Secondary CTA", de: "Zweite Aktion" }, value: "View Services", section: "advanced", options: ["View Services", "Learn More", "Contact Us"] },
  { id: "secondaryColor", promptKey: "SECONDARY_COLOR", label: { en: "Secondary Color", de: "Sekundärfarbe" }, value: "Beige", section: "advanced", options: ["Light Gray", "White", "Dark Gray", "Beige"] }
];

const completed = new Set();
const expanded = new Set();
const byId = (id) => document.getElementById(id);
const escapeHtml = (value) => value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
let language = localStorage.getItem("profitStudioLanguage") === "de" ? "de" : "en";
let fieldValues = Object.fromEntries(fieldDefinitions.map(({ id, value }) => [id, value]));
let advancedFieldsOpen = false;
const ui = {
  en: {
    heroTitle: "Build Local Business Websites<br />with Claude Code",
    heroDescription: "Create client-ready local business websites with Claude Code using real business details, customizable prompts, and a professional workflow.",
    roadmapHeading: "Roadmap &amp; Resources",
    troubleLabel: "Having trouble?",
    faqHeading: "Frequently asked questions",
    recommendedLabel: "RECOMMENDED NEXT STEP",
    recommendPill: "♧ &nbsp; Deploy your Claude Code project",
    recommendTitle: "Deploy Your Claude Code Project to Hostinger — The Safe Way",
    recommendDescription: "Turn your finished draft into a website your clients can visit.",
    promptDescription: "Customize the fields and copy the finished prompt.",
    copyPrompt: "Copy customized prompt",
    copied: "Prompt copied to clipboard",
    basicDetails: "Business details",
    styleDetails: "Visual direction",
    advancedOptions: "Add advanced details",
    hideAdvancedOptions: "Hide advanced details",
    advancedHint: "Optional: add more verified details for a stronger result.",
    overallProgress: "Overall progress",
    tasksCompleted: (done, total) => `${done} of ${total} tasks completed`,
    mark: "Mark",
    complete: "complete"
  },
  de: {
    heroTitle: "Lokale Firmenwebseiten<br />mit Claude Code erstellen",
    heroDescription: "Erstelle professionelle Webseiten für lokale Unternehmen mit Claude Code, echten Geschäftsdaten, anpassbaren Prompts und einem klaren Ablauf.",
    roadmapHeading: "Fahrplan &amp; Ressourcen",
    troubleLabel: "Brauchst du Hilfe?",
    faqHeading: "Häufig gestellte Fragen",
    recommendedLabel: "EMPFOHLENER NÄCHSTER SCHRITT",
    recommendPill: "♧ &nbsp; Claude-Code-Projekt veröffentlichen",
    recommendTitle: "Claude-Code-Projekt sicher auf Hostinger veröffentlichen",
    recommendDescription: "Mach aus deinem fertigen Entwurf eine Webseite, die Kunden direkt besuchen können.",
    promptDescription: "Passe die Felder an und kopiere den fertigen Prompt.",
    copyPrompt: "Angepassten Prompt kopieren",
    copied: "Prompt wurde kopiert",
    basicDetails: "Unternehmensdaten",
    styleDetails: "Visuelle Richtung",
    advancedOptions: "Erweiterte Angaben ergänzen",
    hideAdvancedOptions: "Erweiterte Angaben ausblenden",
    advancedHint: "Optional: Ergänze weitere geprüfte Angaben für ein stärkeres Ergebnis.",
    overallProgress: "Gesamtfortschritt",
    tasksCompleted: (done, total) => `${done} von ${total} Aufgaben erledigt`,
    mark: "Als erledigt markieren:",
    complete: ""
  }
};

function roadmap() { return roadmapByLanguage[language]; }
function faqs() { return faqsByLanguage[language]; }
function t(key) { return ui[language][key]; }
function captureFieldValues() {
  document.querySelectorAll("[data-field]").forEach((field) => { fieldValues[field.id] = field.value; });
}

function promptText() {
  captureFieldValues();
  const promptValues = Object.fromEntries(fieldDefinitions.map(({ id, promptKey }) => [
    promptKey,
    fieldValues[id]?.trim() || "Not provided — omit this element cleanly."
  ]));
  return byId("masterPromptTemplate").textContent.trim().replace(/\{\{([A-Z_]+)\}\}/g, (_, key) => promptValues[key] || "Not provided — omit this element cleanly.");
}

function renderField({ id, label, options, control }) {
  const input = options
    ? `<select id="${id}" data-field>${options.map((option) => `<option ${option === fieldValues[id] ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select>`
    : control === "textarea"
      ? `<textarea id="${id}" data-field rows="3">${escapeHtml(fieldValues[id])}</textarea>`
      : `<input id="${id}" data-field value="${escapeHtml(fieldValues[id])}" />`;
  return `<label>${label[language]}${input}</label>`;
}

function renderFields(section) {
  return fieldDefinitions.filter((field) => field.section === section).map(renderField).join("");
}

function promptCard() {
  return `<div class="clone-prompt">
    <div class="clone-prompt-title"><span>⌘</span><div><strong>Claude Code Master Prompt</strong><small>${t("promptDescription")}</small></div></div>
    <div class="clone-field-group">
      <strong class="clone-field-label">${t("basicDetails")}</strong>
      <div class="clone-fields">${renderFields("basic")}</div>
    </div>
    <div class="clone-field-group">
      <strong class="clone-field-label">${t("styleDetails")}</strong>
      <div class="clone-fields">${renderFields("style")}</div>
    </div>
    <button class="clone-advanced-toggle" id="advancedToggle" type="button" aria-expanded="${advancedFieldsOpen}">
      <span>${advancedFieldsOpen ? "−" : "+"}</span>
      <strong>${advancedFieldsOpen ? t("hideAdvancedOptions") : t("advancedOptions")}</strong>
      <small>${t("advancedHint")}</small>
    </button>
    <div class="clone-advanced-fields ${advancedFieldsOpen ? "open" : ""}" id="advancedFields">
      <div class="clone-fields">${renderFields("advanced")}</div>
    </div>
    <pre id="promptOutput"></pre>
    <button class="clone-copy" id="copyPrompt">${t("copyPrompt")}</button>
  </div>`;
}

function renderRoadmap() {
  captureFieldValues();
  byId("roadmapList").innerHTML = roadmap().map((group, groupIndex) => {
    const open = expanded.has(groupIndex);
    const done = group.steps.filter((_, stepIndex) => completed.has(`${groupIndex}-${stepIndex}`)).length;
    return `<article class="resource-card accent-${group.accent} ${open ? "open" : ""}">
      <button class="resource-head" data-group="${groupIndex}">
        <span class="resource-number">${group.infoOnly ? "▧" : groupIndex + 1}</span>
        <strong>${group.title}</strong>
        ${group.infoOnly ? "" : `<span class="resource-progress">${done}/${group.steps.length} <i class="${done === group.steps.length ? "complete" : ""}"></i></span>`}
        <span class="resource-chevron">⌄</span>
      </button>
      <div class="resource-body">
        ${group.steps.map(([title, description, type], stepIndex) => `
          <div class="clone-step ${group.infoOnly ? "info-step" : ""} ${completed.has(`${groupIndex}-${stepIndex}`) ? "done" : ""}">
            ${group.infoOnly ? "" : `<button class="clone-check" data-step="${groupIndex}-${stepIndex}" aria-label="${t("mark")} ${title} ${t("complete")}">✓</button>`}
            <div><h4>${title}</h4><p>${description}</p>${type === "prompt" ? promptCard() : ""}</div>
          </div>`).join("")}
      </div>
    </article>`;
  }).join("");
  updateOverallProgress();
  bindRoadmap();
}

function updateOverallProgress() {
  const total = roadmap().reduce((sum, group) => sum + (group.infoOnly ? 0 : group.steps.length), 0);
  const done = [...completed].filter((key) => !roadmap()[Number(key.split("-")[0])]?.infoOnly).length;
  const percent = total ? Math.round((done / total) * 100) : 0;
  byId("overallProgressLabel").textContent = t("overallProgress");
  byId("overallProgressValue").textContent = `${percent}%`;
  byId("overallProgressTasks").textContent = t("tasksCompleted")(done, total);
  byId("overallProgressBar").style.width = `${percent}%`;
  document.querySelector(".overall-progress-track").setAttribute("aria-valuenow", percent);
}

function bindRoadmap() {
  document.querySelectorAll(".resource-head").forEach((button) => button.addEventListener("click", () => {
    const index = Number(button.dataset.group);
    expanded.has(index) ? expanded.delete(index) : expanded.add(index);
    renderRoadmap();
  }));
  document.querySelectorAll(".clone-check").forEach((button) => button.addEventListener("click", () => {
    const key = button.dataset.step;
    completed.has(key) ? completed.delete(key) : completed.add(key);
    renderRoadmap();
  }));
  document.querySelectorAll("[data-field]").forEach((field) => {
    field.addEventListener("input", updatePrompt);
    field.addEventListener("change", updatePrompt);
  });
  byId("advancedToggle")?.addEventListener("click", () => {
    advancedFieldsOpen = !advancedFieldsOpen;
    renderRoadmap();
  });
  byId("copyPrompt")?.addEventListener("click", async () => {
    await navigator.clipboard.writeText(promptText());
    showToast(t("copied"));
  });
  updatePrompt();
}

function updatePrompt() {
  if (byId("promptOutput")) byId("promptOutput").textContent = promptText();
}

function renderFaqs() {
  byId("faqList").innerHTML = faqs().map(([question, answer]) => `<details><summary>${question}</summary><p>${answer}</p></details>`).join("");
}

function renderStaticText() {
  byId("heroTitle").innerHTML = t("heroTitle");
  byId("heroDescription").textContent = t("heroDescription");
  byId("roadmapHeading").innerHTML = t("roadmapHeading");
  byId("troubleLabel").textContent = t("troubleLabel");
  byId("faqHeading").textContent = t("faqHeading");
  byId("recommendedLabel").textContent = t("recommendedLabel");
  byId("recommendPill").innerHTML = t("recommendPill");
  byId("recommendTitle").textContent = t("recommendTitle");
  byId("recommendDescription").textContent = t("recommendDescription");
  document.documentElement.lang = language;
}

function setLanguage(nextLanguage) {
  captureFieldValues();
  language = nextLanguage;
  localStorage.setItem("profitStudioLanguage", language);
  byId("languageSelect").value = language;
  renderStaticText();
  renderRoadmap();
  renderFaqs();
}

function showToast(message) {
  byId("toast").textContent = message;
  byId("toast").classList.add("show");
  setTimeout(() => byId("toast").classList.remove("show"), 1700);
}

byId("themeToggle").addEventListener("click", () => {
  document.documentElement.dataset.theme = document.documentElement.dataset.theme === "dark" ? "" : "dark";
});
byId("troubleToggle").addEventListener("click", () => byId("troublePanel").classList.toggle("open"));
byId("languageSelect").addEventListener("change", (event) => setLanguage(event.target.value));

byId("languageSelect").value = language;
renderStaticText();
renderRoadmap();
renderFaqs();
