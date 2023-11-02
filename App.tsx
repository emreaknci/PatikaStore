
import {
  Text,
  View,
} from 'react-native';
import SearchBar from './src/components/searchBar/SearchBar';
import ProductList from './src/components/productList/ProductList';




const App = () => {
  return (
    <View style={{margin:10}}>
      <Text style={{color:"purple",fontWeight:"bold",fontSize:32}}>PATIKA STORE</Text>
      <SearchBar/>
      <ProductList/>
    </View>
  );
};

export default App;
