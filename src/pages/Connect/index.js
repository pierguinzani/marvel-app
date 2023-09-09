import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import GradientButton from '../../components/GradientButton';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CustomStyles } from '../../CustomStyles';

export default function Connect() {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailIconColor, setEmailIconColor] = useState(
    CustomStyles.DarkGrayColor,
  );
  const [passwordIconColor, setPasswordIconColor] = useState(
    CustomStyles.DarkGrayColor,
  );
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [storedPassword, setStoredPassword] = useState('');

  useEffect(() => {
    const fetchStoredPassword = async () => {
      const newPassword = await AsyncStorage.getItem('novaSenha');
      if (newPassword) {
        setStoredPassword(newPassword);
      }
    };

    fetchStoredPassword();
  }, []);

  const handlePress = () => {
    navigation.navigate('Register');
  };

  const handlePressForgort = () => {
    navigation.navigate('Forgot');
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailError(false);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordError(false);
  };

  const handleLogin = async () => {
    const registeredPassword = await AsyncStorage.getItem('registeredPassword');

    if (email === 'teste@teste.com') {
      if (password === 'teste123') {
        navigation.navigate('Home');
      } else {
        setPasswordError(true);
      }
    } else if (password === registeredPassword) {
      setPasswordError(false);
      navigation.navigate('Home');
    } else {
      setEmailError(true);
      setPasswordError(true);
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
              <View style={styles.viewContainer}>
                <View style={styles.viewTitle}>
                  <Text style={styles.title}>Faça Login</Text>
                  <Text style={styles.subTitle}>Seja bem-vindo novamente.</Text>
                </View>
                <View style={styles.form}>
                  <View>
                    <Text style={styles.label}>Usuário</Text>
                    <View>
                      <LinearGradient
                        colors={['#4F4F4F', 'rgba(255, 255, 255, 0.0)']}
                        start={[0, 0]}
                        end={[1, 0]}
                        style={styles.labelContainer}
                      >
                        <View style={styles.inputContainer}>
                          <AntDesign
                            name="user"
                            size={20}
                            style={[
                              styles.icon,
                              {
                                color: emailError
                                  ? CustomStyles.DarkRedColor
                                  : emailIconColor,
                              },
                            ]}
                          />
                          <TextInput
                            style={styles.input}
                            placeholder="tecnologia@pontua.com.br"
                            placeholderTextColor={CustomStyles.DarkGrayColor}
                            onChangeText={(text) => {
                              setEmail(text);
                              setEmailIconColor(
                                emailError
                                  ? CustomStyles.DarkRedColor
                                  : CustomStyles.SpringGreenColor,
                              );
                              setEmailError(false);
                            }}
                            onFocus={() =>
                              setEmailIconColor(CustomStyles.SpringGreenColor)
                            }
                            onBlur={() =>
                              setEmailIconColor(
                                emailError
                                  ? CustomStyles.DarkRedColor
                                  : CustomStyles.DarkGrayColor,
                              )
                            }
                          />
                        </View>
                      </LinearGradient>
                      {emailError && (
                        <Text style={styles.errorText}>e-mail incorreto</Text>
                      )}
                    </View>
                    <Text style={styles.label}>Senha</Text>
                    <View style={styles.passwordInputContainer}>
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
                                color: passwordError
                                  ? CustomStyles.DarkRedColor
                                  : passwordIconColor,
                              },
                            ]}
                          />
                          <TextInput
                            style={styles.input}
                            placeholder="senha"
                            placeholderTextColor={CustomStyles.DarkGrayColor}
                            secureTextEntry={!passwordVisible}
                            onChangeText={(text) => {
                              setPassword(text);
                              setPasswordIconColor(
                                passwordError
                                  ? CustomStyles.DarkRedColor
                                  : CustomStyles.SpringGreenColor,
                              );
                              setPasswordError(false);
                            }}
                            onFocus={() =>
                              setPasswordIconColor(
                                CustomStyles.SpringGreenColor,
                              )
                            }
                            onBlur={() =>
                              setPasswordIconColor(
                                passwordError
                                  ? CustomStyles.DarkRedColor
                                  : CustomStyles.DarkGrayColor,
                              )
                            }
                          />
                        </View>
                      </LinearGradient>
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
                    {passwordError && (
                      <Text style={styles.errorText}>senha incorreta</Text>
                    )}
                  </View>
                </View>
                <View style={styles.forgotContainer}>
                  <TouchableOpacity>
                    <Text onPress={handlePressForgort} style={styles.forgot}>
                      Esqueci minha senha
                    </Text>
                  </TouchableOpacity>
                </View>
                <GradientButton
                  title="entrar"
                  colors={[
                    CustomStyles.DarkRedColor,
                    CustomStyles.DarkMagentaColor,
                  ]}
                  onPress={handleLogin}
                />
                <View style={styles.containerLine}>
                  <LinearGradient
                    colors={['rgba(255, 255, 255, 0.2)', '#D9D9D9']}
                    start={[0, 0]}
                    end={[1, 0]}
                    style={styles.lineGradient}
                  >
                    <View style={styles.line} />
                  </LinearGradient>
                  <Text style={styles.textLine}>Faça login com</Text>
                  <LinearGradient
                    colors={['#D9D9D9', 'rgba(255, 255, 255, 0.2)']}
                    start={[0, 0]}
                    end={[1, 0]}
                    style={styles.lineGradient}
                  >
                    <View style={styles.line} />
                  </LinearGradient>
                </View>
                <View style={styles.socialNetwork}>
                  <LinearGradient
                    colors={['#4F4F4F', 'rgba(255, 255, 255, 0)']}
                    start={[0, 0]}
                    end={[1, 1.5]}
                    style={styles.containerSocial}
                  >
                    <Image
                      source={require('../../../assets/google.png')}
                      style={styles.social}
                    />
                  </LinearGradient>
                  <LinearGradient
                    colors={['#4F4F4F', 'rgba(255, 255, 255, 0)']}
                    start={[0, 0]}
                    end={[1, 1.5]}
                    style={styles.containerSocial}
                  >
                    <Image
                      source={require('../../../assets/apple.png')}
                      style={styles.social}
                    />
                  </LinearGradient>
                  <LinearGradient
                    colors={['#4F4F4F', 'rgba(255, 255, 255, 0)']}
                    start={[0, 0]}
                    end={[1, 1.5]}
                    style={styles.containerSocial}
                  >
                    <Image
                      source={require('../../../assets/face.png')}
                      style={styles.social}
                    />
                  </LinearGradient>
                </View>
                <View style={styles.containerLine}>
                  <LinearGradient
                    colors={['rgba(255, 255, 255, 0.2)', '#D9D9D9']}
                    start={[0, 0]}
                    end={[1, 0]}
                    style={styles.lineGradient}
                  >
                    <View style={styles.line} />
                  </LinearGradient>
                  <Text style={styles.textLine}>Cadastre-se</Text>
                  <LinearGradient
                    colors={['#D9D9D9', 'rgba(255, 255, 255, 0.2)']}
                    start={[0, 0]}
                    end={[1, 0]}
                    style={styles.lineGradient}
                  >
                    <View style={styles.line} />
                  </LinearGradient>
                </View>
                <GradientButton
                  title="cadastrar"
                  colors={[
                    CustomStyles.DarkRedColor,
                    CustomStyles.DarkMagentaColor,
                  ]}
                  onPress={handlePress}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
