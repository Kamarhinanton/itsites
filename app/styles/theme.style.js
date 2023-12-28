import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bg: (isDarkTheme) => ({
    backgroundColor: isDarkTheme?'#A0AEC0':'#fff',
  }),
  text: (isDarkTheme) => ({
    color: isDarkTheme?'#8C6CED':'#373D59',
  }),
});

export default styles;
