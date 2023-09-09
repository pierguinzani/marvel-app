import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute, useNavigation } from '@react-navigation/native';
import { getComics } from '../../components/ApiJs';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import DefaltImg from '../../../assets/capaMarvel.png';

const getRandomYear = () => {
  const currentYear = new Date().getFullYear();
  return Math.floor(Math.random() * (currentYear - 1900 + 1)) + 1900;
};

const getRandomItemName = (items) => {
  if (items.length === 0) {
    return 'Carregando...';
  }
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex].name || items[randomIndex].title;
};

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
};

export default function ItemModal() {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params;
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const comicsData = await getComics();
        setComics(comicsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const isNotAvaliable = (path) => {
    return (
      path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.containerModal}>
        <View style={styles.imagemContainer}>
          {isNotAvaliable(item.thumbnail.path) ? (
            <Image style={styles.imagemModal} source={DefaltImg} />
          ) : (
            <Image
              style={styles.image}
              source={{
                uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
              }}
            />
          )}
          <LinearGradient
            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
            start={[0, 0]}
            end={[0, 1]}
            style={styles.gradientContainer}
          />
        </View>
        <TouchableOpacity
          style={styles.viewBotaoFechar}
          onPress={() => navigation.goBack()}
        >
          <Icon name="angle-left" size={30} color={'#fff'} />
        </TouchableOpacity>

        <View>
          <View style={styles.conteudoModal}>
            <Text style={styles.tituloModal} numberOfLines={2}>
              {item.name || item.title}
            </Text>
            <View style={styles.Containerdetalhes}>
              <View style={styles.detalheItem}>
                <Text style={styles.detalheNumero}>
                  {item.stories?.available ?? 0}
                </Text>
                <Text style={styles.detalheEspecifico}>Histórias</Text>
              </View>
              <View style={styles.detalheItem}>
                <Text style={styles.detalheNumero}>
                  {item.events?.available ?? 0}
                </Text>
                <Text style={styles.detalheEspecifico}>Eventos</Text>
              </View>
              <View style={styles.detalheItem}>
                <Text style={styles.detalheNumero}>
                  {item.series?.available ?? 0}
                </Text>
                <Text style={styles.detalheEspecifico}>Séries</Text>
              </View>
              <View style={styles.detalheItem}>
                <Text style={styles.detalheNumero}>
                  {item.comics?.available ?? 0}
                </Text>
                <Text style={styles.detalheEspecifico}>Quadrinhos</Text>
              </View>
            </View>
            <View style={styles.containerResumo}>
              <Text style={styles.resumo}>{item.description}</Text>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.viewTxtDataTime}>
                <Text style={styles.txtDataTime}>Data</Text>
                <Text style={styles.txtDataTime}>Linha do tempo</Text>
              </View>
              <View style={styles.infodata}>
                <View style={styles.viewRow}>
                  <Text style={styles.txtData}>{getRandomYear()}</Text>
                  <View style={styles.timelineContainer}>
                    <Text style={styles.txtTimelineOne}>
                      {truncateText(getRandomItemName(comics), 30)}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.infodata}>
                <View style={styles.viewRow}>
                  <Text style={styles.txtData}>{getRandomYear()}</Text>
                  <View style={styles.timelineContainer}>
                    <Text style={styles.txtTimelineTwo}>
                      {truncateText(getRandomItemName(comics), 30)}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.listQuad}>
            <Text style={styles.heading}>Quadrinhos</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.horizontalScrollView}
              showsVerticalScrollIndicator={false}
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
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
