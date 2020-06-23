import axios from "axios";

export default {
  Random: function (bookTitle) {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        bookTitle +
        "&key=AIzaSyC-N4mAVxuhR6Owq5edWdrXUUgx5-ex3A8"
    );
  },
};
