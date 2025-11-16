import { Tabs, Redirect } from "expo-router";
// import { useAuth } from "../../store/auth/AuthContext";

export default function TabsLayout() {
    // const { user, loading } = useAuth();
    const DEV_MODE = true;

    // if (loading) return null;
    // if (!user && !DEV_MODE) return <Redirect href="/login" />;

    if (!DEV_MODE) return <Redirect href="/" />;

    return (
        <Tabs screenOptions={{ headerShown: false }}>

        </Tabs>
    );
}
