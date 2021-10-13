import React, { useEffect } from "react";
import {
  PhotosContainer,
  Header,
  PhotosDiv,
  Text,
  Images,
  Image,
} from "./PhotosElements";
import { useGlobalContext } from "../../context";

const Photos = () => {
  const { getPhotos, photoList } = useGlobalContext();

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      <PhotosContainer>
        <Header>Photos</Header>
        <PhotosDiv photosPosted={photoList.length < 1 ? false : true}>
          {photoList.length < 1 && <Text>You haven't posted any photos.</Text>}
          {photoList.length > 0 && (
            <Images>
              {photoList.map((photo, i) => {
                return <Image key={i} src={photo.photo} />;
              })}
            </Images>
          )}
        </PhotosDiv>
      </PhotosContainer>
    </>
  );
};

export default Photos;
