import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderRadius: 4,
    marginBottom: 12,
    justifyContent: "space-between",
  },

  containerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  containerRight: {
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },

  name: {
    fontSize: 16,
    color: "#b5b5b5",
  },

  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    paddingVertical: 6,
    width: 80,
  },

  personAddButton: {
    backgroundColor: "#dedede",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  }
});
