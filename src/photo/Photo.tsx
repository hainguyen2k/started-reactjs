import React, { useEffect, useState } from "react";
import axios from "axios";

function Photo() {
  const [randomPhotos, setRandomPhotos] = useState<any>([]);
  const [nextPage, setNextPage] = useState(1);

  async function getPhotos(page: number) {
    console.log(page);
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=8`
      );
      const data = response.data;
      setRandomPhotos(data);
      return data;
    } catch (error) {
      // console.error(error);
    }
  }
  // console.log(randomPhotos);

  const handleClickChange = () => {
    getPhotos(nextPage).then((photo) => {
      const newPhoto = [...randomPhotos, ...photo];
      console.log(newPhoto);
      setRandomPhotos(newPhoto);
    });

    setNextPage(nextPage + 1);
  };

  useEffect(() => {
    handleClickChange();
  }, []);
  return (
    <div>
      {JSON.stringify(randomPhotos)}

      <button onClick={handleClickChange}>Click here</button>
    </div>
  );
}

export default Photo;
