export const darkModeChange = (mode, set) => {
  const root = document.documentElement;

  if (mode === "light-mode") {
    root.style.setProperty("--background-color", "hsl(0, 0%, 98%)");
    root.style.setProperty("--text-color", "hsl(200, 15%, 8%)");
    root.style.setProperty("--elements-color", "hsl(0, 0%, 100%)");
    root.style.setProperty("--box-shadow", "2px 2px 8px #999999");
    set("dark-mode");
  } else {
    root.style.setProperty("--background-color", "hsl(207, 26%, 17%)");
    root.style.setProperty("--text-color", "hsl(0, 0%, 100%)");
    root.style.setProperty("--elements-color", "hsl(209, 23%, 22%)");
    root.style.setProperty("--box-shadow", "2px 2px 8px #000");
    set("light-mode");
  }
};
