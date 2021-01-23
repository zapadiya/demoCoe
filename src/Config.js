export const AppVersion = 'v0.0.1';
export const mode = 'development';

export const apiConfig = {
    productionApiURL: "xx", /*release build*/
    testingApiURL: "xxx",/*inteneal testing*/
    developmentApiURL: "https://staging.2excel.com.au/lotus/api/v1.0/",/*for client test*/
    alphaBaseURL: "x",
};

export const HeaderSecretKey = {
    Development: '',
    Testing: 'xxx',
    Production: 'xxxx',
    Alpha: 'xxxxxx'
};

//number of logins, app active time, number of users, feature heat map,
export const MixPanelKey = {
    EventAppOpen: 'Application is launched'
};
