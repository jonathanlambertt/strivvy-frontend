import { Image, Text, View } from "react-native";

const LinkPreview = ({ image, favicon, siteName, title, description }) => {
  return (
    <View
      style={{
        marginHorizontal: 15,
        borderWidth: 0.5,
        borderRadius: 6,
        borderColor: "#ececec",
        marginVertical: 8,
        flexDirection: "row",
        padding: 6,
      }}
    >
      <View>
        <Image
          src={image}
          style={{
            width: 80,
            height: 80,
            resizeMode: "contain",
            backgroundColor: "#ececec",
            borderRadius: 6,
            borderWidth: 0.5,
            borderColor: "#ececec",
          }}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          marginLeft: 10,
          flex: 1,
          marginRight: 10,
        }}
      >
        <Text
          numberOfLines={2}
          style={{ fontSize: 15, fontWeight: "500", color: "#333" }}
        >
          {title}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 13,
            fontWeight: "500",
            color: "#808080",
            marginTop: 2,
          }}
        >
          {description}
        </Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}
        >
          <Image
            src={favicon}
            style={{ width: 14, height: 14, marginRight: 3 }}
          />
          <Text style={{ fontSize: 12, color: "#333" }}>{siteName}</Text>
        </View>
      </View>
    </View>
  );
};

export default LinkPreview;
