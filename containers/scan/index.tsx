import { StyleSheet, View, Text, Button,DeviceEventEmitter } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useState, useEffect } from "react";
import { router,useLocalSearchParams } from "expo-router";

function Scan() {
    const params = useLocalSearchParams() as {
        scanKey: string;
    };
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        router.back()
        DeviceEventEmitter.emit(params.scanKey,data)
    };

    if (hasPermission === null) {
        return  <View style={styles.container}><Text>需要相机权限</Text></View>;
    }
    if (hasPermission === false) {
        return <View style={styles.container}><Text>没有相机权限</Text></View>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingTop: 6,
    },
});

export default Scan;
