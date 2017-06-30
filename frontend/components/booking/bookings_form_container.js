import { connect } from 'react-redux';
import BookingsForm from './bookings_form';
import { fetchBookings, fetchSingleBooking, createBooking, deleteBooking }
  from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  let bookingInfo = {arrival_date: "", depart_date: "", num_travellers: ""};
  return bookingInfo;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBooking: id => dispatch(fetchBooking(id)),
    createBooking: booking => dispatch(action(booking)),
    removeBookingErrors: () => dispatch(removeBookingErrors()),
    updateRoom: room => dispatch(updateRoom(room))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingsForm);