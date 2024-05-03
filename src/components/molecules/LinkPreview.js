import { Image, Text, View } from "react-native";

const LinkPreview = ({ image, favicon, siteName, title, description }) => {
  return (
    <View
      style={{
        //marginHorizontal: 15,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "#e9e9e9",
        marginTop: 5,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        //flexDirection: "row",
        //padding: 12,
        //marginHorizontal: 15,
      }}
    >
      <View>
        <Image
          src={image}
          style={{
            //width: 300,
            //height: 300,
            resizeMode: "contain",
            backgroundColor: "#ececec",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            borderColor: "#d3d3d3",
            aspectRatio: 16 / 9,
          }}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          //marginLeft: 10,
          flex: 1,
          marginRight: 5,
          padding: 10,
        }}
      >
        <Text
          numberOfLines={2}
          style={{ fontSize: 18, fontWeight: "500", color: "#333" }}
        >
          {title}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "#808080",
            marginTop: 3,
          }}
        >
          {description}
        </Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
        >
          {favicon != "null" ? (
            <Image
              src={favicon}
              style={{ width: 18, height: 18, marginRight: 4 }}
            />
          ) : null}
          <Text style={{ fontSize: 14, color: "#333" }}>{siteName}</Text>
        </View>
      </View>
      {/* <View>
        <Image
          src={image}
          style={{
            width: 80,
            height: 80,
            resizeMode: "contain",
            backgroundColor: "#ececec",
            borderRadius: 6,
            borderWidth: 0.5,
            borderColor: "#d3d3d3",
          }}
        />
      </View> */}
    </View>
  );
};

export default LinkPreview;
