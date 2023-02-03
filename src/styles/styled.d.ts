import "styled-components";

interface Color {
  lightGray: string;
  primary: string;
  primaryDark: string;
  white: string;
}

interface Shadow {
  prepo: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    color: Color;
    shadow: Shadow;
  }
}
