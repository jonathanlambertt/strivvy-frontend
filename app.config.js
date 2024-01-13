const config = {
  name: "Strivvy",
  slug: "strivvy",
  version: "1.0.0",
  orientation: "portrait",
  userInterfaceStyle: "light",
  icon: "./assets/icon.png",
  assetBundlePatterns: ["**/*"],
};

module.exports = () => {
  if (process.env.APP_ENV === "production") {
    return {
      ...config,
      extra: {
        baseURL: "https://strivvy.com/",
      },
    };
  } else {
    return {
      ...config,
      extra: {
        baseURL: "http://192.168.1.153:8000/",
      },
    };
  }
};
