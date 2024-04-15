import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, ActivityIndicator, Text } from 'react-native';
import { searchMovies } from '../api';
import MovieCard from './MovieCard';

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  console.log("hello")

  const handleSearch = async () => {
    console.log('consiole');
    // if (!query) return;
    try {
      setLoading(true);
      const data = await searchMovies(query);
      setMovies(data);
      setLoading(false);
      setError('');
    } catch (error) {
      setError('An error occurred. Please try again.');
      setLoading(false);
    }
  };

  const renderMovieCard = ({ item }) => (
    <MovieCard
      movie={item}
      onPress={() => navigation.navigate('MovieDetails', { imdbID: item.imdbID })}
    />
  );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Search for movies"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      {loading && <ActivityIndicator size="large" style={{ marginTop: 20 }} />}
      {error ? <Text style={{ color: 'red', marginTop: 20 }}>{error}</Text> : null}
      <FlatList
        data={movies}
        renderItem={renderMovieCard}
        keyExtractor={(item) => item.imdbID}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

export default SearchScreen;
