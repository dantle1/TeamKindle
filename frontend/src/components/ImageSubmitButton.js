import React, { useState } from "react";
import axios from "axios";

const ImageSubmitButton = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);

      axios
        .post("https://jsonplaceholder.typicode.com/posts", formData)
        .then((response) => {
          alert("Image uploaded successfully.");
          // You can handle the response data from the API as needed.
        })
        .catch((error) => {
          console.error("Error uploading the image:", error);
        });
    } else {
      alert("Please select an image first.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Submit Image</button>
      </form>
    </div>
  );
};

export default ImageSubmitButton;
