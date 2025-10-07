const config = {
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
        extend: {
          colors: {
            border: "#EDDBC7", // var(--theme-border)
            input: "#EDDBC7", // var(--theme-input)
            ring: "#A7727D", // var(--theme-ring)
            background: "#F9F5E7", // var(--theme-background)
            foreground: "#A7727D", // var(--theme-foreground)
            primary: {
              DEFAULT: "#A7727D", // var(--theme-primary)
              foreground: "#F9F5E7", // var(--theme-primary-foreground)
            },
            secondary: {
              DEFAULT: "#EDDBC7", // var(--theme-secondary)
              foreground: "#A7727D", // var(--theme-secondary-foreground)
            },
            destructive: {
              DEFAULT: "#dc3545", // var(--theme-destructive)
              foreground: "#ffffff", // var(--theme-destructive-foreground)
            },
            muted: {
              DEFAULT: "#EDDBC7", // var(--theme-muted)
              foreground: "#A7727D", // var(--theme-muted-foreground)
            },
            accent: {
              DEFAULT: "#A7727D", // var(--theme-accent)
              foreground: "#F9F5E7", // var(--theme-accent-foreground)
            },
            popover: {
              DEFAULT: "#F8EAD8", // var(--theme-popover)
              foreground: "#A7727D", // var(--theme-popover-foreground)
            },
            card: {
              DEFAULT: "#F8EAD8", // var(--theme-card)
              foreground: "#A7727D", // var(--theme-card-foreground)
            },
          },
        },
      },
    },
  },
};

export default config;