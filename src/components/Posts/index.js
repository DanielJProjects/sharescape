import React, { useEffect } from "react";
import moment from "moment";
import {
  PostButton,
  PostsContainer,
  PostsWrapper,
  Header,
  CreatePostDiv,
  ProfilePic,
  Form,
  Input,
  PreviewPhoto,
  InputPhoto,
  Buttons,
  AddPhoto,
} from "./PostsElements";
import Post from "../Post";
import { useGlobalContext } from "../../context";

const Posts = ({ widthToSet }) => {
  const {
    postsList,
    getPosts,
    handlePostSubmit,
    setPostsList,
    photoAdded,
    setPhotoAdded,
  } = useGlobalContext();

  useEffect(() => {
    setPostsList([]);
    getPosts();
  }, []);

  const imageChanged = (e) => {
    let reader = new FileReader();
    reader.onload = () => {
      setPhotoAdded(reader.result);
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <PostsContainer widthToSet={widthToSet}>
        <PostsWrapper>
          <Header>Posts</Header>
          <CreatePostDiv>
            <ProfilePic src={localStorage.getItem("profilePic")} />
            <Form onSubmit={handlePostSubmit}>
              <Input name="post"></Input>
              {photoAdded && <PreviewPhoto src={photoAdded} />}
              <Buttons>
                <PostButton type="submit">Post</PostButton>
                <InputPhoto
                  id="inputPhoto"
                  name="inputPhoto"
                  type="file"
                  accept="image/*"
                  onChange={imageChanged}
                />
                <AddPhoto htmlFor="inputPhoto">
                  {photoAdded ? "Change photo" : "+ Add photo"}
                </AddPhoto>
              </Buttons>
            </Form>
          </CreatePostDiv>
          {postsList.map((post, index) => {
            let numLikes = post.num_likes;
            let postId = post.postId;
            let postContent = post.post_content;
            let name = post.user_name;
            let userId = post.userId;
            let dateTime = post.date_posted;
            let photo = post.photo;
            let likeId = post.likeId;
            let likeState = likeId ? true : false;

            let timePosted = "Just now";
            let secondDiff = moment().diff(dateTime, "seconds");
            let minuteDiff = 0;
            let hourDiff = 0;
            let dayDiff = 0;

            if (secondDiff >= 60) {
              minuteDiff = moment().diff(dateTime, "minutes");
              if (minuteDiff === 1) {
                timePosted = minuteDiff + " minute ago";
              } else {
                timePosted = minuteDiff + " minutes ago";
              }
            }

            if (minuteDiff >= 60) {
              hourDiff = moment().diff(dateTime, "hours");
              if (hourDiff === 1) {
                timePosted = hourDiff + " hour ago";
              } else {
                timePosted = hourDiff + " hours ago";
              }
            }

            if (hourDiff >= 24) {
              dayDiff = moment().diff(dateTime, "days");
              if (dayDiff === 1) {
                timePosted = dayDiff + " day ago";
              } else {
                timePosted = dayDiff + " days ago";
              }
            }

            return (
              <Post
                key={postId}
                postId={postId}
                userId={userId}
                likeState={likeState}
                postContent={postContent}
                name={name}
                numLikes={numLikes}
                photo={photo}
                timePosted={timePosted}
              />
            );
          })}
        </PostsWrapper>
      </PostsContainer>
    </>
  );
};

export default Posts;
