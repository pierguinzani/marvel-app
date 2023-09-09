import axios from 'axios';
import md5 from 'md5';

const API_BASE_URL = 'https://gateway.marvel.com/v1/public';
const API_PUBLIC_KEY = '60725a2c7b8f7bde15212ee248396272';
const API_PRIVATE_KEY = '8f61df52c500c29293fa02f988b0db6e66958d97';

const instance = axios.create({
  baseURL: API_BASE_URL,
});

const searchCharacter = async (searchTerm) => {
  const timestamp = new Date().getTime();
  const hash = md5(`${timestamp}${API_PRIVATE_KEY}${API_PUBLIC_KEY}`);

  try {
    const response = await instance.get('/characters', {
      params: {
        apikey: API_PUBLIC_KEY,
        ts: timestamp,
        hash: hash,
        nameStartsWith: searchTerm,
      },
    });
    return response.data.data.results;
  } catch (error) {
    throw error;
  }
};

const getCharacters = async () => {
  const timestamp = new Date().getTime();
  const hash = md5(`${timestamp}${API_PRIVATE_KEY}${API_PUBLIC_KEY}`);

  try {
    const response = await instance.get('/characters', {
      params: {
        apikey: API_PUBLIC_KEY,
        ts: timestamp,
        hash: hash,
      },
    });
    return response.data.data.results;
  } catch (error) {
    throw error;
  }
};

const getComics = async () => {
  const timestamp = new Date().getTime();
  const hash = md5(`${timestamp}${API_PRIVATE_KEY}${API_PUBLIC_KEY}`);

  try {
    const response = await instance.get('/comics', {
      params: {
        apikey: API_PUBLIC_KEY,
        ts: timestamp,
        hash: hash,
      },
    });
    return response.data.data.results;
  } catch (error) {
    throw error;
  }
};

const getSeries = async () => {
  const timestamp = new Date().getTime();
  const hash = md5(`${timestamp}${API_PRIVATE_KEY}${API_PUBLIC_KEY}`);

  try {
    const response = await instance.get('/series', {
      params: {
        apikey: API_PUBLIC_KEY,
        ts: timestamp,
        hash: hash,
      },
    });
    return response.data.data.results;
  } catch (error) {
    throw error;
  }
};

const getEvents = async () => {
  const timestamp = new Date().getTime();
  const hash = md5(`${timestamp}${API_PRIVATE_KEY}${API_PUBLIC_KEY}`);

  try {
    const response = await instance.get('/events', {
      params: {
        apikey: API_PUBLIC_KEY,
        ts: timestamp,
        hash: hash,
      },
    });
    return response.data.data.results;
  } catch (error) {
    throw error;
  }
};

export { searchCharacter, getCharacters, getComics, getSeries, getEvents };
