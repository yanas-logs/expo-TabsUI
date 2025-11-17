import { SplashScreen, Stack, Tabs, Redirect } from "expo-router";
import "./global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Text } from "react-native";
import { AuthProvider, useAuth } from "../store/auth/AuthContext";

function RootLayoutInternal() {
  const { user, loading } = useAuth();

  const [fontsLoaded] = useFonts({
    "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
    "Quicksand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Loading state
  if (loading || !fontsLoaded) return null;

  // Redirect if not logged in
  if (!user) return <Redirect href="/login" />;

  // Render main tabs
  return <Tabs />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutInternal />
    </AuthProvider>
  );
}
