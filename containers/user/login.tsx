import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LogoSvg from "@/components/svg/logo";
import React from "react";
import { Tab, TabView } from "@rneui/themed";
import PhoneLogin from "./component/PhoneLogin";
import AccountLogin from "./component/AccountLogin";

function Login() {
    const [index, setIndex] = React.useState(0);

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
                <View style={styles.tabWrap}>
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
                </View>

                <TabView value={index} onChange={setIndex} animationType="spring">
                    <TabView.Item style={styles.tabViewItem}>
                        <PhoneLogin />
                    </TabView.Item>
                    <TabView.Item style={{ width: "100%", paddingTop: 20 }}>
                        <AccountLogin />
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
    tabWrap: {
        paddingLeft: 16,
        paddingRight: 16,
    },
   
});

export default Login;
