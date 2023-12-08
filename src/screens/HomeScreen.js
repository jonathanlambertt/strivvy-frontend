import { FlatList, View } from "react-native";
import Post from "../components/molecules/Post";

const HomeScreen = () => {
  const data = [
    {
      id: 1,
      username: "jonathanlambert",
      profile_picture:
        "https://scontent.cdninstagram.com/v/t51.2885-19/96320982_571389333790519_1520136552670298112_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=frfiayvYdlQAX91Ll5a&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfC1ZTB60UqBXJbFGh4RvTbY-EwJCBf2nPfnC_4W4DtppQ&oe=657194F4&_nc_sid=10d13b",
      timestamp: "23w",
      image: "https://i.scdn.co/image/ab67616d0000b27337a04015658168ca6e6e604a",
    },
    {
      id: 2,
      username: "patrick97",
      profile_picture:
        "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-19/74962058_2411998989069249_7381474324122697728_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=cbgoeBzxktoAX-3Yh0v&edm=AEF8tYYBAAAA&ccb=7-5&oh=00_AfCdJ1J7y-pDBZqoosuQO6su8FxbXdYpZhinfjjHtobVUQ&oe=6571C024&_nc_sid=1e20d2",
      timestamp: "30m",
      image: "https://i.scdn.co/image/ab67616d00001e02f46b9d202509a8f7384b90de",
    },
    {
      id: 3,
      username: "jill",
      profile_picture:
        "https://scontent-lga3-1.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=1&_nc_ohc=ZGw5xDef_okAX86I-yw&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfAVKHdHviDzLWuPT26EmMUcZ5V8Gb0tm2Br0ixfA_aTLA&oe=65712A8F&_nc_sid=b41fef",
      timestamp: "20hr",
      image: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
    },
    {
      id: 4,
      username: "jacob_thomas_peterson",
      profile_picture:
        "https://scontent-lga3-1.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=1&_nc_ohc=ZGw5xDef_okAX86I-yw&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfAVKHdHviDzLWuPT26EmMUcZ5V8Gb0tm2Br0ixfA_aTLA&oe=65712A8F&_nc_sid=b41fef",
      timestamp: "April 3, 2020",
      image: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Post
            username={item.username}
            profile_picture={item.profile_picture}
            timestamp={item.timestamp}
            image={item.image}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;
