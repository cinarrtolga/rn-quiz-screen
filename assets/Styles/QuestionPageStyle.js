import { StyleSheet, Dimensions } from 'react-native'

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    body: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        alignContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        backgroundColor: '#000000'
    },
    questionArea: {
        marginTop: 40,
        width: SCREEN_WIDTH - 20,
        height: SCREEN_HEIGHT * (3 / 10),
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 15,
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
        opacity: 0.6
    },
    questionAreaText: {
        fontSize: 20,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
        color: '#000000'
    },
    answerArea: {
        marginTop: 5,
        height: SCREEN_HEIGHT * (7 / 10),
        marginBottom: 5
    },
    answerAreaSingle: {
        marginTop: 5,
        marginBottom: 5,
        width: SCREEN_WIDTH - 20,
        height: (SCREEN_HEIGHT - 150) * ((7 / 10) / 5),
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
        opacity: 0.6
    },
    clickableArea: {
        width: SCREEN_WIDTH - 20,
        height: (SCREEN_HEIGHT - 150) * ((7 / 10) / 5),
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        paddingLeft: 10
    },
    progressArea: {
        flex: 1,
        marginRight: 15,
        paddingLeft: 25,
        width: SCREEN_WIDTH - 20,
        marginBottom: 15,
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        bottom: 0
    },
    progressTime: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 10
    },
    answerAreaSingleText: {
        color: '#000000'
    },
    returnPage: {
        alignSelf: 'center',
        justifyContent: 'center',
    },
    returnPageText: {
        color: '#ffffff',
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 35
    },
    restartButtonArea: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    restartButton: {
        borderWidth: 0.5,
        borderColor: '#ffffff',
        borderRadius: 15,
        textAlign: 'center',
        color: '#ffffff',
        paddingTop: 15,
        paddingBottom: 15
    },
    clickableResultArea: {
        marginTop: 20,
        marginLeft: 35,
        marginRight: 20,
        borderRadius: 15
    },
    nextQuestionArea: {
        alignSelf: 'center',
        justifyContent: 'center',
    },
    nextQuestionTextStyle: {
        color: "#ffffff",
        fontSize: 24,
        textAlign: "center"
    },
    successText: {
        color: "#ffffff",
        fontSize: 30,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20
    }
});
