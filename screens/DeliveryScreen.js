import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurat } from '../features/restaurantSlice';
import { XMarkIcon } from 'react-native-heroicons/solid';
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurat);
  return (
    <View className="bg-[#00ccbb] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-6 z-50 shadow-md">
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>
        <View>
          <View className="bg-white mx-5 my-2 rounded-md p-5 ">
            <View className="flex-row justify-between">
              <View>
                <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                <Text className="text-4xl font-bold">45-55 Minutes</Text>
              </View>
              <Image
                source={{ uri: 'https://links.papareact.com/fls' }}
                className="h-20 w-20"
              />
            </View>
            <Text className="text-gray-500">
              Your order at {restaurant.title} is being prepared
            </Text>
          </View>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00ccbb"
        />
      </MapView>
      <SafeAreaView className="flex-row items-center bg-white space-x-5 h-28">
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className="rounded-full p-4 ml-5 bg-gray-300 h-12 w-12"
        />
        <View className="flex-1">
          <Text className="text-lg">Sunny shnaga</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-lg text-[#00ccbb] mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
