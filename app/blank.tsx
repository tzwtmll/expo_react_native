import Blank from "@/containers/blank";
import { Stack } from "expo-router";

export default function BlankPage() {
    return (
        <>
            <Stack.Screen
                options={{
                    title: "空页demo",
                    headerTitleAlign: "center",
                }}
            />
            <Blank />
        </>
    );
}
