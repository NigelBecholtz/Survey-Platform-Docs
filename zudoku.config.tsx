import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  // Required for GitHub Pages: site is at https://<user>.github.io/Survey-Platform-Docs/
  basePath: "/Survey-Platform-Docs",
  site: {
    name: "Survey-Docs",
    title: "Survey-Docs",
    logo: {
      src: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
      alt: "Survey-Docs",
      width: "140px",
    },
  },
  navigation: [
    {
      type: "category",
      label: "Documentation",
      items: [
        {
          type: "category",
          label: "Getting Started",
          icon: "sparkles",
          items: [
            "/introduction",
            "/getting-started/installation",
            "/getting-started/configuration",
          ],
        },
        {
          type: "category",
          label: "Architecture",
          icon: "layout",
          items: [
            "/architecture/overview",
          ],
        },
        {
          type: "category",
          label: "Features",
          icon: "layers",
          items: [
            "/features/surveys",
            "/features/audiences",
            "/features/responses",
            "/features/email-notifications",
            "/features/translations",
            "/features/analytics",
          ],
        },
        {
          type: "category",
          label: "API",
          icon: "code",
          items: [
            "/api/overview",
            "/api/authentication",
            "/api/public-endpoints",
            "/api/protected-endpoints",
          ],
        },
        {
          type: "category",
          label: "Useful Links",
          collapsible: false,
          icon: "link",
          items: [
            {
              type: "link",
              icon: "book",
              label: "Zudoku Docs",
              to: "https://zudoku.dev/docs/",
            },
          ],
        },
      ],
    },
    {
      type: "link",
      to: "/api",
      label: "API Reference",
    },
  ],
  redirects: [{ from: "/", to: "/introduction" }],
  apis: [
    {
      type: "file",
      input: "./apis/openapi.yaml",
      path: "/api",
    },
  ],
};

export default config;
