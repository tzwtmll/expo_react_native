import { StyleSheet, View } from "react-native";
import { Input, Button, useToast, FormControl, WarningOutlineIcon } from "native-base";
import { router } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

function Login() {
    const toast = useToast();
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Input placeholder="手机号" />
                <FormControl isInvalid>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input placeholder="Enter password" />
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        Try different from previous passwords.
                    </FormControl.ErrorMessage>
                </FormControl>
                <Button
                    style={styles.toast_button}
                    onPress={() =>
                        toast.show({
                            title: "我是请提示内容",
                            placement: "top",
                        })
                    }
                >
                    按我清提示
                </Button>
                <Button
                    onPress={() =>
                        router.push({
                            pathname: "/home",
                        })
                    }
                >
                    跳转首页
                </Button>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        display: "flex",
        justifyContent: "center",
        padding: 15,
    },
    toast_button: {
        marginBottom: 15,
        marginTop: 15,
    },
});

export default Login;
