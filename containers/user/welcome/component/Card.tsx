import { StyleSheet, View, Text,TouchableOpacity } from "react-native";
import { ReactNode,Dispatch } from "react";
import CheckMarkSvg from "@/components/svg/checkMark";

interface Props {
    data: {
        id: number
        title: string;
        icon: ReactNode;
        info?: string;
        content: {subTitle: string;subContent: string;}[] | string

    };
    active: boolean;
    onPress: Dispatch<number>
}

function Card({ data, active,onPress }: Props) {

    const getContent = () => {
        if(Array.isArray(data.content)){
            return data.content.map(item => <View style={styles.item}>
                 <Text style={styles.subTitle}>{item.subTitle}</Text>
                 <Text style={styles.subContent}>{item.subContent}</Text>
            </View>)
        }

        return <Text style={styles.subContent}>{data.content}</Text>
    }
    return (
        <TouchableOpacity onPress={() => onPress(data.id)}>
        <View style={active ? styles.activeContainer : styles.container} >
            <View style={styles.select}>{active ? 
            <View style={styles.activeSelect}><CheckMarkSvg/></View>
            : <View style={styles.activeUnSelect}><CheckMarkSvg/></View>}</View>
            <View style={styles.header}>
                {data.icon}
                <Text style={styles.title}>{data.title}</Text>
            </View>
            {data?.info && <Text style={styles.info}>{data?.info}</Text>}

            {getContent()}
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    activeContainer: {
        paddingVertical: 14,
        paddingHorizontal: 12,
        backgroundColor: "#F7F9FF",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#165DFF",
        borderRadius: 8,
        marginTop: 20,
        position: "relative",
    },
    container: {
        paddingVertical: 14,
        paddingHorizontal: 12,
        backgroundColor: "#FFF",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#E5E6EB",
        borderRadius: 8,
        marginTop: 20,
        position: "relative",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        marginLeft: 8,
        color: "#1A1D24",
        fontFamily: "PingFang SC",
        fontSize: 14,
        fontWeight: "500",
    },
    select: {
        position: "absolute",
        top: -1,
        right: -1,
    },
    info: {
        marginTop:10,
        backgroundColor: '#FFF6EF',
        borderRadius:4,
        paddingVertical: 2,
        paddingHorizontal: 8,
        color: "#FF7F22",
        fontFamily: "PingFang SC",
        fontSize: 11,
        fontWeight: "400",
    },
    item: {
        marginTop: 10
    },
    subTitle: {
        color: "#1A1D24",
        fontFamily: "PingFang SC",
        fontSize: 12,
        fontWeight: "500",
    },
    subContent: {
        color: "#5B6370",
        fontFamily: "PingFang SC",
        fontSize: 11,
        fontWeight: "400",
        marginTop: 10
    },
    activeSelect: {
        width: 24,
        height:24,
        backgroundColor: '#165DFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        borderTopRightRadius:10,
        borderBottomLeftRadius: 10
    },
    activeUnSelect: {
        width: 24,
        height:24,
        backgroundColor: '#E5E6EB',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        borderTopRightRadius:10,
        borderBottomLeftRadius: 10
    }
});

export default Card;
