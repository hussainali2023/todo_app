import { createHomeStyles } from "@/assets/styles/home.styles";
import Header from "@/components/Header";
import { useTheme } from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";



export default function Index() {
  const {toggleDarkMode, colors} = useTheme();

  const homeStyles = createHomeStyles(colors)


  return (
   <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>

    <StatusBar barStyle={colors.statusBarStyle} />
    <SafeAreaView style={homeStyles.safeArea}>
     <View style={homeStyles.container}>
      <Header/>
   <TouchableOpacity onPress={toggleDarkMode}>
        <Text style={homeStyles.subtitle}>Toggle Dark Mode</Text>
   </TouchableOpacity>
    </View>
    </SafeAreaView>
   </LinearGradient>
  );
}
