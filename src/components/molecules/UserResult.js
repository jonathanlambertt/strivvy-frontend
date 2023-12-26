import { useState } from "react";
import { View, Text, Button } from "react-native";
import strivvy from "../../api/strivvy";

const UserResult = ({ item }) => {
  const [followBtnText, setFollowBtnText] = useState("Follow");
  const [isDisabled, setIsDisabled] = useState(false);

  const follow = async (userID) => {
    try {
      setIsDisabled(true);
      await strivvy.post(`u/follow/${userID}`);
      setFollowBtnText("Following");
    } catch (error) {
      setIsDisabled(false);
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,
        borderColor: "#ececec",
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: 500 }}>@{item.username}</Text>
      <View style={{ alignItems: "flex-end", flex: 1 }}>
        {item.is_following || item.is_searching_user ? null : (
          <Button
            title={followBtnText}
            color={"#ef305a"}
            disabled={isDisabled}
            onPress={() => follow(item.id)}
          />
        )}
      </View>
    </View>
  );
};

export default UserResult;
