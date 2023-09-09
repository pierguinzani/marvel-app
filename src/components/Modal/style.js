import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  containerModal: {
    flex: 1,
    backgroundColor: '#000',
    position: 'relative',
  },
  gradientContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  imagemContainer: {
    position: 'relative',
    height: 400,
  },
  imagemModal: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  conteudoModal: {
    paddingHorizontal: 20,
    marginTop: -100,
  },
  tituloModal: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: '5%',
    width: '80%',
    color: '#fff',
  },

  Containerdetalhes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detalheItem: {
    alignItems: 'center',
  },
  detalheNumero: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  },
  detalheEspecifico: {
    color: '#fff',
    fontSize: 16,
  },
  viewBotaoFechar: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
  },
  resumo: {
    color: 'rgba(188, 193, 205, 1)',
    fontSize: 16,
    marginTop: '6%',
  },
  infoContainer: {
    flexDirection: 'column',
    marginTop: 20,
  },
  viewRow: {
    flexDirection: 'row',
    gap: 50,
  },
  viewTxtDataTime: {
    flexDirection: 'row',
    gap: 50,
  },
  txtDataTime: {
    color: 'rgba(188, 193, 205, 1)',
    marginBottom: 10,
  },
  txtData: {
    color: '#fff',
    fontSize: 16,
  },
  timelineContainer: {
    flex: 1,
    maxWidth: '75%',
  },
  txtTimelineOne: {
    color: '#fff',
    backgroundColor: 'rgba(242, 38, 75, 1)',
    fontSize: 18,
    padding: 8,
    borderRadius: 13,
    marginBottom: 10,
  },
  txtTimelineTwo: {
    color: '#fff',
    backgroundColor: 'rgba(49, 49, 64, 1)',
    fontSize: 18,
    padding: 8,
    borderRadius: 13,
  },

  listQuad: {
    paddingLeft: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 25,
    color: '#fff',
  },
  horizontalScrollView: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: 140,
    height: 230,
    borderRadius: 50,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 30,
  },
  nameItems: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 8,
    width: '60%',
  },
});
