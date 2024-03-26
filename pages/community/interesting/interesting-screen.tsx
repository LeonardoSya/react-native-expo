import React, { useCallback, useState } from 'react'
import { SafeAreaView, FlatList, View } from 'react-native'
import { Text, Divider } from '@rneui/themed'
import CardComponent from '@/components/card';
import { MySearchBar as SearchBar } from '@/components/search-bar'

const InterestingScreen: React.FC = () => {
    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = useCallback(async () => {
        setRefreshing(true)
        // ? ... fetch data
        setRefreshing(false)
    }, [])

    return (
        <SafeAreaView style={{ backgroundColor: "#fff", flex: 1, }}>
            <FlatList
                data={cardData}
                renderItem={({ item }) => (
                    <CardComponent item={item} />
                )}
                keyExtractor={item => item.id}
                ListHeaderComponent={() => (
                    <View>
                        <Text h2 style={{ flex: 0, left: 10, top: 20, color: "#8c8c8c" }}>Latest</Text>
                        <Text h2 style={{ flex: 0, left: 10, marginTop: 20, }}>nearby</Text>
                        <SearchBar />
                    </View>
                )}
                ItemSeparatorComponent={() => (
                    <Divider style={{ height: 10, width: "80%", left: "10%", alignItems: 'center' }} />
                )}
                contentContainerStyle={{ flexGrow: 1, }}
                ListFooterComponent={() => (
                    <Text style={{ flex: 1, textAlign: "center", }}>No results found</Text>
                )}
                refreshing={refreshing}
                onRefresh={onRefresh}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

const cardData = [
    // sample data
    {
        id: '1',
        avatarUri: 'https://randomuser.me/api/portraits/men/36.jpg',
        name: 'Leonar Zhang',
        date: 'Mar 25',
        imageUri: 'https://picsum.photos/300',
        title: 'Afternoon hike at Old Summer Palace Lake Loop',
        location: 'Old Summer Palace Lake Loop · Beijing',
        length: '6.68 km',
        time: '1h 38min',
        content: 'A big park. Some roads look like you can get through but actually you cannot. Better just follow the route!',
        likes: '12',
        comments: '2',
    },
    {
        id: '2',
        avatarUri: 'https://randomuser.me/api/portraits/men/36.jpg',
        name: 'Leonard Zhang',
        date: 'Mar 25',
        imageUri: 'https://picsum.photos/300',
        title: 'Afternoon hike at Old Summer Palace Lake Loop',
        location: 'Old Summer Palace Lake Loop · Beijing',
        length: '6.68 km',
        time: '1h 38min',
        content: 'A big park. Some roads look like you can get through but actually you cannot. Better just follow the route.',
        likes: '12',
        comments: '2',
    },
    {
        id: '3',
        avatarUri: 'https://randomuser.me/api/portraits/men/36.jpg',
        name: 'Leonard Zhang',
        date: 'Mar 25',
        imageUri: 'https://picsum.photos/300',
        title: 'Afternoon hike at Old Summer Palace Lake Loop',
        location: 'Old Summer Palace Lake Loop · Beijing',
        length: '6.68 km',
        time: '1h 38min',
        content: 'A big park. Some roads look like you can get through but actually you cannot. Better just follow the route.',
        likes: '12',
        comments: '2',
    },
];

export default InterestingScreen