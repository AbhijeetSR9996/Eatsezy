import React from 'react';
import { Text, View } from 'react-native';

//styles
import { styles } from './ReviewStarsStyle';

//svgs
import ReviewStar from '../../assets/svg/review_star_white.svg';
import RedReviewStar from '../../assets/svg/Restaurant_details_page_star_filled.svg';
import WhiteReviewStar from '../../assets/svg/Restaurant_details_page_star_unfilled.svg';

const ReviewStars = ({
  rating,
  totalReviews
}) => {

  const getNumber = (number) => {
    let s = number.toString();
    if (s.length > 1) {
      s = s.substr(0, 1);
    }
    return (parseInt(s) + 1);
  };

  const renderGreyBox = () => {
    const s = rating.toString();
    let newWidth = 0;
    if (s.length > 2) {
      newWidth = parseInt(s.substr(2, 1));
    }

    return (<View style={styles.greyBox}>
      <View style={[styles.greyBoxRedPortion,
      {
        width: newWidth
      }]}>
      </View>
      <View style={styles.whiteStarCon}>
        <ReviewStar />
        
      </View>
    </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        {
          typeof rating === 'number'
          &&
          rating > 0
          &&
          [1, 2, 3, 4, 5].map((e, i) => {
            if (e <= rating) {
              return <RedReviewStar style={{ marginRight: 2 }} />;
            }
            else if ((getNumber(rating)) === e) {
              return (renderGreyBox(rating));
            }
            else {
              return <WhiteReviewStar style={{ marginRight: 2 }} />;
            }
          })
        }
      </View>
      <Text
        numberOfLines={1}
        style={styles.totalRating}>{totalReviews || 0} reviews</Text>

    </View>
  );
};

export default React.memo(ReviewStars);
