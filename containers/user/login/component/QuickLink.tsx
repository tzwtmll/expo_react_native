import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

function QuickLink() {
    return (
        <View style={styles.container}>
            <View style={styles.itemWrap}>
                <Text style={styles.text}>还没有账号？</Text>
                <TouchableOpacity>
                    <Text style={styles.link} onPress={() => router.push("/home")}>立即注册</Text>
                </TouchableOpacity> 
            </View>
            <View style={styles.itemWrap}>
                <Text style={styles.text}>忘记密码？</Text>
                <TouchableOpacity>
                    <Text style={styles.link} onPress={() => router.push("/home")}>找回密码</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingLeft: 8,
        paddingRight: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    itemWrap: {
        display: "flex",
        flexDirection: "row",
    },
    text: {
        color: "#5B6370",
        fontFamily: "PingFang SC",
        fontSize: 12,
        fontWeight: "400",
    },
    link: {
        color: "#165DFF",
        fontFamily: "PingFang SC",
        fontSize: 12,
        fontWeight: "400",
    },
});

export default QuickLink;
