import { createMuiTheme } from '@material-ui/core';
import { TypographyStyle } from '@material-ui/core/styles/createTypography';

import { Color } from '@style/Color';

export enum ThemeColor {
  Default = 'default',
  Inherit = 'inherit',
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum MuiButtonVariant {
  Text = 'text',
  Flat = 'flat',
  Outlined = 'outlined',
  Contained = 'contained',
  Raised = 'raised',
  Fab = 'fab',
}

interface ThemeText {
  default: TypographyStyle;
  disabled: TypographyStyle;
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface ThemeOptions {
    text: ThemeText;
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface TypeBackground {
    dark: string;
    pale: string;
    paler: string;
    dim: string;
    accent: string;
    strong: string;
    smoke: string;
    stone: string;
    white: string;
    grayLight: string;
    black: string;
    orangeSmoke: string;
  }
}

export const Theme = createMuiTheme({
  typography: {
    fontFamily: ['Overpass', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: Color.GREEN_MAIN,
      light: Color.GREEN_LIGHT,
      contrastText: Color.WHITE,
    },
    secondary: {
      main: Color.ORANGE_MAIN,
      dark: Color.ORANGE_DARK,
      light: Color.ORANGE_LIGHT,
      contrastText: Color.WHITE,
    },
    background: {
      paper: Color.WHITE,
      default: Color.GRAY_1,
      pale: Color.GRAY_2,
      paler: Color.GRAY_13,
      dim: Color.ORANGE_LIGHT,
      accent: Color.ORANGE_MAIN,
      dark: Color.GRAY_DARK,
      strong: Color.GRAY_17,
      stone: Color.GRAY_STONE,
      grayLight: Color.GRAY_LIGHT,
      smoke: Color.GRAY_SMOKE,
      white: Color.WHITE,
      black: Color.BLACK,
      orangeSmoke: Color.ORANGE_SMOKE,
    },
  },
  text: {
    default: {
      fontSize: '14px',
      fontWeight: 'normal',
      lineHeight: '19px',
      color: Color.GRAY_6,
    },
    disabled: {
      fontSize: '14px',
      fontWeight: 'normal',
      lineHeight: '19px',
      color: Color.GRAY_STONE,
    },
  },
});
