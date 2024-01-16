import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import LogoSvg from "@/components/svg/logo";
import ArrowDownSvg from "@/components/svg/arrowDown";
import React from "react";
import { Input, Button, Tab, TabView, CheckBox } from "@rneui/themed";
import { useCountDown } from "@/utils/useCountDown";
import UncheckedSvg from "@/components/svg/unchecked";
import CheckedSvg from "@/components/svg/checked";

function Login() {
    const [index, setIndex] = React.useState(0);
    const { nums, goStart } = useCountDown(60);
    const [checked, setChecked] = React.useState(false);

    const handleSendSMS = async () => {
        if (nums > 0 && nums < 60) {
            return;
        }

        goStart();
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["rgba(61, 126, 255, 0.23)", "rgba(61, 126, 255, 0.00)"]}
                style={styles.linearGradient}
            />
            <View style={styles.header}>
                <LogoSvg />
                <Text style={styles.title}>欢迎使用飞度</Text>
            </View>

            <View style={styles.content}>
                <Tab
                    value={index}
                    onChange={(e) => setIndex(e)}
                    indicatorStyle={{
                        backgroundColor: "#3D7EFF",
                        height: 2,
                    }}
                    variant="default"
                >
                    <Tab.Item
                        title="手机号"
                        titleStyle={{ fontSize: 14, color: index === 0 ? "#165DFF" : "#5B6370" }}
                        buttonStyle={{ height: 42 }}
                    />
                    <Tab.Item
                        title="账号密码"
                        titleStyle={{ fontSize: 14, color: index === 1 ? "#165DFF" : "#5B6370" }}
                        buttonStyle={{ height: 44 }}
                    />
                </Tab>

                <TabView value={index} onChange={setIndex} animationType="spring">
                    <TabView.Item style={styles.tabViewItem}>
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
                            <View style={styles.protocol}>
                                <CheckBox
                                    iconType="material-community"
                                    checkedIcon={<CheckedSvg />}
                                    uncheckedIcon={<UncheckedSvg />}
                                    checked={checked}
                                    onPress={() => setChecked((checked) => !checked)}
                                    containerStyle={styles.checkBoxContainerStyle}
                                    wrapperStyle={styles.wrapperStyle}
                                />
                                <Text style={styles.protocolText}>我已阅读并同意</Text>
                                <Text style={styles.protocolLink}>《服务协议》</Text>
                                <Text style={styles.protocolText}>和</Text>
                                <Text style={styles.protocolLink}>《隐私政策》</Text>
                            </View>
                            <Button style={styles.login_btn}>登录</Button>
                        </>
                    </TabView.Item>
                    <TabView.Item style={{ width: "100%", paddingTop: 20 }}>
                        <Text>TabView.Item3</Text>
                    </TabView.Item>
                </TabView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        display: "flex",
        alignItems: "center",
    },
    linearGradient: {
        width: "100%",
        height: 132,
    },
    header: {
        width: 108,
        height: 82,
        position: "relative",
        bottom: 20,
        alignItems: "center",
        paddingTop: 10,
    },
    title: {
        color: "#1A1D24",
        fontFamily: "PingFang SC",
        fontSize: 18,
        fontWeight: "600",
        lineHeight: 22,
        paddingTop: 24,
    },
    content: {
        width: "100%",
        flex: 1,
    },
    tabViewItem: {
        width: "100%",
        paddingTop: 20,
        paddingLeft: 8,
        paddingRight: 8,
    },
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
    protocol: {
        display: "flex",
        flexDirection: "row",
        paddingBottom: 20,
    },
    protocolText: {
        color: "#5B6370",
        fontFamily: "PingFang SC",
        fontSize: 11,
        fontWeight: "400",
    },
    protocolLink: {
        color: "#165DFF",
        fontFamily: "PingFang SC",
        fontSize: 11,
        fontWeight: "400",
    },
    checkBoxContainerStyle: {
        margin:0,
        padding:0,
    },
    wrapperStyle:{
        margin:0,
        padding:0,
    },
});

export default Login;
