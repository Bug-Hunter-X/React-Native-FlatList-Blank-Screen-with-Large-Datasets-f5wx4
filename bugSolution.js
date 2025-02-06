```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DATA = Array.from({ length: 1000 }, (_, i) => `Item ${i}`);

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadItems = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setItems(DATA);
      setLoading(false);
    };
    loadItems();
  }, []);

  const renderItem = ({ item }) => <Text style={styles.item}>{item}</Text>;

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      style={styles.list}
      windowSize={10} // Adjust as needed
      initialNumToRender={10} // Adjust as needed
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '100%',
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
export default App; 
```