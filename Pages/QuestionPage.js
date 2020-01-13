import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, ProgressBarAndroid } from 'react-native';
import * as Animatable from 'react-native-animatable';
import StyleSheet from '../assets/Styles/QuestionPageStyle';

export default function QuestionPage() {
    const [resultScreen, setResultScreen] = useState(false);
    const [answerAnimation, setAnswerAnimation] = useState('fadeInDown');
    const [wrongAnswerStyle, setwrongAnswerStyle] = useState('#ffffff');
    const [trueAnswerStyle, settrueAnswerStyle] = useState('#ffffff');
    const [timerVisible, settimerVisible] = useState('flex');
    const [controlAnswer, setControlAnswer] = useState('');
    const [trueAnswer, setTrueAnswer] = useState('Bus');
    const [secondCounter, setsecondCounter] = useState(15);
    const [restartGame, setRestartGame] = useState(false);
    const [clickableStatus, setClickableStatus] = useState(false);
    const [landingScreenProperty, setLandingScreenProperty] = useState(false);
    const [nextQuestionSecond, setNextQuestionSecond] = useState(0);

    useEffect(() => {
        if (controlAnswer !== '') {
            setClickableStatus(true);

            if (controlAnswer === trueAnswer) {
                settrueAnswerStyle('#08db1a');

                if (nextQuestionSecond === 0 && !landingScreenProperty) {
                    setNextQuestionSecond(3);
                }

                setTimeout(() => {
                    setLandingScreenProperty(true);
                }, 2000);
            } else {
                settrueAnswerStyle('#08db1a');
                setwrongAnswerStyle('#C0C0C0');

                settimerVisible('none');
                setControlAnswer('');
                setsecondCounter(3);
            }
        } else if (secondCounter - 1 === 0) {
            setResultScreen(true);
        }

        if (landingScreenProperty) {
            setControlAnswer('');
            setsecondCounter(0);
            if (nextQuestionSecond > 0) {
                do {
                    setTimeout(() => {
                        setNextQuestionSecond(nextQuestionSecond - 1);
                    }, 1000);
                } while (nextQuestionSecond === 0);
            } else {
                setLandingScreenProperty(false);
                setwrongAnswerStyle('#ffffff');
                settrueAnswerStyle('#ffffff');
                settimerVisible('flex');
                setClickableStatus(false);

                setTimeout(() => {
                    setsecondCounter(15);
                }, 500);
            }
        }

        if (!resultScreen && controlAnswer === '') {
            if (secondCounter > 0) {
                do {
                    setTimeout(() => { setsecondCounter(secondCounter - 1) }, 1000);
                } while (secondCounter === 0 && controlAnswer !== '' && !landingScreenProperty);
            }
        }

        if (restartGame) {
            setResultScreen(false);
            setControlAnswer('');
            setwrongAnswerStyle('#ffffff');
            settrueAnswerStyle('#ffffff');
            setsecondCounter(15);
            setRestartGame(false);
            settimerVisible('flex');
            setClickableStatus(false);
            setLandingScreenProperty(false);
            setNextQuestionSecond(0);
        }
    });

    questionPage = () => {
        return (
            <View style={StyleSheet.body}>
                <Animatable.View style={StyleSheet.questionArea} animation='zoomIn'>
                    <Text style={StyleSheet.questionAreaText}>
                        Otobüs?
                    </Text>
                    <View style={[StyleSheet.progressArea, { display: timerVisible }]}>
                        <ProgressBarAndroid progress={1} styleAttr="Horizontal" color="#000000" />
                        <Text style={StyleSheet.progressTime}>{secondCounter} Second</Text>
                    </View>
                </Animatable.View>
                <View style={StyleSheet.answerArea}>
                    <Animatable.View style={[StyleSheet.answerAreaSingle, { backgroundColor: trueAnswerStyle }]} delay={500} animation={answerAnimation}>
                        <TouchableHighlight
                            disabled={clickableStatus}
                            onPress={() => setControlAnswer("Bus")}
                            underlayColor="#C0C0C0"
                            style={StyleSheet.clickableArea}
                        >
                            <Text style={StyleSheet.answerAreaSingleText}>
                                Bus
                            </Text>
                        </TouchableHighlight>
                    </Animatable.View>
                    <Animatable.View style={[StyleSheet.answerAreaSingle, { backgroundColor: wrongAnswerStyle }]} delay={700} animation={answerAnimation}>
                        <TouchableHighlight
                            disabled={clickableStatus}
                            onPress={() => setControlAnswer("Tram")}
                            underlayColor="#C0C0C0"
                            style={StyleSheet.clickableArea}
                        >
                            <Text style={StyleSheet.answerAreaSingleText}>
                                Tram
                            </Text>
                        </TouchableHighlight>
                    </Animatable.View>
                    <Animatable.View style={[StyleSheet.answerAreaSingle, { backgroundColor: wrongAnswerStyle }]} delay={900} animation={answerAnimation}>
                        <TouchableHighlight
                            disabled={clickableStatus}
                            onPress={() => setControlAnswer("Train")}
                            underlayColor="#C0C0C0"
                            style={StyleSheet.clickableArea}
                        >
                            <Text style={StyleSheet.answerAreaSingleText}>
                                Train
                            </Text>
                        </TouchableHighlight>
                    </Animatable.View>
                    <Animatable.View style={[StyleSheet.answerAreaSingle, { backgroundColor: wrongAnswerStyle }]} delay={1100} animation={answerAnimation}>
                        <TouchableHighlight
                            disabled={clickableStatus}
                            onPress={() => setControlAnswer("Car")}
                            underlayColor="#C0C0C0"
                            style={StyleSheet.clickableArea}
                        >
                            <Text style={StyleSheet.answerAreaSingleText}>
                                Car
                            </Text>
                        </TouchableHighlight>
                    </Animatable.View>
                    <Animatable.View style={[StyleSheet.answerAreaSingle, { backgroundColor: wrongAnswerStyle }]} delay={1300} animation={answerAnimation}>
                        <TouchableHighlight
                            disabled={clickableStatus}
                            onPress={() => setControlAnswer("Plane")}
                            underlayColor="#C0C0C0"
                            style={StyleSheet.clickableArea}
                        >
                            <Text style={StyleSheet.answerAreaSingleText}>
                                Plane
                            </Text>
                        </TouchableHighlight>
                    </Animatable.View>
                </View>
            </View>
        );
    }

    resultPage = () => {
        return (
            <View style={[StyleSheet.body, StyleSheet.returnPage]}>
                <Animatable.Text style={StyleSheet.returnPageText} animation='bounceIn'>Game Over!</Animatable.Text>
                <Animatable.View delay={900} animation='bounceIn' style={StyleSheet.restartButtonArea}>
                    <TouchableHighlight
                        onPress={() => setRestartGame(true)}
                        underlayColor="#C0C0C0"
                        style={StyleSheet.clickableResultArea}
                    >
                        <Text style={StyleSheet.restartButton}>
                            Restart
                        </Text>
                    </TouchableHighlight>
                </Animatable.View>
            </View>
        );
    }

    landingScreen = () => {
        return (
            <View style={[StyleSheet.body, StyleSheet.nextQuestionArea]}>
                <ProgressBarAndroid progress={1} styleAttr="Large" color="#ffffff" />
                <Animatable.Text style={StyleSheet.successText} animation='bounceIn' duration={1500}>GREAT!</Animatable.Text>
                <Text style={StyleSheet.nextQuestionTextStyle}>{nextQuestionSecond} second for next question.</Text>
            </View>
        );
    }

    if (resultScreen) {
        return this.resultPage();
    }

    if (landingScreenProperty) {
        return this.landingScreen();
    }

    return this.questionPage();
}
