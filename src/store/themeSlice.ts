const initialState: {
  theme: "day" | "night";
} = {
  theme: "day",
};
const nightTheme = "NightTheme";
const dayTheme = "DayTheme";
export const themeReducer = (
  state = initialState,
  action: { type: string; payload?: unknown }
) => {
  switch (action.type) {
    case nightTheme:
      return { ...state, theme: "night" };
    case dayTheme:
      return { ...state, theme: "day" };
    default:
      return state;
  }
};
export const toggleTheme = (currentTheme: "day" | "night") => {
  return {
    type: currentTheme === "day" ? nightTheme : dayTheme,
  };
};
