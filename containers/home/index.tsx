import { StyleSheet, View, Text } from "react-native";

function Home() {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
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

export default Home;