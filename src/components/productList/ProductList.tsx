import { View, Text, FlatList } from "react-native";
import ProductCard from "../product/ProductCard";
import products from "../../services/data.json";


const ProductList = () => {


    return (
        <FlatList
            keyExtractor={item=>item.id.toString()}
            data={products}
            renderItem={({ item }) => <ProductCard product={item} />}
            numColumns={2}
            horizontal={false}
        />
    );
};
export default ProductList;