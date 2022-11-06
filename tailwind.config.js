const tailwindColor = (cssVar, params) => {
  if (params && params.opacityValue !== undefined) {
    return `rgba(var(--${cssVar}), ${params.opacityValue})`;
  }
  if (params && params.opacityVariable !== undefined) {
    return `rgba(var(--${cssVar}), var(${params.opacityVariable}, 1))`;
  }
  return `rgb(var(--${cssVar}))`;
};

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "sm": "540px",
      "md": "720px",
      "lg": "960px",
      "xl": "1140px",
      "2xl": "1320px",
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      boxShadow: {
        "input": "0px 7px 20px rgba(0, 0, 0, 0.03)",
        "pricing": "0px 39px 23px -27px rgba(0, 0, 0, 0.04)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        "testimonial": "0px 60px 120px -20px #EBEFFD",
      },
    },
    fontFamily: {
      sans: ["Abel"],
      serif: ["Inter"],
      mono: ["Abel"],
      display: ["Abel"],
      body: ["Abel"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        "aphx-light": {
          "primary": "#0051ff",
          "secondary": "#6a00ff",
          "accent": "#a7c0ff",
          "neutral": "#2f2e39",
          "base-100": "#ffffff",
          "info": "#6A9AEC",
          "success": "#00794b",
          "warning": "#F8D268",
          "error": "#c20020",
        },

        "aphx-dark": {
          "primary": "#0051ff",
          "secondary": "#6a00ff",
          "accent": "#002e4f",
          "neutral": "#2f2e39",
          "base-100": "#0f0a22",
          "info": "#003083",
          "success": "#00794b",
          "warning": "#F8D268",
          "error": "#c20020",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "aphx-dark",
  },
};
