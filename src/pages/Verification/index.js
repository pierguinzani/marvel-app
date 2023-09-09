import React, { useState, useEffect, useRef, createRef } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import GradientButton from '../../components/GradientButton';
import styles from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';
import { CustomStyles } from '../../CustomStyles';

export default function Verification() {
  const numFields = 4;
  const [verificationCodes, setVerificationCodes] = useState(
    Array(numFields).fill(''),
  );
  const [timer, setTimer] = useState(30);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  const [notificationSent, setNotificationSent] = useState(false);
  const inputRefs = useRef(verificationCodes.map(() => createRef()));
  const navigation = useNavigation();

  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });

    if (!notificationSent) {
      const newCode = generateRandomCode();
      Notifications.scheduleNotificationAsync({
        content: {
          title: 'Seu código de Verificação',
          body: newCode,
        },
        trigger: null,
      });
      setNotificationSent(true);
    }
  }, [notificationSent]);

  useEffect(() => {
    if (timer > 0 && isTimerVisible) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [timer, isTimerVisible]);

  const handleCodeChange = (index, code) => {
    const updatedCodes = [...verificationCodes];
    updatedCodes[index] = code;
    setVerificationCodes(updatedCodes);
    if (!code && index > 0) {
      inputRefs.current[index - 1].current.focus();
    } else if (code && index < numFields - 1) {
      inputRefs.current[index + 1].current.focus();
    }
  };

  const handleSendCode = () => {
    const newCode = generateRandomCode();
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Seu código de Verificação',
        body: newCode,
      },
      trigger: null,
    });

    setIsButtonDisabled(true);
    setTimer(30);
    setIsTimerVisible(true);

    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    setTimeout(() => {
      setIsButtonDisabled(false);
      setIsTimerVisible(false);
      clearInterval(intervalId);
    }, 30000);
  };

  const handleVerifyCode = () => {
    const isAllFieldsFilled = verificationCodes.every((code) => code !== '');
    if (isAllFieldsFilled) {
      navigation.navigate('Password');
    }
  };

  const generateRandomCode = () => {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    return code;
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/BlackPanther.png')}
        style={styles.image}
      />
      <View style={styles.loginBox}>
        <View style={styles.backgroundContainer}>
          <Image
            source={require('../../../assets/Background.png')}
            style={styles.backgroundColor}
          />
          <Image
            source={require('../../../assets/frontShapes1.png')}
            style={styles.frontShapes1}
          />
          <Image
            source={require('../../../assets/Saly.png')}
            style={styles.saly}
          />
          <Image
            source={require('../../../assets/frontShapes2.png')}
            style={styles.frontShapes2}
          />
        </View>
        <View style={styles.overlayContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.overlayContent}>
              <View style={styles.viewTitle}>
                <Text style={styles.title}>Verificação de identidade</Text>
                <Text style={styles.subTitle}>
                  Um e-mail contendo um código de verificação foi enviado para o
                  endereço de e-mail associado à sua conta. Insira o código
                  abaixo para continuar com a redefinição da sua senha.
                </Text>
                <Text style={styles.label}>Código</Text>
                <View style={styles.codeContainer}>
                  {verificationCodes.map((code, index) => (
                    <LinearGradient
                      key={index}
                      colors={['#4F4F4F', 'rgba(255, 255, 255, 0.0)']}
                      start={[0, 0]}
                      end={[1, 0]}
                      style={styles.codeGradient}
                    >
                      <TextInput
                        ref={inputRefs.current[index]}
                        style={styles.code}
                        keyboardType="number-pad"
                        maxLength={1}
                        value={code}
                        onChangeText={(text) => handleCodeChange(index, text)}
                      />
                    </LinearGradient>
                  ))}
                </View>
                <TouchableOpacity
                  onPress={handleSendCode}
                  disabled={isButtonDisabled}
                  style={styles.resendCode}
                >
                  <Text style={styles.CodeText}>
                    Reenviar código{' '}
                    {isTimerVisible && <Text>{timer} segundos</Text>}
                  </Text>
                </TouchableOpacity>
                <GradientButton
                  title="verificar código"
                  colors={[
                    CustomStyles.DarkRedColor,
                    CustomStyles.DarkMagentaColor,
                  ]}
                  style={styles.inputRegister}
                  onPress={handleVerifyCode}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
