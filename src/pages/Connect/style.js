import { StyleSheet } from 'react-native';
import { CustomStyles } from '../../CustomStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  loginBox: {
    height: '80%',
    alignItems: 'center',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backgroundColor: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  frontShapes1: {
    position: 'absolute',
    top: 14,
    left: 0,
  },
  saly: {
    position: 'absolute',
    right: 0,
    top: '2%',
  },
  frontShapes2: {
    position: 'absolute',
    right: 0,
    top: '10%',
  },
  overlayContainer: {
    paddingTop: '12%',
  },
  title: {
    textAlign: 'center',
    alignSelf: 'center',
    color: '#fff',
    fontSize: 40,
    marginTop: '10%',
  },
  subTitle: {
    textAlign: 'center',
    alignSelf: 'center',
    color: CustomStyles.DarkGrayColor,
    marginTop: '2%',
  },
  label: {
    color: CustomStyles.DarkGrayColor,
    marginTop: '2%',
  },
  labelContainer: {
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: CustomStyles.DimGrayColor,
    paddingHorizontal: 10,
    marginTop: 8,
    width: 330,
    height: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  input: {
    color: '#FFF',
    flex: 1,
  },
  icon: {
    color: CustomStyles.DarkGrayColor,
    marginRight: '3%',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordToggleIcon: {
    marginLeft: -40,
    marginTop: '4%',
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    marginRight: '2%',
    fontSize: 11,
    fontWeight: 500,
  },
  forgot: {
    color: CustomStyles.DarkGrayColor,
    marginTop: '17%',
  },
  containerLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  lineGradient: {
    flex: 1,
    height: 1,
  },
  line: {
    height: '100%',
    backgroundColor: 'transparent',
  },
  textLine: {
    color: CustomStyles.DarkGrayColor,
    marginHorizontal: 10,
  },
  socialNetwork: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSocial: {
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor:  CustomStyles.DimGrayColor,
    width: 60,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '5%',
  },
  social: {
    width: 30,
    height: 30,
    marginTop: '15%',
  },
  errorText: {
    position: 'absolute',
    right: 4,
    top: '100%',
    color: CustomStyles.DarkRedColor,
    fontSize: 12,
  },
});
