import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
  },
  containerInfosTitle: {
    paddingHorizontal: 20,
  },
  containerConteudo: {
    paddingLeft: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 25,
    color: '#F2264B',
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
  logoMarvel: {
    alignSelf: 'center',
    marginTop: '4%',
  },
  ViewTitles: {
    marginTop: 30,
  },
  txtTitle: {
    color: '#B7B7C8',
    fontSize: 16,
    fontWeight: '600',
  },
  txtTitleBig: {
    color: '#313140',
    fontSize: 35,
    maxWidth: '70%',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  txtDescription: {
    color: '#B7B7C8',
    fontSize: 16,
    fontWeight: '600',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(23, 23, 27, 0.5)',
    bottom: 0,
    borderRadius: 30,
  },
  modalContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 5,
    borderRadius: 15,
    height: 50,
    position: 'relative',
  },
  closeButton: {
    marginBottom: '5%',
  },
  searchInput: {
    flex: 1,
  },
  btnSearch: {
    position: 'absolute',
    right: '6%',
    marginTop: '4%',
  },

  btnIcon: {
    position: 'absolute',
    right: 10,
  },
  listaAll: {
    marginTop: 10,
  },
  characterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(49, 49, 64, 1)',
    padding: 15,
    borderRadius: 20,
  },
  containerImgIcon: {
    flexDirection: 'row',
  },
  characterImage: {
    width: 130,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  itemSeparator: {
    height: 10,
  },
  viewNameDresc: {
    marginLeft: 10,
    maxWidth: '50%',
  },
  characterName: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  characterDescription: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '300',
  },
  noResultsMessage: {
    color: '#000',
    alignSelf: 'center',
  },
});
