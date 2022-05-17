import { AppSettings } from './types';

export const Settings: AppSettings = {
  AppName: 'MySkills',
  CompanyName: 'Fake MySkills',
  Description: 'Quality matching',
  Creator: 'Luiz Felipe Siqueira Felizatti',
  Developers: [{ name: 'Luiz Felipe Siqueira Felizatti' }],
  Application: {
    IsBrowser: false,
    IsMadeForLearning: true,
  },
  Fetch: {
    ApiURL: '',
    ProductionURL: '',
    DevelopmentURL: '',
  },
  Social: {},
  ContactINFO: {
    Website: 'luizfelipe.vercel.app',
    ContactEMAIL: 'felipefelizatti215@gmail.com',
    ContactPHONE: '5519989522121',
  },
  ApiCredentials: {},
};
