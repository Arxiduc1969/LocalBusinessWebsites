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
  ["business", "Business Name", "Hana Nagelstudio – Hana Beauty"],
  ["type", "Business Type", "Beauty Salon", ["Restaurant", "Gym", "Dental Clinic", "Beauty Salon", "Real Estate", "Car Rental", "Law Firm", "Cleaning Service", "Spa", "General Local Business"]],
  ["city", "City / Area", "Erfurt, Magdeburger Allee 112"],
  ["phone", "Phone Number", "+49 1522 3436658"],
  ["maps", "Google Maps Link", "https://www.google.com/maps/search/?api=1&query=Hana+Nagelstudio+Hana+Beauty+Magdeburger+Allee+112+99086+Erfurt"],
  ["style", "Brand Style", "Luxury", ["Modern SaaS", "Luxury", "Minimal", "Bold", "Corporate"]],
  ["color", "Primary Color", "Gold", ["Blue", "Purple", "Black", "Green", "Orange", "Red", "Gold"]],
  ["cta", "Main CTA", "Call Now", ["Call Now", "Book Now", "Get Quote", "Message on WhatsApp", "Visit Us"]]
];

const completed = new Set();
const expanded = new Set();
const byId = (id) => document.getElementById(id);
const escapeHtml = (value) => value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
let language = localStorage.getItem("profitStudioLanguage") === "de" ? "de" : "en";
let fieldValues = Object.fromEntries(fieldDefinitions.map(([id, , value]) => [id, value]));
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
  const value = (id) => byId(id)?.value || fieldValues[id] || "";
  return `You are a senior creative director and React/Vite frontend architect.

Build ONE complete, genuinely premium one-page website for:
- Business: ${value("business")}
- Type: ${value("type")}
- Location: ${value("city")}
- Phone: ${value("phone")}
- Google Maps: ${value("maps")}
- Brand direction: ${value("style")}
- Primary color: ${value("color")}
- Main CTA: ${value("cta")}

Treat this as design work, not section assembly. A few beautifully crafted sections beat ten mediocre ones. Make the website responsive, accessible, client-ready, and connect every button to a real action.`;
}

function promptCard() {
  return `<div class="clone-prompt">
    <div class="clone-prompt-title"><span>⌘</span><div><strong>Claude Code Master Prompt</strong><small>${t("promptDescription")}</small></div></div>
    <div class="clone-fields">${fieldDefinitions.map(([id, label, , options]) => `<label>${label}${options
      ? `<select id="${id}" data-field>${options.map((option) => `<option ${option === fieldValues[id] ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select>`
      : `<input id="${id}" data-field value="${escapeHtml(fieldValues[id])}" />`}</label>`).join("")}</div>
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
  bindRoadmap();
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
