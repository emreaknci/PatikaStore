import { StyleSheet } from "react-native";

export default StyleSheet.create({
  cardContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ECEFF1',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    margin: 10,
    
  },
  productImage: {
    height: 200,
    width: '100%',
    borderRadius: 10,
    alignSelf: 'center',

  },
  productTitle: {
    marginTop: 5,
    fontSize: 16,
  },
  productPrice: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },

});