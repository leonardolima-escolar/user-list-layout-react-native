import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 12,
    paddingHorizontal: 12,
  },

  title: {
    fontSize: 32,
    marginLeft: 12,
  },

  profile: {
    height: 260,
    marginVertical: 12,
    backgroundColor: "#fff",
    paddingTop: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },

  profileList: {
    margin: 12,
  },

  profileInfoContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 12,
  },

  profileInfoBorderLine: {
    height: 1,
    backgroundColor: "#ececed",
  },

  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },

  profileName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#555",
  },

  profileButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
