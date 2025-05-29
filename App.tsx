import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Logo Cabrua */}
      <Image 
        source={require('./assets/logocabruca.png')} 
        style={styles.externalLogo}
        resizeMode="contain"
      />

      {/* Card Container */}
      <View style={styles.card}>
        {/* Imagem do chocolate */}
        <Image 
          source={require('./assets/amaro2.png')} 
          style={styles.productImage}
          resizeMode="contain"
        />

        {/* Descrição do produto */}
        <Text style={styles.productDescription}>Chocolate meio amargo</Text>
        <Text style={styles.productBrand}>Lacta Amaro - 40% cacau</Text>

        {/* Divisor */}
        <View style={styles.divider} />

        {/* Dados do produto */}
        <Text style={styles.sectionTitle}>Dados do Produto:</Text>
        <View style={styles.dataContainer}>
          <Text style={styles.dataLabel}>- Descrição</Text>
          <Text style={styles.dataLabel}>- Característica</Text>
          <Text style={styles.dataLabel}>- Lactose</Text>
          <Text style={styles.dataLabel}>- Tipo de açúcar</Text>
          <Text style={styles.dataLabel}>- Glúten</Text>
          <Text style={styles.dataLabel}>- Disponibilidade[Volume()]</Text>
          <Text style={styles.dataLabel}>- Lead Time</Text>
          <Text style={styles.dataLabel}>- Validade</Text>
          <Text style={styles.dataLabel}>- Certificados</Text>
          <Text style={styles.dataLabel}>- Premiações</Text>
          <Text style={styles.dataLabel}>- Tipo de embalagem gramatura</Text>
        </View>

        {/* Divisor */}
        <View style={styles.divider} />

        {/* Botão de comprar */}
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01923F',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 15,
    zIndex: 1,
    backgroundColor: '#FFAA39',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  externalLogo: {
    width: '100%',
    height: 160,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    width: '85%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#01923F',
    width: '100%',
    marginVertical: 10,
    opacity: 0.5,
  },
  productImage: {
    width: 120,
    height: 120,
    marginVertical: 8,
    alignSelf: 'center',
  },
  productDescription: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 4,
  },
  productBrand: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    color: '#000000',
    marginBottom: 8,
  },
  dataContainer: {
    marginLeft: 8,
  },
  dataLabel: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    color: '#000000',
    marginBottom: 4,
  },
  buyButton: {
    backgroundColor: '#FFAA39',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    marginTop: 8,
  },
  buyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
  },
});