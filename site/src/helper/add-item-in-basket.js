import { useState, useEffect } from 'react';


export const useBasket = () => {
  let initialBasketItems = [];
  const localStorageKey = 'basketItems';

  // const storedBasketItems = localStorage.getItem(localStorageKey);
  // if (storedBasketItems) {
  //   initialBasketItems = JSON.parse(storedBasketItems);
  // }

  const [items, setItems] = useState(initialBasketItems);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(items));
  }, [items]);

  const getBasketItemsLength = () => items.length;

  const addItemToBasket = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };
  const itemCounts = {};


  const removeItemFromBasket = (itemId) => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      const index = newItems.findIndex(item => item.description === itemId);
  
      if (index !== -1) {
        if (itemCounts[itemId] > 1) {
          itemCounts[itemId]--;
        } else {
          newItems.splice(index, 1);
          delete itemCounts[itemId];
        }
      }
  
      return newItems;
    });
  };

  const removeAllItemsFromBasket = (itemId) => {
    setItems((prevItems) => {
      const newItems = prevItems.filter(item => item.description !== itemId);
      return newItems;
    });
  };

  return {
    items,
    getBasketItemsLength,
    addItemToBasket,
    removeItemFromBasket,
    removeAllItemsFromBasket
  };
};
