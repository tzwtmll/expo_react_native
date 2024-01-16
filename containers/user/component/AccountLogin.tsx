import { StyleSheet, TouchableOpacity } from "react-native";
import { Input, Button } from "@rneui/themed";
import Protocol from "./Protocol";
import { router } from "expo-router";
import React from "react";
import CloseEyeSvg from "@/components/svg/closeEye";
import OpenEyeSvg from "@/components/svg/openEye";
import QuickLink from "./QuickLink";

function AccountLogin() {
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    return (
        <>
            <Input
                placeholder="请输入账号"
                inputStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                containerStyle={styles.containerStyle}
            />
            <Input
                placeholder="请输入密码"
                inputStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                containerStyle={styles.containerStyle}
                secureTextEntry={secureTextEntry}
                rightIcon={
                    secureTextEntry ? (
                        <TouchableOpacity
                            onPress={() => setSecureTextEntry((secureTextEntry) => !secureTextEntry)}
                            style={styles.eye}
                        >
                            <CloseEyeSvg />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            onPress={() => setSecureTextEntry((secureTextEntry) => !secureTextEntry)}
                            style={styles.eye}
                        >
                            <OpenEyeSvg />
                        </TouchableOpacity>
                    )
                }
            />
            <Protocol />
            <Button
                style={styles.login_btn}
                onPress={() =>
                    router.push({
                        pathname: "/home",
                    })
                }
            >
                登录
            </Button>
            <QuickLink />
        </>
    );
}

const styles = StyleSheet.create({
    containerStyle: {},
    inputContainerStyle: {
        borderColor: "#E5E6EB",
        borderWidth: 1,
        borderStyle: "solid",
        height: 40,
        borderRadius: 4,
    },
    inputStyle: {
        fontSize: 14,
        width: "100%",
        paddingLeft: 12,
        paddingRight: 12,
    },
    login_btn: {
        paddingLeft: 8,
        paddingRight: 8,
    },
    leftInput: {
        color: "#1A1D24",
        fontFamily: "PingFang SC",
        fontSize: 14,
        paddingLeft: 12,
        borderRightWidth: 1,
        borderRightColor: "#E5E6EB",
        borderStyle: "solid",
        paddingRight: 16,
    },
    getCode: {
        color: "#165DFF",
        fontFamily: "PingFang SC",
        fontSize: 14,
        paddingRight: 12,
    },
    rightInput: {
        borderLeftWidth: 1,
        borderLeftColor: "#E5E6EB",
        borderStyle: "solid",
        paddingLeft: 16,
    },
    eye: {
        paddingRight: 10,
    },
});

export default AccountLogin;
