import { Tabs } from "expo-router";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house" color={color} />,
        }}
      />
      <Tabs.Screen
        name="transfer"
        options={{
          title: "Transfer",
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="arrow.left.arrow.right" color={color} />,
        }}
      />
      <Tabs.Screen
        name="topup"
        options={{
          title: "Top Up",
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="arrow.up.to.line" color={color} />,
        }}
      />
      <Tabs.Screen
        name="logout"
        options={{
          title: "Logout",
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="power" color={color} />,
        }}
      />
    </Tabs>
  );
}
