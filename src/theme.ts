import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        primary: string;
        secondary: string;
        background: string;
        surface: string;
        toggleBTN: string;
        text: string;
        textSecondary: string;
        border: string;
        shadow: string;
        accent: string;
        fontFamily: string;
        fontSize: {
            xs: string;
            sm: string;
            base: string;
            lg: string;
            xl: string;
            "2xl": string;
            "3xl": string;
            "4xl": string;
            "5xl": string;
            "6xl": string;
        };
        fontWeight: {
            light: number;
            normal: number;
            medium: number;
            semibold: number;
            bold: number;
            extrabold: number;
            black: number;
        };
    }
}

export const theme = {
    light: {
        primary: "#4F46E5",
        secondary: "#818CF8",
        background: "#ffffff",
        surface: "#DEE6EE",
        toggleBTN: "#0F172A",
        text: "#1E293B",
        textSecondary: "#64748B",
        border: "#E2E8F0",
        shadow: "rgba(0, 0, 0, 0.05)",
        accent: "#3B82F6",

        fontFamily: "'Roboto', sans-serif",
        fontSize: {
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "4rem",
        },
        fontWeight: {
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
        },
    },
    dark: {
        primary: "#818CF8",
        secondary: "#60A5FA",
        background: "#121e38",
        surface: "#1E293B",
        toggleBTN: "#ffffff",
        text: "#F8FAFC", 
        textSecondary: "#94A3B8",
        border: "#334155",
        shadow: "rgba(0, 0, 0, 0.3)",
        accent: "#3B82F6",

        fontFamily: "'Roboto', sans-serif",
        fontSize: {
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "4rem",
        },
        fontWeight: {
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
        },
    },
};
