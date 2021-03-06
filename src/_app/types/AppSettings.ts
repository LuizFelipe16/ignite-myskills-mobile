type Developer = {
  name: string;
  office?: string;
};

export type AppSettings = {
  AppName: string;
  CompanyName: string;
  Description: string;
  Creator: string;
  Developers: Developer[];
  Application: {
    IsBrowser: boolean;
    IsMadeForLearning?: boolean;
  };
  Fetch: {
    ApiURL: string;
    ProductionURL?: string;
    DevelopmentURL?: string;
  };
  Social: {
    FacebookURL?: string;
    LinkedinURL?: string;
    InstagramURL?: string;
  };
  ContactINFO: {
    Website: string;
    ContactEMAIL: string;
    ContactPHONE: string;
  };
  ApiCredentials: {
    FaunaKey?: string;
  };
};
