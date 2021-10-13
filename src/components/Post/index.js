import React, { useState } from "react";
import {
  PostDiv,
  MoreIcon,
  ProfileInfo,
  ProfileLink,
  ProfilePic,
  NameTimeDiv,
  Name,
  TimePosted,
  PostContent,
  Text,
  Image,
  InteractButtons,
  LikeButton,
  Button,
  Icon,
  Number,
  MoreOptionsCont,
  MoreOptionsDiv,
  Option,
} from "./PostElements";
import {
  AiOutlineLike,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { MdMoreHoriz } from "react-icons/md";
import Axios from "axios";
import { useGlobalContext } from "../../context";

const Post = ({
  photo,
  postId,
  userId,
  postContent,
  name,
  numLikes,
  likeState,
  timePosted,
}) => {
  const { changeLike, deletePost } = useGlobalContext();

  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [likesToShow, setLikesToShow] = useState(numLikes);
  const [liked, setLiked] = useState(likeState);

  const toggleShowOptions = (bool) => {
    setShowMoreOptions(bool);
  };

  let imageAttached = false;

  if (photo) {
    imageAttached = true;
  }

  const like = () => {
    let newLikes = 0;
    if (!liked) {
      newLikes = likesToShow + 1;
      setLikesToShow(newLikes);
      changeLike(userId, postId, true);
    } else {
      newLikes = likesToShow - 1;
      setLikesToShow(newLikes);
      changeLike(userId, postId, false);
    }

    setLiked(!liked);

    Axios.post("https://sharescape-mysql.herokuapp.com/updateLikes", {
      postId: postId,
      likes: newLikes,
    });
  };

  return (
    <>
      <PostDiv>
        <ProfileInfo>
          <ProfileLink to="/profile">
            <ProfilePic src={localStorage.getItem("profilePic")} />
          </ProfileLink>
          <NameTimeDiv>
            <Name to="/profile">{name}</Name>
            <TimePosted>{timePosted}</TimePosted>
          </NameTimeDiv>
        </ProfileInfo>
        <MoreIcon
          onMouseEnter={() => toggleShowOptions(true)}
          onMouseLeave={() => toggleShowOptions(false)}
          showMoreOptions={showMoreOptions}
        >
          <MdMoreHoriz />
        </MoreIcon>
        <MoreOptionsDiv
          showMoreOptions={showMoreOptions}
          onMouseEnter={() => toggleShowOptions(true)}
          onMouseLeave={() => toggleShowOptions(false)}
        >
          <MoreOptionsCont>
            <Option
              onClick={() => {
                deletePost(postId, userId);
              }}
            >
              Delete
            </Option>
          </MoreOptionsCont>
        </MoreOptionsDiv>
        <PostContent>
          <Text imageAttached={imageAttached}>{postContent}</Text>
          <Image src={photo} />
        </PostContent>
        <InteractButtons>
          <LikeButton onClick={like} liked={liked}>
            <Icon>
              <AiOutlineLike />
            </Icon>
            <Number>{likesToShow}</Number>
          </LikeButton>
          <Button>
            <Icon>
              <AiOutlineComment />
            </Icon>
            <Number>0</Number>
          </Button>
          <Button>
            <Icon>
              <AiOutlineShareAlt />
            </Icon>
            <Number>0</Number>
          </Button>
        </InteractButtons>
      </PostDiv>
    </>
  );
};

export default Post;
