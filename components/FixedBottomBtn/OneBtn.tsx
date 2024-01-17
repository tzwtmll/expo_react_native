import { StyleSheet, View } from "react-native";
import { Button } from '@rneui/themed';

interface PropsType {
    text?: string
    onPress?: () => void
    disabled?: boolean
}


export default function OneFixedBottomBtn({text,onPress = () => {},disabled = false}:PropsType) {
    return (
        <View style={styles.container} >
            <Button buttonStyle={disabled? styles.disabledButtonStyle: {}} onPress={disabled ? () => {} :onPress}>{text || '确认'}</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       width: '100%',
       padding: 20,
       position:'fixed',
       bottom: 0,
       backgroundColor: '#fff'
    },
    disabledButtonStyle: {
        backgroundColor: '#AAA'
    }
});