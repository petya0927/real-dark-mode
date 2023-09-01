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
   * The falloff from the outer circle to the inner circle
   * @default 0.5
   * */
   falloff?: number;
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
    options?.size * options?.falloff || 50
  }px, ${options?.color || "#000000"} ${options?.size || 100}px)`;
}

function removeRealDarkMode() {
  document.body.classList.remove("real-dark-mode-enabled");
  document.body.removeChild(
    document.querySelector(".real-dark-mode-spotlight") as HTMLDivElement
  );
  document.removeEventListener("mousemove", mouseMove);
}

function createSpotlightElement(options?: RealDarkModeOptions) {
  const spotlight = document.createElement("div") as HTMLDivElement | null;

  if (!spotlight) return;

  spotlight.classList.add("real-dark-mode-spotlight");
  spotlight.style.position = "absolute";
  spotlight.style.top = "0";
  spotlight.style.left = "0";
  spotlight.style.width = "100%";
  spotlight.style.height = "100vh";
  spotlight.style.zIndex = "9999";
  spotlight.style.pointerEvents = "none";
  spotlight.style.opacity = `${options?.opacity || 0.95}`;
  return spotlight;
}

const realDarkMode = (options?: RealDarkModeOptions) => {
  if (!document.body) return;

  if (document.body.classList.contains("real-dark-mode-enabled")) {
    removeRealDarkMode();
    return;
  }

  const spotlightElement = createSpotlightElement(options);

  if (!spotlightElement) return;

  document.body.appendChild(spotlightElement);
  document.body.classList.add("real-dark-mode-enabled");

  document.addEventListener("mousemove", (event) => mouseMove(event, options));
  document.addEventListener("scroll", () =>
    document.querySelector(".real-dark-mode-spotlight").remove()
  );
};

export default realDarkMode;
export { realDarkMode, RealDarkModeOptions };
