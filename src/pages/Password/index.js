import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, Ionicons } from '@expo/vector-icons';
import GradientButton from '../../components/GradientButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CustomStyles } from '../../CustomStyles';
import styles from './style';

export default function Password() {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isPasswordInputFocused, setIsPasswordInputFocused] = useState(false);
  const [isConfirmPasswordInputFocused, setIsConfirmPasswordInputFocused] =
    useState(false);

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError('senha inválida');
    } else {
      setPasswordError('');
    }
  };

  const validateConfirmPassword = () => {
    if (confirmPassword !== password) {
      setConfirmPasswordError('as senhas não coincidem');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordError('');
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    setConfirmPasswordError('');
  };

  const handleCreatePassword = async () => {
    if (password.length >= 6 && password === confirmPassword) {
      await AsyncStorage.setItem('registeredPassword', password);
      navigation.navigate('Connect', { novaSenha: password });
    } else {
      validatePassword();
      validateConfirmPassword();
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
                <Text style={styles.title}>Redefinição de Senha</Text>
                <Text style={styles.subTitle}>
                  Por favor, escolha uma nova senha para a sua conta.
                  Certifique-se de criar uma senha segura e única.
                </Text>
                <View style={styles.form}>
                  <View>
                    <Text style={styles.label}>Senha</Text>
                    <View>
                      <LinearGradient
                        colors={['#4F4F4F', 'rgba(255, 255, 255, 0.0)']}
                        start={[0, 0]}
                        end={[1, 0]}
                        style={styles.labelContainer}
                      >
                        <View style={styles.inputContainer}>
                          <Feather
                            name="key"
                            size={20}
                            style={[
                              styles.icon,
                              {
                                color: isPasswordInputFocused
                                  ? CustomStyles.SpringGreenColor
                                  : passwordError
                                  ? CustomStyles.DarkRedColor
                                  : CustomStyles.DarkGrayColor,
                              },
                            ]}
                          />
                          <TextInput
                            style={styles.input}
                            placeholderTextColor={CustomStyles.DarkGrayColor}
                            placeholder="Senha"
                            secureTextEntry={!passwordVisible}
                            value={password}
                            onChangeText={handlePasswordChange}
                            onBlur={() => {
                              setIsPasswordInputFocused(false);
                              validatePassword();
                            }}
                            onFocus={() => setIsPasswordInputFocused(true)}
                          />
                          <TouchableOpacity
                            onPress={() => setPasswordVisible(!passwordVisible)}
                            style={styles.passwordToggleIcon}
                          >
                            <Ionicons
                              name={
                                passwordVisible
                                  ? 'md-eye-outline'
                                  : 'md-eye-off-outline'
                              }
                              size={24}
                              style={styles.icon}
                            />
                          </TouchableOpacity>
                        </View>
                      </LinearGradient>

                      {passwordError ? (
                        <Text style={styles.errorText}>{passwordError}</Text>
                      ) : null}
                    </View>
                    <Text style={styles.label}>Confirmação da nova senha</Text>
                    <LinearGradient
                      colors={['#4F4F4F', 'rgba(255, 255, 255, 0.0)']}
                      start={[0, 0]}
                      end={[1, 0]}
                      style={styles.labelContainer}
                    >
                      <View style={styles.inputContainer}>
                        <Feather
                          name="key"
                          size={20}
                          style={[
                            styles.icon,
                            {
                              color: isConfirmPasswordInputFocused
                                ? CustomStyles.SpringGreenColor
                                : confirmPasswordError
                                ? CustomStyles.DarkRedColor
                                : CustomStyles.DarkGrayColor,
                            },
                          ]}
                        />
                        <TextInput
                          style={styles.input}
                          placeholderTextColor={CustomStyles.DarkGrayColor}
                          placeholder="Confirmação da nova senha"
                          secureTextEntry={!passwordVisible}
                          value={confirmPassword}
                          onChangeText={handleConfirmPasswordChange}
                          onBlur={() => {
                            setIsConfirmPasswordInputFocused(false);
                            validateConfirmPassword();
                          }}
                          onFocus={() => setIsConfirmPasswordInputFocused(true)}
                        />
                        <TouchableOpacity
                          onPress={() => setPasswordVisible(!passwordVisible)}
                          style={styles.passwordToggleIcon}
                        >
                          <Ionicons
                            name={
                              passwordVisible
                                ? 'md-eye-outline'
                                : 'md-eye-off-outline'
                            }
                            size={24}
                            style={styles.icon}
                          />
                        </TouchableOpacity>
                      </View>
                    </LinearGradient>

                    {confirmPasswordError ? (
                      <Text style={styles.errorText}>
                        {confirmPasswordError}
                      </Text>
                    ) : null}
                  </View>
                </View>
              </View>
            </View>
            <GradientButton
              title="Criar nova senha"
              colors={[
                CustomStyles.DarkRedColor,
                CustomStyles.DarkMagentaColor,
              ]}
              onPress={handleCreatePassword}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
