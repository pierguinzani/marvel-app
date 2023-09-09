import React, { useState } from 'react';
import { View, Image, Text, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import GradientButton from '../../components/GradientButton';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { CustomStyles } from '../../CustomStyles';

export default function Forgot() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const navigation = useNavigation();

  const handlePressVerification = () => {
    if (validateEmail(email)) {
      navigation.navigate('Verification');
    } else {
      setIsValidEmail(false);
      setButtonClicked(true);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
    if (!isValidEmail) {
      setIsValidEmail(true);
    }
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
                <Text style={styles.title}>Esqueci minha senha</Text>
                <Text style={styles.subTitle}>
                  Esqueceu sua senha? Não se preocupe. Preencha o campo abaixo
                  com o seu endereço de e-mail associado à sua conta, e
                  enviaremos um link para redefinir a sua senha.
                </Text>
                <View style={styles.form}>
                  <View>
                    <Text style={styles.label}>E-mail</Text>
                    <View
                      style={[
                        styles.inputContainer,
                        !isValidEmail && styles.invalidInput,
                        (isFocused || buttonClicked) &&
                          !isValidEmail && {
                            borderColor: CustomStyles.DarkRedColor,
                          },
                      ]}
                    >
                      <LinearGradient
                        colors={['#4F4F4F', 'rgba(255, 255, 255, 0.0)']}
                        start={[0, 0]}
                        end={[1, 0]}
                        style={styles.labelContainer}
                      >
                        <View style={styles.containerInput}>
                          <Feather
                            name="at-sign"
                            size={20}
                            style={[
                              styles.icon,
                              (isFocused || buttonClicked) && {
                                color: isValidEmail
                                  ? CustomStyles.SpringGreenColor
                                  : CustomStyles.DarkRedColor,
                              },
                            ]}
                          />
                          <View style={styles.inputWrapper}>
                            <TextInput
                              style={[
                                styles.input,
                                !isValidEmail && styles.invalidInput,
                                (isFocused || buttonClicked) &&
                                  !isValidEmail && {
                                    borderColor: CustomStyles.DarkRedColor,
                                  },
                              ]}
                              placeholder="tecnologia@pontua.com.br"
                              placeholderTextColor={CustomStyles.DarkGrayColor}
                              value={email}
                              onChangeText={handleEmailChange}
                              onFocus={handleInputFocus}
                              onBlur={handleInputBlur}
                            />
                          </View>
                        </View>
                      </LinearGradient>
                    </View>
                    {!isValidEmail && (
                      <Text
                        style={[styles.invalidText, styles.invalidTextVisible]}
                      >
                        E-mail inválido
                      </Text>
                    )}
                  </View>
                </View>
                <GradientButton
                  title="Enviar código"
                  colors={[
                    CustomStyles.DarkRedColor,
                    CustomStyles.DarkMagentaColor,
                  ]}
                  style={styles.inputRegister}
                  onPress={handlePressVerification}
                  icon={
                    <Feather
                      name="at-sign"
                      size={20}
                      style={[
                        styles.icon,
                        (isFocused || buttonClicked) && {
                          color: isValidEmail
                            ? CustomStyles.SpringGreenColor
                            : CustomStyles.DarkRedColor,
                        },
                      ]}
                    />
                  }
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
