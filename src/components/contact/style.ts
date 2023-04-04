import { StyleSheet } from "react-native";
import fonts from "../../assets/fonts";



export const styles = StyleSheet.create({
    mainview: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginTop: 15
    },
    icons:{ 
        
        borderRadius: 25, 
        height: 50, 
        width: 50, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    icontext:{ 
        color: 'white' 
    },
    thumbnailImg:{ 
        height: 50, 
        width: 50, 
        borderRadius: 25 
    },
    details:{ 
        marginLeft: 23, 
        marginTop: 6 
    },
    name:{ 
        color: 'black', 
        fontFamily: fonts.MEDIUM, 
        fontSize: 16 
    },
    header:{ 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginHorizontal: 25, 
        marginTop: 10, 
        marginBottom: 4 
    },
    headerText:{ 
        color: '#3D535D', 
        fontSize: 20, 
        fontWeight: '600', 
        fontFamily: fonts.SEMIBOLD 
    },
    line:{ 
        backgroundColor: '#ECEFF1', 
        height: 1, 
        marginTop: 5 
    },
    list:{ 
        marginTop: 20 
    }


});