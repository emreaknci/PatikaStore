import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles  from "./Searchbar.style";

const SearchBar = () => {
    const [value, onChangeText] = useState('');
    return (
        <View>
            <TextInput
                editable
                multiline
                placeholder="Search..."
                onChangeText={text => onChangeText(text)}
                value={value}
                style={styles.searchBar}
                autoFocus={false}
            />
        </View>
    )
}
export default SearchBar;