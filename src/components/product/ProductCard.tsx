import { View, Text, Image } from "react-native";
import styles from "./ProductCard.style";
import Product from "../../models/Product";






interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product: productProp }: ProductCardProps) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: productProp.imgURL }} style={styles.productImage} />
            <Text style={styles.productTitle}>{productProp.title}</Text>
            {productProp.inStock 
            ? <Text style={[styles.productPrice,{color:"green"}]}>{productProp.price}</Text> 
            : <Text style={[styles.productPrice,{color:"red"}]}>STOKTA YOK</Text>}
        </View>
    );
};


export default ProductCard;