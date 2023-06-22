import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w", 
        screen: "EatsScreen", // Change in future...
    }
   
]
    
const NavOptions = () => {

    const navigation = useNavigation();

  return (
    <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({item}) => (
            <TouchableOpacity 
                onPress={() => navigation.navigate(item.screen)}
                style={tw`bg-gray-200 p-2 pl-6 pb-8 pt-4 w-40 m-2`}
            >
                <View>
                    <Image
                        style={{width:120, height:120, resizeMode: "contain"}}
                        source= {{uri: item.image}}
                    />
                    <Text style={tw`text-black mt-2 font-semibold text-lg`}>{item.title}</Text>
                    <Icon 
                        style={tw`mt-2 bg-white rounded-full w-10 mt-4`}
                        name="arrowright"
                        color="black"
                        type="antdesign"
                    />
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions