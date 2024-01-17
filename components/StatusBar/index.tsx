import { StyleSheet, View } from "react-native";
import { STATUS_BAR_HEIGHT } from "@/constants/index";
console.log(STATUS_BAR_HEIGHT,'STATUS_BAR_HEIGHT--')

export default function StatusBar() {
    return (
        <View style={styles.container}/>
    );
}

const styles = StyleSheet.create({
    container: {
        height: STATUS_BAR_HEIGHT,
        backgroundColor:'#F7F8FA',
    }
})
