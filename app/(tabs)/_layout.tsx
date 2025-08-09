import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
const TabsLayout = () => {
  return (
    <Tabs 
    screenOptions={{
        tabBarActiveTintColor:"yellow",
        tabBarInactiveTintColor:"black",
        tabBarStyle: {
            backgroundColor: 'gray',
            height: 90,
            paddingBottom: 10,
            paddingTop: 10,
            borderTopWidth: 1,
            borderTopColor: "yellow"
        },
        tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "400"
        },

    }}
    >
        <Tabs.Screen
            name="index"
            options={{ 
                title: 'Home' ,
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="flash-outline" size={size} color={color} />
                )
            }}
        />
        <Tabs.Screen
            name="settings"
            options={{ 
                title: 'Settings',
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="settings" size={size} color={color} />    
                )
            }}
        />
    </Tabs>
  )
}

export default TabsLayout