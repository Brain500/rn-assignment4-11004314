import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ details, style, titleAlign, locationAndSalaryAlign, textColor }) => {
  return (
    <View style={[styles.cardContainer, style]}>
      <Image source={details.logo} style={styles.logo} />
      <View style={styles.infoContainer}>
        <Text style={[styles.title, titleAlign, { color: textColor }]}>{details.title}</Text>
        <Text style={[styles.salary, locationAndSalaryAlign, { color: textColor }]}>{details.salary}</Text>
        <Text style={[styles.location, locationAndSalaryAlign, { color: textColor }]}>{details.location}</Text>
        <Text style={[styles.company, { color: textColor }]}>{details.company}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
  company: {
    fontSize: 14,
    color: '#7D7D7D',
  },
  salary: {
    fontSize: 14,
    color: '#7D7D7D',
  },
  location: {
    fontSize: 12,
    color: '#B0B0B0',
  },
});

export default Card;
