import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get("screen").width;
const style = StyleSheet.create({
    img: {
        width: width,
        height: width
    },
    like: {
        width:  40,
        height: 40,
        margin: 10,
        marginLeft: 5
    },
    viewLike: {
        flexDirection: "row",
        alignItems: "center"
    }
});

export default style;