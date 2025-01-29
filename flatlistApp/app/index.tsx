import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import colors from "../styles/colors";
import defaultStyles from "../styles/defaultStyles";
import { useState } from "react";

export default function Index() {
  type dataType = {
    id: string; //unique identifier for each element in the list
    title: string; //what we display
  };

  const DATA: dataType[] = [
    { id: "1", title: "first" },
    { id: "2", title: "second" },
    { id: "3", title: "third" },
    { id: "4", title: "fourth" },
  ];

  const [selectedId, setSelectedId] = useState<string>("1");

  //create fuction to call when an item is selected
  // a\pass a param of the item that was clicked on
  const selectedList = (item: dataType) => {
    console.log("clicked on" + item.title);
    setSelectedId(item.id);
  };

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
            data={DATA}
            keyExtractor={(item: dataType) => item.id}
            extraData={selectedId}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => selectedList(item)}>
                <View
                  style={[
                    styles.titleContainer,
                    {
                      backgroundColor:
                        item.id === selectedId
                          ? colors.primary
                          : colors.secondary,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.titleText,
                      {
                        color:
                          item.id === selectedId
                            ? colors.text.light
                            : colors.text.dark,
                      },
                    ]}
                  >
                    {" "}
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
  // for each row in flatsheet
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
