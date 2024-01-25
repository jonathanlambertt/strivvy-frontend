const config = {
  name: "Strivvy",
  slug: "strivvy",
  version: "1.0.0",
  orientation: "portrait",
  userInterfaceStyle: "light",
  icon: "./assets/icon.png",
  assetBundlePatterns: ["**/*"],
  ios: {
    bundleIdentifier: "com.strivvy.app",
    buildNumber: "6",
  },
};

module.exports = () => {
  if (process.env.APP_ENV === "production") {
    return {
      ...config,
      extra: {
        baseURL: "https://strivvy.com/",
        previewURL: "https://strivvy.com/p/preview/?url=",
        eas: {
          projectId: "145c6806-8cde-4847-9be5-29e756653401",
        },
      },
    };
  } else {
    return {
      ...config,
      extra: {
        baseURL: "http://192.168.1.153:8000/",
        previewURL: "http://192.168.1.153:8000/p/preview/?url=",
        eas: {
          projectId: "145c6806-8cde-4847-9be5-29e756653401",
        },
      },
    };
  }
};
