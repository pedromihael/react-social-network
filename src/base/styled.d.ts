import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      iceWhite: string;
      white: string;
      darkBlue: string;
      black: string;
      darkGrey: string;
      lightBlue: string;
    };
  }
}
