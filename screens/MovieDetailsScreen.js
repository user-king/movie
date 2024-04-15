import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image, Dimensions } from 'react-native';
import { getMovieDetails } from '../api';

const MovieDetailsScreen = ({ route }) => {
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState('');
    const screenWidth = Dimensions.get('window').width;


    useEffect(() => {
        const fetchMovieDetails = async () => {
            setLoading(true);
            try {
                const data = await getMovieDetails(route.params.imdbID);
                setMovie(data);
            } catch (error) {
                setError('An error occurred. Please try again.');
            } finally {
                setLoading(false);
            }
        };
        fetchMovieDetails();
    }, [route.params.imdbID]);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'red' }}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>{movie?.Title}</Text>
            <Text style={{ fontSize: 16, marginBottom: 5 }}>Year: {movie?.Year}</Text>
            <Text style={{ fontSize: 16, marginBottom: 5 }}>Genre: {movie?.Genre}</Text>
            <Text style={{ fontSize: 16, marginBottom: 5 }}>Runtime: {movie?.Runtime}</Text>
            <Text style={{ fontSize: 16, marginBottom: 5 }}>Plot: {movie?.Plot}</Text>
            <Image source={{ uri: movie?.Poster }} style={{ width: screenWidth, height: 250, marginRight: 10, borderRadius: 5 }} resizeMode='contain' />

        </View>
    );
};

export default MovieDetailsScreen;
