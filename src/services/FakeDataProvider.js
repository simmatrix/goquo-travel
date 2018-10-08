import SampleRooms from './../data/room-details.json';
import _ from 'lodash';
import moment from 'moment';

export const getSampleRooms = () => {
  const data = SampleRooms;

  // Get the unique room type labels
  const uniqueRoomTypeLabels = _.uniqBy(data, room => {
    return _.join(room.roomTypeLabel, '-');
  }).map(room => {
    return _.join(room.roomTypeLabel, ',').toUpperCase();
  });

  // Compile the main groupings
  return _.map(uniqueRoomTypeLabels, roomTypeLabel => {
    const roomsByRoomTypeLabel = _.filter(data, room => {
      return _.join(room.roomTypeLabel, '').toUpperCase() === roomTypeLabel;
    });

    const processedRoomsByRoomTypeLabel = _.map(roomsByRoomTypeLabel, room => {
      // The key is the combinatino of bedTypeLabel and boardCodeDescription
      const keyForBedTypeLabel = _.toLower(_.replace(_.join(room.bedTypeLabel, '-'), ' ', '-'));
      const keyForBoardCodeDescription = _.toLower(_.replace(room.boardCodeDescription, ' ', '-'));
      const key = _.filter([keyForBedTypeLabel, keyForBoardCodeDescription], key => {
        return key !== '';
      }).join('-');

      const roomsByBedTypeLabelAndBoardCodeDescription = _.filter(roomsByRoomTypeLabel, room => {
        const childKeyForBedTypeLabel = _.toLower(_.replace(_.join(room.bedTypeLabel, '-'), ' ', '-'));
        const childKeyForBoardCodeDescription = _.toLower(_.replace(room.boardCodeDescription, ' ', '-'));
        const childKey = _.filter([childKeyForBedTypeLabel, childKeyForBoardCodeDescription], key => {
          return key !== '';
        }).join('-');

        return childKey === key;
      }).map(room => {
        return {
          name: room.name,
          accommodateText: _.join(room.accommodateText, ', ').toUpperCase(),
          hasFreeCancellation: room.cancelFreeBeforeDate !== null,
          cancelFreeBeforeDate:
            room.cancelFreeBeforeDate !== null
              ? moment(room.cancelFreeBeforeDate)
                  .format('MMMM DD, YYYY')
                  .toUpperCase()
              : false,
          isNonRefundable: room.isNonRefundable,
          canHoldBooking: room.canHoldBooking,
          viewLabel: _.join(room.viewLabel, ', ').toUpperCase(),
          totalPrice: room.totalPrice
        };
      });

      return {
        key: key,
        bedTypeLabel: room.bedTypeLabel,
        boardCodeDescription: room.boardCodeDescription,
        rooms: roomsByBedTypeLabelAndBoardCodeDescription
      };
    });

    return {
      roomTypeLabel: roomTypeLabel,
      rooms: _.uniqBy(processedRoomsByRoomTypeLabel, 'key')
    };
  });
  // console.log(JSON.stringify(x));
};

// if we have other test data, we can place it over here
