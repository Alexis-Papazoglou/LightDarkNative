import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    whiteContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
        backgroundColor: "white",
    },
    darkContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
        backgroundColor: "black",
    },
    whiteBtn: {
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        backgroundColor: 'black'
    },
    darkBtn: {
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        backgroundColor: 'white'
    },
    whiteText: {
        color: "white"
    },
    darkText: {
        color: "black"
    }
})

