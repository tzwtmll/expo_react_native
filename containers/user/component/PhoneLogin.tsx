import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Input, Button } from "@rneui/themed";
import ArrowDownSvg from "@/components/svg/arrowDown";
import Protocol from "./Protocol";
import { useCountDown } from "@/utils/useCountDown";
import { router } from "expo-router";
import QuickLink from "./QuickLink";

function PhoneLogin() {
    const { nums, goStart } = useCountDown(60);
    const handleSendSMS = async () => {
        if (nums > 0 && nums < 60) {
            return;
        }

        goStart();
    };
    return (
        <>
            <Input
                placeholder="请输入您的手机号"
                inputStyle={styles.inputStyle}
                keyboardType="number-pad"
                inputContainerStyle={styles.inputContainerStyle}
                containerStyle={styles.containerStyle}
                leftIcon={
                    <View style={styles.leftInput}>
                        <Text>
                            +86
                            <ArrowDownSvg />
                        </Text>
                    </View>
                }
            />
            <Input
                placeholder="请输入验证码"
                inputStyle={styles.inputStyle}
                keyboardType="number-pad"
                inputContainerStyle={styles.inputContainerStyle}
                containerStyle={styles.containerStyle}
                rightIcon={
                    <View style={styles.rightInput}>
                        <TouchableOpacity onPress={handleSendSMS}>
                            {nums === 0 || nums === 60 ? (
                                <Text style={styles.getCode}>获取验证码</Text>
                            ) : (
                                <Text>{nums}s后可重新获取</Text>
                            )}
                        </TouchableOpacity>
                    </View>
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
});

export default PhoneLogin;
