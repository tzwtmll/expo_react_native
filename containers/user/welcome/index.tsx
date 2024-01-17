import { StyleSheet, View, Text } from "react-native";
// import StatusBar  from "@/components/StatusBar";
import { StatusBar } from 'expo-status-bar';


function Welcome() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text>Welcome333</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFF',
        paddingTop: 6
    }
})

export default Welcome;