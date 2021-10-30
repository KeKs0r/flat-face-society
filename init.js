import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "p3VheAz8CZBjaq5sfh1ZSH",
      token:
        "U7fc5MdxqLAjRuLRXwDby7khdIrsYBB7qPei0WafAFydhZfHYBtqkTx3HmwQZdbasvEkVqzT4ywdp6jbSzOcg",
    },
  ],
});

export const PLASMIC_PREVIEW = initPlasmicLoader({
  projects: [
    {
      id: "p3VheAz8CZBjaq5sfh1ZSH",
      token:
        "U7fc5MdxqLAjRuLRXwDby7khdIrsYBB7qPei0WafAFydhZfHYBtqkTx3HmwQZdbasvEkVqzT4ywdp6jbSzOcg",
    },
  ],
  preview: true,
});
