import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const MovieCard = ({ movie, onPress }) => {
  return (
    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', marginBottom: 10, borderRadius: 8, padding: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }} onPress={onPress}>
      <Image source={{ uri: movie.Poster }} style={{ width: 80, height: 120, marginRight: 10, borderRadius: 5 }} />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>{movie.Title}</Text>
        <Text style={{ color: '#777', marginBottom: 5 }}>{movie.Year}</Text>
        <Text style={{ fontSize: 14, color: '#555' }}>{movie.Type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
