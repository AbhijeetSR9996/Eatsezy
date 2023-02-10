import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { Colors, Fonts } from '../../global'

const EatsEasyGuideFilter = ({ item, index, name, preferences, setUseData, useData, cuisinepreference, setTemporaryUseData, temporaryUseData }) => {
    const [filter, setFilter] = React.useState(null)
    const removeFilter = (i) => {
        let data = useData.filter(e => e != i)
        setUseData(data)

        let data1 = temporaryUseData.filter(e => e != i)
        setTemporaryUseData(data1)

    }
    const EatsfilterBy = (index) => {
        if (filter != index) {
            setUseData([...useData, item])
            setTemporaryUseData([...useData, item])
            setFilter(index)

        } else {
            removeFilter(item)
            setTemporaryUseData(item)
            setFilter(null)

        }
    }
    React.useEffect(() => {
        if (typeof temporaryUseData != "undefined") {
            // const response = useData.filter(e => e == item)
            const response1 = temporaryUseData.filter(e => e == item)

            if (response1.length > 0) {
                setFilter(index)
            }
        }
    }, [])

    return (
        <TouchableOpacity
            onPress={() => EatsfilterBy(index)}
            // style={[styles.filterConatiner, { backgroundColor: filter == index ? Colors.BLACK : Colors.WHITE, borderWidth: 1, marginBottom: typeof preferences != "undefined" && preferences ? 20 : 0 }]}
            style={[styles.filterConatiner, { backgroundColor: filter == index ? '#EF3340' : Colors.WHITE, borderWidth: 1, marginBottom: typeof preferences != "undefined" && preferences ? 20 : 0 },
            {borderRadius: filter ? 20:15}]}
            >
            <Text style={[styles.filterText, { color: filter == index ? Colors.WHITE : Colors.GRAY_DARK }]}>{item}</Text>
        </TouchableOpacity>
    )
}

const mapStateToProps = state => ({
    cuisinepreference: state.user.cuisinepreference
});

const mapDispatchToProps = dispatch => ({ dispatch });

// export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
export default connect(mapStateToProps, mapDispatchToProps)(EatsEasyGuideFilter);

// export default EatsEasyFilter

const styles = StyleSheet.create({
    filterConatiner: {
        paddingVertical: 9,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
        borderRadius: 12,
        paddingHorizontal: 22,
        borderColor:'#DDDDDD'
    },
    filterText: {
        color: "#000000",
        fontSize: 12,
        fontFamily: Fonts.MEDIUM,
        marginTop: Platform.OS == "android" ? 3 : 0
    }
})
