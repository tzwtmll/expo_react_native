import { Stack, router, usePathname, Slot } from "expo-router";
import { useEffect } from "react";
import { RootSiblingParent } from "react-native-root-siblings";
import { QueryClient, QueryClientProvider } from "react-query";
import { NativeBaseProvider } from "native-base";
import { SSRProvider } from "@react-aria/ssr";

export const queryClient = new QueryClient();

export default function RootLayout() {
    useEffect(() => {
        router.replace("/login");
    }, []);
    return (
        <SSRProvider>
            <QueryClientProvider client={queryClient}>
                <RootSiblingParent>
                    <NativeBaseProvider>
                        <RootLayoutNav />
                    </NativeBaseProvider>
                </RootSiblingParent>
            </QueryClientProvider>
        </SSRProvider>
    );
}

// 不需要和页面交互的路由放这里
function RootLayoutNav() {
    const pathname = usePathname();
    const customNav = ["/login", "/userInfo"];

    if (customNav.includes(pathname)) {
        return <Slot />;
    }

    return (
        <Stack screenOptions={{ headerShadowVisible: false, headerTitleAlign: "center" }}>
            <Stack.Screen
                name="home"
                options={{
                    title: "首页",
                    headerStyle: {
                        backgroundColor: "#578FFF",
                    },
                    headerShadowVisible: false,
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                    headerTitleAlign: "center",
                    headerLeft: () => null,
                }}
            />
        </Stack>
    );
}
