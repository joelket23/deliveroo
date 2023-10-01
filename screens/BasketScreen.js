import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurat } from '../features/restaurantSlice';
import { selectBasketItems } from '../features/basketSlice';

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurat);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  )
}

export default BasketScreen