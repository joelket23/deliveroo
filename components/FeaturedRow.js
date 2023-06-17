import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import sanityClient, { urlFor } from '../sanity';

const FeaturedRow = ({ id, title, description }) => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  useEffect(() => {
    async function fetchData() {
      //   const posts = await sanityClient.fetch(`*[_type == "featured" && _id=="${id}"]{
      //     ...,
      //     restaurants[]->{
      //       ...,
      //       dishes[]->,
      //         type->{
      //         namae
      //         }
      //     },
      //       }[0]
      //   `);
      const posts = await sanityClient.fetch(
        `*[_type == "featured" && _id== $id]{
            ...,
            restaurants[]->{
              ...,
              dishes[]->,
                type->{
                namae
                }
            },
              }[0]
          `,
        { id }
      );
      setRestaurantDetails(posts?.restaurants);
    }
    fetchData();
  }, []);
  
  return (
    <View>
      <View className="mt-4 flex-row justify-between items-center px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="pt-4"
      >
        {/* RestaurantCards .... */}

        {restaurantDetails?.map((item) => (
              <RestaurantCard
                id={item?._id}
                key={item?._id}
                imgUrl={item?.image?.asset?._ref}
                title={item?.title}
                rating={item?.rating}
                genre={item?.type?.name}
                address={item?.address}
                short_description={item?.short_description}
                dishes={item?.dishes}
                long={item?.long}
                lat={item?.lat}
              />
            ))
          }
       
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
