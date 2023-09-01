interface RealDarkModeOptions {
  /**
   * The color of the spotlight
   * @default "#000000"
   * */
  color?: string;
  /**
   * The size of the spotlight in pixels
   * @default 100
   * */
  size?: number;
  /**
   * The opacity of the spotlight
   * @default 0.95
   * */
  opacity?: number;
}

function mouseMove(event: MouseEvent, options?: RealDarkModeOptions) {
  const x = event.clientX + window.scrollX;
  const y = event.clientY + window.scrollY;

  const spotlight = document.querySelector(
    ".real-dark-mode-spotlight"
  ) as HTMLDivElement | null;

  if (!spotlight) return;

  spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent ${
    options?.size / 2 || 50
  }px, ${options?.color || "#000000"} ${options?.size || 100}px)`;
  spotlight.style.opacity = `${options?.opacity || 0.95}`;
}

function removeRealDarkMode() {
  document.body.classList.remove("real-dark-mode-enabled");
  document.body.removeChild(document.querySelector("div") as HTMLDivElement);
  document.removeEventListener("mousemove", mouseMove);
}

function createSpotlightElement() {
  const spotlight = document.createElement("div") as HTMLDivElement | null;

  if (!spotlight) return;

  spotlight.classList.add("real-dark-mode-spotlight");
  spotlight.style.position = "absolute";
  spotlight.style.top = "0";
  spotlight.style.left = "0";
  spotlight.style.width = "100vw";
  spotlight.style.height = "100vh";
  spotlight.style.zIndex = "9999";
  return spotlight;
}

const realDarkMode = (options?: RealDarkModeOptions) => {
  if (!document.body) return;

  if (document.body.classList.contains("real-dark-mode-enabled")) {
    removeRealDarkMode();
    return;
  }

  const spotlightElement = createSpotlightElement();

  if (!spotlightElement) return;

  document.body.appendChild(spotlightElement);
  document.body.classList.add("real-dark-mode-enabled");

  document.addEventListener("mousemove", (event) => mouseMove(event, options));
};

export default realDarkMode;
export { realDarkMode, RealDarkModeOptions };
