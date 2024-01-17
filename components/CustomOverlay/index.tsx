import React, { ReactNode } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Overlay } from "@rneui/themed";

interface PropsType {
    visible: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default (props: PropsType) => {
    const { visible, children } = props;

    return (
        <Overlay
            isVisible={visible}
        >
          {children}
        </Overlay>
    );
};

const styles = StyleSheet.create({
    
});
