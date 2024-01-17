import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import StatusBar from "@/components/StatusBar";
import { router } from "expo-router";
import Card from "./component/Card";
import { data } from "./data";
import { useState } from "react";
import OneFixedBottomBtn from "@/components/FixedBottomBtn/OneBtn";
import CustomOverlay from "@/components/CustomOverlay";
import CloseSvg from "@/components/svg/close";
import PeopleSvg from "@/components/svg/people";

function Welcome() {
    const [activeId, setActiveId] = useState(data[0]?.id);
    const [visible, setVisible] = useState(false);
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.header}>
                <View style={styles.titleWrap}>
                    <Text style={styles.title}>飞度OA，快乐办公</Text>
                    <TouchableOpacity
                        onPress={() => {
                            router.push({
                                pathname: "/home",
                            });
                        }}
                    >
                        <Text style={styles.jump}>跳过</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoContent}>
                        亲爱的用户，感谢您选择飞度OA，飞度OA将给您带来前所未有的轻松快乐、高效、安全的非凡移动办公体验
                    </Text>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.contentTitle}>一、您最希望使用飞度oa哪个产品服务？</Text>
                <ScrollView>
                    {data.map((item) => (
                        <Card data={item} active={item.id === activeId} onPress={setActiveId} />
                    ))}
                </ScrollView>
            </View>
            <OneFixedBottomBtn onPress={() => setVisible(true)}/>
            <CustomOverlay visible={visible} onClose={() => setVisible(false)}>
                <View style={styles.overlayContent}>
                    <TouchableOpacity style={styles.closeWrap} onPress={() => setVisible(false)}><CloseSvg /></TouchableOpacity>
                    <PeopleSvg />
                    <TouchableOpacity onPress={() => router.push({
                        pathname: '/home'
                    })}><Text style={styles.overlayTitle}>感谢您的填写</Text></TouchableOpacity>
                </View>
            </CustomOverlay>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F8FA",
    },
    header: {
        backgroundColor: "#E6EEFF",
    },
    titleWrap: {
        display: "flex",
        justifyContent: "space-between",
        paddingTop: 12,
        paddingRight: 16,
        paddingBottom: 12,
        paddingLeft: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        color: "#1A1D24",
        fontFamily: "PingFang SC",
        fontSize: 18,
        fontWeight: "600",
    },
    jump: {
        color: "#B3BECB",
        fontFamily: "PingFang SC",
        fontSize: 14,
        fontWeight: "400",
    },
    info: {
        paddingTop: 20,
        paddingRight: 16,
        paddingBottom: 20,
        paddingLeft: 16,
    },
    infoContent: {
        color: "#165DFF",
        fontFamily: "PingFang SC",
        fontSize: 12,
        fontWeight: "400",
        backgroundColor: "#EDF2FF",
        borderRadius: 4,
        paddingTop: 4,
        paddingRight: 12,
        paddingBottom: 4,
        paddingLeft: 12,
    },
    content: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 20,
        paddingRight: 16,
        paddingBottom: 20,
        paddingLeft: 16,
    },
    contentTitle: {
        color: "#1A1D24",
        fontFamily: "PingFang SC",
        fontSize: 14,
        fontWeight: "600",
    },
    overlayContent: {
        width: 241,
        display: 'flex',
        alignItems:'center'
    },
    closeWrap:{
        width:'100%',
        display: 'flex',
        alignItems: 'flex-end'
    },
    overlayTitle: {
        color: "#1A1D24",
        fontFamily: "PingFang SC",
        fontSize: 16,
        fontWeight: "500",
        marginTop: 22,
        marginBottom:22
    }
});

export default Welcome;
