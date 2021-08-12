export type menuItem = {
  title: string;
  menuSecondLevel: {
    list: Array<{
      url: string;
      title: string;
    }>;
    advertising: Array<{
      top: string;
      image: string;
      bottom: string;
      url: string;
    }>;
  };
};
