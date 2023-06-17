import { View, Text, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import CategoryCard from './CategoryCard';
import sanityClient, { urlFor } from '../sanity';

const Categories = () => {
  const [categoriesDetail, setCategoriesDetail] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const posts = await sanityClient.fetch(`*[_type == "category"]`);
      setCategoriesDetail(posts);
    }
    fetchData();
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* categorycard */}
      {categoriesDetail.map((item) => (
        <CategoryCard
          key={item._id}
          imgUrl={urlFor(item.image.asset._ref).width(200).url()}
          title={item.title}
        />
      ))}

      {/* <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" /> */}
    </ScrollView>
  );
};

export default Categories;
