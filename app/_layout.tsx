import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  return <Stack >
    <Stack.Screen
      name="(tabs)"
      options={{
        headerShown: false,
        contentStyle: { backgroundColor: "#1e293b" },
      }}
    />
    <Stack.Screen
      name="movie/[id]"
      options={{
        headerShown: false,
      }}
    />

  </Stack>
}
