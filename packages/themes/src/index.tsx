import _makeStyles from "@mui/styles/makeStyles";
import useTheme from "@mui/styles/useTheme";
import createStyles from "@mui/styles/createStyles";

const baseTheme = createStyles({
  palette: {},
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

const BACKGROUND_COLOR_0 = "#18181b";
const BACKGROUND_COLOR_1 = "#27272a";
const FONT_COLOR = "#FFFFFF";
const FONT_COLOR_1 = "#71717A";
const FONT_COLOR_2 = "#D4D4D8";
const BRAND_COLOR = "#14B8A6";
const BUTTON_FONT_COLOR = FONT_COLOR;
const BORDER_COLOR = "#393C43";

export const darkTheme = {
  ...baseTheme,
  custom: {
    colors: {
      background: BACKGROUND_COLOR_0,
      nav: BACKGROUND_COLOR_1,
      fontColor: FONT_COLOR,
      border: BORDER_COLOR,
      activeNavButton: BRAND_COLOR,
      hamburger: FONT_COLOR_1,
      scrollbarTrack: BACKGROUND_COLOR_0,
      scrollbarThumb: "rgb(153 164 180)",
      tabIconBackground: FONT_COLOR_1,
      tabIconSelected: BRAND_COLOR,
      secondary: FONT_COLOR_1,
      positive: "#35A63A",
      negative: "#E95050",
      onboardButton: BRAND_COLOR,
      onboardButtonDisabled: FONT_COLOR_1,
      buttonFontColor: BUTTON_FONT_COLOR,
      sendGradient: `linear-gradient(180deg, ${BACKGROUND_COLOR_0} 0%, rgba(27, 29, 35, 0) 100%)`,
      swapGradient: `linear-gradient(180deg, ${BACKGROUND_COLOR_1} 0%, rgba(41, 44, 51, 0) 100%)`,
      interactiveIconsActive: BRAND_COLOR,
      interactiveIconsHover: "#67758B",
      drawerGradient: `linear-gradient(180deg, ${BACKGROUND_COLOR_1} 0%, rgba(41, 44, 51, 0) 100%)`,
      alpha: FONT_COLOR_2,
    },
  },
};

export const lightTheme = {
  ...baseTheme,
  custom: {
    colors: {
      ...darkTheme.custom.colors,
      background: "#ECEFF3",
      nav: "#ffffff",
      fontColor: "#43546D",
      border: "#DBDADB",
      activeNavButton: "#00A2C7",
      hamburger: "#99A4B4",
      scrollbarTrack: "#ECEFF3",
      scrollbarThumb: "rgb(153 164 180)",
      tabIconBackground: "#99A4B4",
      tabIconSelected: "#1196B5",
      secondary: "#67758B",
      positive: "#19A51E",
      negative: "#E31B1B",
      onboardButton: "#07758E",
      sendGradient:
        "linear-gradient(180deg, #1B1D23 0%, rgba(27, 29, 35, 0) 100%)", // todo
      interactiveIconsActive: "#1196B5",
    },
  },
};

type CustomTheme = typeof lightTheme & typeof darkTheme;

export const styles = _makeStyles<CustomTheme>;

export const useCustomTheme = useTheme<CustomTheme>;