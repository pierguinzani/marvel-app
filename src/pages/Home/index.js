import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import {
  searchCharacter,
  getCharacters,
  getComics,
  getSeries,
  getEvents,
} from '../../components/ApiJs';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import styles from './style';
import DefaltImg from '../../../assets/capaMarvel.png';

export default function Home() {
  const navigation = useNavigation();
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);
  const [series, setSeries] = useState([]);
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const fetchData = async () => {
    try {
      const charactersData = await getCharacters();
      setCharacters(charactersData);

      const comicsData = await getComics();
      setComics(comicsData);

      const seriesData = await getSeries();
      setSeries(seriesData);

      const eventsData = await getEvents();
      setEvents(eventsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSearchButtonPress = async () => {
    try {
      const results = await Promise.all([searchCharacter(searchTerm)]);
      setSearchData({
        characters: results[0],
      });

      if (results[0].length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }

      setSelectedItem(null);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const abrirModal = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
  };

  const fecharModal = () => {
    setIsModalVisible(false);
  };

  const formatImage = (item) => {
    console.log(item.thumbnail);
    return `${item.thumbnail.path}.${item.thumbnail.extension}`;
  };

  const isNotAvaliable = (path) => {
    return (
      path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
    );
  };


  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerInfosTitle}>
          <TouchableOpacity style={styles.btnSearch} onPress={abrirModal}>
            <Icon name="search" size={20} />
          </TouchableOpacity>
          <View style={styles.logoMarvel}>
            <Svg width={95} height={35} viewBox="0 0 95 35" fill="none">
              <Defs>
                <LinearGradient
                  id="logoGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <Stop offset="0%" stopColor="#ED1D24" />
                  <Stop offset="100%" stopColor="#ED1F69" />
                </LinearGradient>
              </Defs>
              <Path
                d="M82.5499 6.38066V0.00476114H65.196L62.3421 21.3053L59.518 0.00486458H53.2599L53.9609 5.68855C53.2381 4.23252 50.6759 0.00486458 45.0374 0.00486458C45.0002 0.00238059 38.7708 0.00486458 38.7708 0.00486458L38.7468 31.0521L34.1854 0.00486458L25.9894 0L21.2705 32.1692L21.273 0.0046577H13.4289L10.6011 18.0742L7.84662 0.00486458H0V34.9781H6.17906V18.121L8.98978 34.9776H12.2748L15.046 18.121V34.9776H26.9582L27.681 29.5962H32.477L33.1974 34.9776L44.8923 34.985H44.9018V34.9776H44.9091H44.9164V23.6253L46.3501 23.4118L49.3183 34.985H49.3255H55.3602H55.3673L55.3649 34.9776H55.3756H55.3829L51.4878 21.4133C53.4618 19.9206 55.6905 16.1299 55.0973 12.5036V12.5012C55.1044 12.5503 58.7738 35 58.7738 35L65.9682 34.9776L70.8841 3.27732V34.9777H82.5502V28.6878H77.0125V20.6669H82.5502V14.2812H77.0125V6.38066H82.5499ZM28.4089 24.0502L30.1054 9.09856L31.8669 24.0502H28.4089ZM46.3702 17.1464C45.8946 17.3822 45.3988 17.5001 44.9161 17.5001V6.25056C44.9245 6.25056 44.9342 6.24828 44.9462 6.24828C45.4301 6.2458 49.038 6.39794 49.038 11.8139C49.038 14.647 47.8109 16.432 46.3702 17.1464ZM95 28.6829V34.9728H83.6196V0H89.7471V28.6829H95Z"
                fill="url(#logoGradient)"
              />
            </Svg>
            <View>
              <Modal
                visible={isModalVisible}
                animationType="slide"
                onRequestClose={fecharModal}
              >
                <View style={styles.modalContainer}>
                  <TouchableOpacity
                    onPress={fecharModal}
                    style={styles.closeButton}
                  >
                    <Icon name="close" size={25} color="black" />
                  </TouchableOpacity>
                  <View style={styles.modalContent}>
                    <View style={styles.searchInputContainer}>
                      <TextInput
                        style={styles.searchInput}
                        placeholder="Faça sua busca"
                        placeholderTextColor="#000"
                        value={searchTerm}
                        onChangeText={setSearchTerm}
                      />
                      <TouchableOpacity
                        style={styles.btnIcon}
                        onPress={onSearchButtonPress}
                      >
                        <Icon name="search" size={28} />
                      </TouchableOpacity>
                    </View>

                    <View style={styles.listaAll}>
                      {searchData.characters &&
                      searchData.characters.length === 0 ? (
                        <Text style={styles.noResultsMessage}>
                          Nenhum resultado encontrado
                        </Text>
                      ) : (
                        <FlatList
                          data={searchData.characters}
                          keyExtractor={(character) => character.id.toString()}
                          renderItem={({ item: character }) => (
                            <TouchableOpacity
                              style={styles.characterContainer}
                              onPress={() =>
                                navigation.navigate('ItemModal', {
                                  item: character,
                                })
                              }
                            >
                              <View style={styles.containerImgIcon}>
                                {isNotAvaliable(character.thumbnail.path) ? (
                                  <Image
                                    style={styles.characterImage}
                                    source={DefaltImg}
                                  />
                                ) : (
                                  <Image
                                    style={styles.characterImage}
                                    source={{
                                      uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
                                    }}
                                  />
                                )}
                                <View style={styles.viewNameDresc}>
                                  <Text style={styles.characterName}>
                                    {character.name}
                                  </Text>
                                  <Text
                                    style={styles.characterDescription}
                                    numberOfLines={6}
                                  >
                                    {character.description || 'Sem descrição.'}
                                  </Text>
                                </View>
                              </View>

                              <TouchableOpacity>
                                <Icon
                                  name="angle-right"
                                  size={40}
                                  color={'#fff'}
                                />
                              </TouchableOpacity>
                            </TouchableOpacity>
                          )}
                          ItemSeparatorComponent={() => (
                            <View style={styles.itemSeparator} />
                          )}
                        />
                      )}
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
          <View style={styles.ViewTitles}>
            <Text style={styles.txtTitle}>Bem vindo ao Pontua Marvel</Text>
            <Text style={styles.txtTitleBig}>Escolha o seu personagem</Text>
            <Text style={styles.txtDescription}>
              O Universo Marvel é o universo compartilhado onde ocorrem as
              histórias na maioria dos títulos de quadrinhos americanos e outras
              mídias publicadas pela Marvel Entertainment.
            </Text>
          </View>
        </View>
        <View style={styles.containerConteudo}>
          <Text style={styles.heading}>Heróis</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScrollView}
          >
            {characters.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate('ItemModal', { item })}
              >
                <View key={item.id} style={styles.itemContainer}>
                  <View style={styles.imageContainer}>
                    {isNotAvaliable(item.thumbnail.path) ? (
                      <Image style={styles.image} source={DefaltImg} />
                    ) : (
                      <Image
                        style={styles.image}
                        source={{
                          uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                        }}
                      />
                    )}
                    <View style={styles.gradientOverlay}></View>
                    <Text
                      style={styles.nameItems}
                      numberOfLines={2}
                      ellipsizeMode="tail"
                    >
                      {item.name}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text style={styles.heading}>Quadrinhos</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScrollView}
          >
            {comics.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate('ItemModal', { item })}
              >
                <View key={item.id} style={styles.itemContainer}>
                  <View style={styles.imageContainer}>
                    {isNotAvaliable(item.thumbnail.path) ? (
                      <Image style={styles.image} source={DefaltImg} />
                    ) : (
                      <Image
                        style={styles.image}
                        source={{
                          uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                        }}
                      />
                    )}

                    <View style={styles.gradientOverlay}></View>
                    <Text
                      style={styles.nameItems}
                      numberOfLines={2}
                      ellipsizeMode="tail"
                    >
                      {item.title}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text style={styles.heading}>series</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScrollView}
          >
            {series.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate('ItemModal', { item })}
              >
                <View key={item.id} style={styles.itemContainer}>
                  <View style={styles.imageContainer}>
                    {isNotAvaliable(item.thumbnail.path) ? (
                      <Image style={styles.image} source={DefaltImg} />
                    ) : (
                      <Image
                        style={styles.image}
                        source={{
                          uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                        }}
                      />
                    )}
                    <View style={styles.gradientOverlay}></View>
                    <Text
                      style={styles.nameItems}
                      numberOfLines={2}
                      ellipsizeMode="tail"
                    >
                      {item.title}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text style={styles.heading}>Eventos</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScrollView}
          >
            {events.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate('ItemModal', { item })}
              >
                <View key={item.id} style={styles.itemContainer}>
                  <View style={styles.imageContainer}>
                    {isNotAvaliable(item.thumbnail.path) ? (
                      <Image style={styles.image} source={DefaltImg} />
                    ) : (
                      <Image
                        style={styles.image}
                        source={{
                          uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                        }}
                      />
                    )}
                    <View style={styles.gradientOverlay}></View>
                    <Text
                      style={styles.nameItems}
                      numberOfLines={2}
                      ellipsizeMode="tail"
                    >
                      {item.title}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
