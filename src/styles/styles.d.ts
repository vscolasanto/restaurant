import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      text: string;
      light: string;
      white: string;
      black: string;
      gray: string;
      detail: string;
      success: string;
      info: string;
      warning: string;
      danger: string;
      background: string;
    };
  }
}
