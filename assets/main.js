document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "✕ CLOSE" : "☰ MENU";
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "☰ MENU";
      });
    });
  }

  const year = document.querySelectorAll(".current-year");
  year.forEach(el => el.textContent = new Date().getFullYear());

  const form = document.querySelector("#estimate-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const businessEmail = "YOUR-EMAIL@example.com";
      if (businessEmail === "YOUR-EMAIL@example.com") {
        alert("Please configure the business email in assets/main.js or connect a form service before publishing.");
        return;
      }
      const data = new FormData(form);
      const subject = encodeURIComponent("Handy KRLO NYC — Estimate Request");
      const body = encodeURIComponent(
        "Name: " + data.get("name") + "\n" +
        "Email: " + data.get("email") + "\n" +
        "Phone: " + data.get("phone") + "\n" +
        "Service: " + data.get("service") + "\n" +
        "Location: " + data.get("location") + "\n\n" +
        "Project details:\n" + data.get("message")
      );
      window.location.href = "mailto:" + businessEmail + "?subject=" + subject + "&body=" + body;
    });
  }
});
