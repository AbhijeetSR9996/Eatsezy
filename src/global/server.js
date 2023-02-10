const PORTS = {
	DEVELOPMENT: '9402',
	PRODUCTION: '1011',
};
const URL = {
	DEVELOPMENT: 'https://eats-ezy.herokuapp.com/api',
	PRODUCTION: 'https://api.eatsezy.com/api',
}

// export const BASE_URL = `https://resto-app-user.herokuapp.com`;
export const BASE_URL = `${URL.DEVELOPMENT}`;

export const END_POINT = {
	FEATURED_RESTAURANT: "restaurant/get-featured-restaurants",
	COOL_AREAS: "restaurant/areas/get-all-areas",
	RECOMMENDATION: "restaurant/recommendations/get-all-recommendations",
	RECOMMENDATION_RESTAURANT: "restaurant/recommendations/get-all-recommended-restaurants",
	BOOKINGS_STATUS: "user/booking/get-all-bookings-of-status",
	ALL_CUISINE: "restaurant/cuisines/get-all-cuisines",
	RESTAURANT_FILTER: "restaurant/get-all-filtered-restaurants",
	RESTAURANT_BY_ID: "restaurant/get-restaurant-by-id",
	USER_BY_ID: "user/get-user-by-id",
	GET_BUFFER_TIME: "restaurant/get-time-by-buffer",
	TIME_SLOTS: "restaurant/timeslots/get-all-slots",
	CREATE_BOOKING: "restaurant/booking/create-booking",
	CREATE_PAID_BOOKING: "restaurant/booking/checkout-session",
	UPDATE_BOOKING: "restaurant/booking/update-booking",
	GET_ALL_ENQURIES: "enquiry/get-all-enquiry",
	POST_ENQUIRES: "enquiry/create-enquiry",
	All_ENQUIRES_OF_USER: "enquiry/get-all-enquiry-of-user",
	GET_ENQURIES_MESSAGE: "enquiry/get-enquiry-messages",
	CREATE_ENQURIES: "enquiry/create-enquiry-message",
	ENQURIES_BY_ID: "enquiry/get-enquiry-by-id",
	USER_BOOKINGS: "user/get-upcoming-reservations",
	USER_BOOKINGCOMPLETE: "user/get-completed-reservations",
	MY_PREFERENCES: "user/update-cuisine-preference",
	MY_FAVORITES: "user/get-all-favorite-restaurants",
	ADD_REVIEW: "user/reviews/create-review",
	NEAR_BY_RESTAURANT: "restaurant/get-restaurants-by-coordinates",
	REVIEW_GIVEN: "user/reviews/get-all-reviews",
	GENRATE_GUESTID: "user/get-guest-id",
	TRASACTION_HISTORY: "user/booking/get-all-transactions",
	LOYALTY_POINT: "user/get-loyality-points",
	LOYALTY_HISTORY: "user/get-loyality-points-transactions",
	BLOGS: "admin/get-all-blogs",
	DELETE_NOTIFICATION: "restaurant/notification/delete-notification",
	BLOGS_TAGS: "admin/get-all-blog-tags",
	FILTER_BLOGS: "admin/get-blogs-by-filter",
	FIND_A_TABLE: "restaurant/get-available-tables",
	ADS: "admin/get-all-advertisment",
	GET_BOOKING: "user/booking/get-user-booking",
	GETTABLEAVAILABLE: "restaurant/timeslots/get-table-availability-restaurant",
	EDIT_RESERVATION: "restaurant/booking/edit-booking",



}