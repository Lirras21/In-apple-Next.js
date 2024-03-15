"use client"
import React, { useState, useEffect } from 'react';


function ProductItems({pathname}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(pathname)
  useEffect(() => {
    // Функція для завантаження даних з JSON-файлу на основі категорії
    const fetchProducts = async () => {
      try {
        // Формування шляху до JSON-файлу на основі категорії
        const jsonPath = `/data/${category}.json`;
        const response = await fetch(jsonPath); // Завантаження JSON-файлу
        const data = await response.json(); // Отримання даних з JSON-файлу
        setProducts(data[category]); // Збереження продуктів у стан
        setLoading(false); // Зміна стану завантаження
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false); // Зміна стану завантаження в разі помилки
      }
    };

    if (category) {
      fetchProducts(); // Виклик функції завантаження даних, якщо є категорія
    }
  }, [category]);

  // Перевірка процесу завантаження
  if (loading) {
    return <p>Loading...</p>;
  }

  // Відображення продуктів
  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          {/* Відображення деталей продукту */}
          <img src={product.src} alt={product.description} />
          <p>{product.description}</p>
          <p>{product.price}: {product.cost}</p>
          {/* Додайте інші деталі, які вам потрібно відобразити */}
        </div>
      ))}
    </div>
  );
}

export default ProductItems;
