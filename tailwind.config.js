/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter_400Regular"],
        interMedium: ["Inter_500Medium"],
        interSemi: ["Inter_600SemiBold"],
        dm: ["DMSans_400Regular"],
        dmMedium: ["DMSans_500Medium"],
        dmBold: ["DMSans_700Bold"],
      },
    },
  },
  plugins: [],
};
