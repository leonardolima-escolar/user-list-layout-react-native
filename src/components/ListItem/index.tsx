import { TouchableOpacity, Text, View, Image } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";


interface ListItemProps {
  uri: string;
  name: string;
  score: number;
}

export function ListItem({ uri, name, score }: ListItemProps) {
  return (


    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <Image style={styles.image} source={{uri}} ></Image>
        <Text style={styles.name} >{name}</Text>
      </View>
      <View style={styles.containerRight} >
        {score < 0 ? (
          <View style={[styles.scoreContainer, {backgroundColor: "#f2e6df" }]} >
            <Ionicons name="caret-down-outline" size={24} color="#f60202" />
            <Text style={{color: "#f60202"}}> {score} </Text>
          </View>
        ) : ( 
          <View style={[styles.scoreContainer, {backgroundColor: "#dbe6dc" }]} >
            <Ionicons name="caret-up-outline" size={24} color="#017d01" />
            <Text style={{color: "#017d01"}}> +{score} </Text>
          </View>
        )}
        <TouchableOpacity style={styles.personAddButton}>
          <Ionicons name="person-add" size={24} color="#7f7f7f" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
