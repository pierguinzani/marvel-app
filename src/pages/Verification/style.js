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
    marginTop: '12%',
    maxWidth: 270,
  },
  subTitle: {
    alignSelf: 'center',
    textAlign: 'center',
    color: CustomStyles.DarkGrayColor,
    maxWidth: 280,
    marginTop: '2%',
  },
  label: {
    color: CustomStyles.DarkGrayColor,
    marginTop: '7%',
    marginBottom: '4%',
    marginLeft: '6%',
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  code: {
    borderWidth: 1,
    borderColor: CustomStyles.DarkGrayColor,
    borderRadius: 8,
    width: 50,
    height: 50,
    textAlign: 'center',
    color: CustomStyles.DarkGrayColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
  codeGradient: {
    borderRadius: 8,
  },
  resendCode: {
    alignItems: 'flex-end',
    marginRight: '5%',
    marginTop: '5%',
    marginBottom: '8%',
  },
  CodeText: {
    color: CustomStyles.DarkGrayColor,
  },
});
