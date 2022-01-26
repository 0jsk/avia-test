import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      text: {
        primary: string;
        secondary: string;
        inverse: string;
      };
    };
    fontSize: {
      primary: string;
      large: string;
    };
    spacePx: number;
  }
}
