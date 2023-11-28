// ProductListScreen.js
import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import ProductItem from './ProductItem'; // Importez le composant ProductItem

class ProductListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/products/')
      .then(response => response.json())
      .then(data => {
        this.setState({ products: data, isLoading: false });
      })
      .catch(error => {
        console.error(error);
        this.setState({ isLoading: false });
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <Text>Chargement en cours...</Text>
        </View>
      );
    }

    return (
      <View>
        <FlatList
          data={this.state.products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductItem product={item} /> 
          )}
        />
      </View>
    );
  }
}

export default ProductListScreen;
