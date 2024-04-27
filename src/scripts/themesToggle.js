const themeSwitcher = document.getElementById("theme-switcher");
const sunSvg = document.getElementById("sunSvg");
const moonSvg = document.getElementById("moonSvg");

const setTheme = (theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  sunSvg.style.display = theme === "dark" ? "block" : "none";
  moonSvg.style.display = theme === "dark" ? "none" : "block";
  localStorage.theme = theme;
};

const isDark = () => localStorage.theme === "dark";

if (
  isDark() ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  setTheme("dark");
} else {
  setTheme("light");
}

themeSwitcher.addEventListener("click", () => {
  setTheme(isDark() ? "light" : "dark");
});
