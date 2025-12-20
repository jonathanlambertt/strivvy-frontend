import { Image, Text, View } from "react-native";

const LinkPreview = ({ image, favicon, siteName, title, description }) => {
  const isSpotify =
    typeof siteName === "string" && siteName.trim().toLowerCase() === "spotify";

  if (isSpotify) {
    return (
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "#e9e9e9",
          borderRadius: 12,
          overflow: "hidden",
          backgroundColor: "#fff",
          marginTop: 5,
        }}
      >
        {/* Left thumbnail */}
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          style={{
            width: 110,
            height: 110,
            backgroundColor: "#ececec",
          }}
        />

        {/* Right content */}
        <View
          style={{
            flex: 1,
            paddingHorizontal: 10,
            paddingVertical: 8,
            justifyContent: "center",
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: "#09090b",
              marginBottom: 4,
            }}
          >
            {title || "Untitled link"}
          </Text>

          {!!description && (
            <Text
              numberOfLines={1}
              style={{
                fontSize: 13,
                color: "#71717a",
                lineHeight: 18,
                marginBottom: 6,
              }}
            >
              {description}
            </Text>
          )}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {favicon && favicon !== "null" && (
              <Image
                source={{ uri: favicon }}
                style={{
                  width: 14,
                  height: 14,
                  marginRight: 5,
                  borderRadius: 7,
                }}
              />
            )}

            <Text
              numberOfLines={1}
              style={{
                fontSize: 13,
                color: "#a1a1aa",
                fontWeight: "500",
                flex: 1,
              }}
            >
              {siteName || "Website"}
            </Text>
          </View>
        </View>
      </View>
    );
  } else {
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
            //marginRight: 5,
            //padding: 8,
            // paddingBottom: 8,
            // paddingLeft: 8,
            // paddingTop: 8,
            marginLeft: 8,
            marginVertical: 8,
            marginRight: 8,
          }}
        >
          <Text
            numberOfLines={2}
            style={{ fontSize: 16, fontWeight: "500", color: "#09090b" }}
          >
            {title}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: "#71717a",
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
                style={{ width: 15, height: 15, marginRight: 4 }}
              />
            ) : null}
            <Text style={{ fontSize: 12, color: "#a1a1aa", fontWeight: "500" }}>
              {siteName}
            </Text>
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
  }
};

export default LinkPreview;
