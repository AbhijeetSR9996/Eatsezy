import React from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import DotsCarousel from '../../assets/svg/DotsCarousel.svg'
import { SCREEN_HEIGHT } from '../../global/constants';
import { slideList } from "../../Dummy/Dummy"
import { Colors } from '../../global';
const RestaurantCarousel = () => {
    const [index, setIndex] = React.useState(0);
    const indexRef = React.useRef(index);
    indexRef.current = index;
    const onScroll = React.useCallback((event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);

        const distance = Math.abs(roundIndex - index);

        // Prevent one pixel triggering setIndex in the middle
        // of the transition. With this we have to scroll a bit
        // more to trigger the index change.
        const isNoMansLand = 0.4 < distance;

        if (roundIndex !== indexRef.current && !isNoMansLand) {
            setIndex(roundIndex);
        }
    }, []);

    return (
        // <SafeAreaView>
        <FlatList
            data={slideList}
            extraData={slideList}
            keyExtractor={(item, idx0) => idx0.toString()}
            renderItem={({ item, idx0 }) => {
                return <View key={idx0} style={styles.container}>
                    <Image
                        source={item.imgUrl}
                        style={styles.coverImage}
                        resizeMode="cover"
                    />
                    {/* <View style={styles.dotsContainer}>
                        {slideList.map((item, idx) => {
                            if (idx === index) {
                                // Active Dot
                                return <DotsCarousel key={idx} height={8.33} width={25} style={{ color: Colors.PRIMARY, marginRight: 6.25 }} />
                            } else {
                                // Inactive Dot
                                return <DotsCarousel key={idx} height={4.17} width={12.5} style={{ color: '#FFFFFF', marginRight: 6.25 }} />
                            }
                        })}
                    </View> */}
                </View>
            }}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
        />
        // </SafeAreaView>
    );
}

export default RestaurantCarousel

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: SCREEN_HEIGHT / 3,
        backgroundColor: "red"
    },
    coverImage: {
        width: '100%',
        height: '100%',
    },
    dotsContainer: {
        position: 'absolute',
        bottom: 10.67,
        left: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },

})
