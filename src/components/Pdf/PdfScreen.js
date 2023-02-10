import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../global'
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar"
import Pdf from 'react-native-pdf';
import HeaderScreen from '../../components/Header/Header';
const PdfScreen = ({ route }) => {


    return (
        <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
            <FocusAwareStatusBar isLightBar={false} isTopSpace={true} />
            <HeaderScreen activateLeftIcon={true} name={route?.params?.name} textColor={Colors.BLACK_C16} />
            <View style={{ flex: 1 }}>
                {/* Some Controls to change PDF resource */}

                {
                    route?.params?.urL &&
                    <Pdf
                        source={{ uri: route.params.urL }}
                        onLoadComplete={(numberOfPages, filePath) => {
                            console.log(`number of pages: ${numberOfPages}`);
                        }}
                        onPageChanged={(page, numberOfPages) => {
                            console.log(`current page: ${page}`);
                        }}
                        onError={(error) => {
                            console.log(error);
                        }}
                        onPressLink={(uri) => {
                            console.log(`Link presse: ${uri}`)
                        }}
                        style={{ flex: 1 }} />
                    // <PDFView
                    //     fadeInDuration={250.0}
                    //     style={{ flex: 1 }}
                    //     resource={route.params.urL}
                    //     resourceType={resourceType}
                    //     onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
                    //     onError={(error) => console.log('Cannot render PDF', error)}
                    // />
                }
            </View>
        </View>
    )
}

export default PdfScreen

const styles = StyleSheet.create({})
