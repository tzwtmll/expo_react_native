import { StyleSheet, View, Text } from "react-native";

function Blank() {
    return (
        <View style={styles.container}>
            <Text>scan</Text>
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

export default Blank;