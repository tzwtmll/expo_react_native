import Scan from "@/containers/scan";
import { Stack } from "expo-router";

export default function ScanPage() {
    return (
        <>
            <Stack.Screen
                options={{
                    title: "扫一扫",
                    headerTitleAlign: "center",
                }}
            />
            <Scan />
        </>
    );
}
