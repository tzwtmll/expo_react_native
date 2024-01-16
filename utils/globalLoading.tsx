import RootSiblings from "react-native-root-siblings";
import { StyleSheet, View } from "react-native";
import { Spinner } from "native-base";

let loading = null as any;
const styles = StyleSheet.create({
    sibling: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    loading: {
        width: 48,
        height: 48,
    },
});

const createLoading = () => {
    if(loading) loading.destroy();
    loading = new RootSiblings(
        (
            <View style={styles.sibling}>
                <Spinner color="emerald.500" />
            </View>
        )
    );
};

const destroyLoading = () => {
    loading && loading.destroy();
};

export { createLoading, destroyLoading };
