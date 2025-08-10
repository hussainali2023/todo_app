import { createHomeStyles } from "@/assets/styles/home.styles";
import { useTheme } from "@/hooks/useTheme";
import { Text, TouchableOpacity, View } from "react-native";




export default function Index() {
  const {toggleDarkMode, colors} = useTheme();

  const homeStyles = createHomeStyles(colors)


  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.subtitle}>Hello World</Text>
   <TouchableOpacity onPress={toggleDarkMode}>
        <Text style={homeStyles.subtitle}>Toggle Dark Mode</Text>
   </TouchableOpacity>
    </View>
  );
}
