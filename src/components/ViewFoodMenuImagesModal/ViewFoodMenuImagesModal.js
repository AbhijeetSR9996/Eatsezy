import React from 'react';
import { Modal, FlatList, Text, View, Image, Platform, TouchableOpacity } from 'react-native';

//third party imports
import { useSafeAreaInsets } from 'react-native-safe-area-context';

//styles
import { styles } from './ViewFoodMenuImagesModalStyle';

//global
import { Constants, Server } from '../../global';

//svgs
import WhiteCrossSvg from '../../assets/svg/closecopy.svg';

const ViewFoodMenuImagesModal = ({
  visible = true,
  otherImageNames = [],
  toggleModal = () => { },
  index = 0,
}) => {

  const [pageNumber, setPageNumber] = React.useState(index + 1);

  const insets = useSafeAreaInsets();

  const handleOnRequestClose = () => {
    if (Platform.OS === 'android') {
      toggleModal();
    }
  };

  const onShow = () => {
    setTimeout(() => {
      ref?.current?.scrollToIndex({ animated: true, index: index, viewPosition: 0.5, });
      setPageNumber(index + 1);
    }, 100);
  };

  const ref = React.useRef();

  const renderItem = ({ item }) => renderImage(item, toggleModal);

  const onMomentumScrollEnd = ({ nativeEvent }) => {
    const i = nativeEvent.contentOffset.x / Constants.SCREEN_WIDTH;
    setPageNumber(i + 1)
  };

  return (
    <Modal
      onShow={onShow}
      animationType={'fade'}
      transparent={true}
      visible={visible}
      onRequestClose={handleOnRequestClose}
    >
      <View style={styles.container}>
        {
          otherImageNames &&
          <FlatList
            onMomentumScrollEnd={onMomentumScrollEnd}
            ref={ref}
            data={otherImageNames}
            horizontal={true}
            pagingEnabled={true}
            renderItem={renderItem}
          // keyExtractor={(item) => item}
          />
        }
        <View style={styles.row}>
          <Text style={styles.pageNumber}>{Math.round(pageNumber)}/{otherImageNames.length}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={toggleModal}
          style={styles.closeCon}>
          <WhiteCrossSvg />
        </TouchableOpacity>
      </View>
    </Modal >
  );
};

const renderImage = (item, toggleModal) => {

  return (
    <View

      activeOpacity={1} style={styles.imageCon}>
      <TouchableOpacity onPress={toggleModal}
        style={{ flex: 1 }} />
      <Image
        resizeMode='contain'
        source={{ uri: item }}
        style={styles.image}
      />
      <TouchableOpacity onPress={toggleModal}
        style={{ flex: 1 }} />
    </View>
  );

};

export default ViewFoodMenuImagesModal;
