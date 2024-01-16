import Blank from "@/containers/blank";
import { Stack } from "expo-router";

export default function BlankPage() {
    return (
        <>
            <Stack.Screen
                options={{
                    title: "首页",
                    headerTitleAlign: "center",
                }}
            />
            <Blank />
        </>
    );
}
