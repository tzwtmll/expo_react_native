import { StyleSheet, View, Text } from "react-native";
import { CheckBox } from "@rneui/themed";
import UncheckedSvg from "@/components/svg/unchecked";
import CheckedSvg from "@/components/svg/checked";
import React from "react";

function Protocol() {
    const [checked, setChecked] = React.useState(false);
    return (
        <View style={styles.protocol}>
            <View style={styles.checkBoxWrap}>
                <CheckBox
                    iconType="material-community"
                    checkedIcon={<CheckedSvg />}
                    uncheckedIcon={<UncheckedSvg />}
                    checked={checked}
                    onPress={() => setChecked((checked) => !checked)}
                    containerStyle={styles.checkBoxContainerStyle}
                    wrapperStyle={styles.wrapperStyle}
                />
            </View>
            
            <Text style={styles.protocolText}>我已阅读并同意</Text>
            <Text style={styles.protocolLink}>《服务协议》</Text>
            <Text style={styles.protocolText}>和</Text>
            <Text style={styles.protocolLink}>《隐私政策》</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    checkBoxWrap: {
        width: 28,
        height:14
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
})

export default Protocol;