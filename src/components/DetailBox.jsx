import { useState } from "react";
import axiosInstance from "../utils/AxiosInstance";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const ReviewBox = () => {
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  // const [reviews, setReviews] = useState([]);
  const [showNotification] = useState(false);
  const handlePostReview = async () => {
    //   const localStorageData = JSON.parse(localStorage.getItem("token"));
    // const {  username } = localStorageData.user;
    try {
      const reviewData = {
        message: message,
        rating: rating,
        // username
      };
      await axiosInstance.post("reviews", reviewData);
    } catch (error) {
      console.log("Error posting review:", error);
    }
  };

  return (
    <>
      <div className="max-w-lg mx-auto bg-gray-100 rounded-lg shadow-lg p-6 my-10">
        <div className=" flex items-center justify-between" ></div>

        <div className="flex items-center mb-4 w-[400px]">
          <p>
          <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <p>
                          SIZE :
                          <FormControlLabel
                            value="S"
                            control={<Radio />}
                            label="S"
                          />
                          <FormControlLabel
                            value="L"
                            control={<Radio />}
                            label="L"
                          />
                          <FormControlLabel
                            value="other"
                            control={<Radio />}
                            label="M"
                          />
                          <FormControlLabel
                            value="XL"
                            control={<Radio />}
                            label="XL"
                          />
                          <FormControlLabel
                            value="XXL"
                            control={<Radio />}
                            label="XXL"
                          />
                        </p>
                      </RadioGroup>
                    </FormControl>
          </p>
        </div>
      </div>
    </>
  );
};

export default ReviewBox;
