import React, { useContext, useState } from "react";
import Axios from "axios";
import moment from "moment";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [profileBoxDisplay, setProfileBoxDisplay] = useState(false);
  const [showFollowerBox, setShowFollowerBox] = useState(false);
  const [showNotifs, setShowNotifs] = useState(false);
  const [postsList, setPostsList] = useState([]);
  const [liked, setLiked] = useState(false);
  const [photoAdded, setPhotoAdded] = useState(null);
  const [photoList, setPhotoList] = useState([]);
  const [noQYesterday, setNoQYesterday] = useState(false);
  const [noAnswers, setNoAnswers] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [yesterdayQ, setYesterdayQ] = useState("");

  const getPhotos = () => {
    let userId = localStorage.getItem("userId");
    Axios.post("https://sharescape-mysql.herokuapp.com/getPhotos", {
      userId: userId,
    }).then((res) => {
      let data = res.data;
      setPhotoList(data.reverse());
    });
  };

  const deletePost = (postId, userId) => {
    Axios.post("https://sharescape-mysql.herokuapp.com/deletePost", {
      postId: postId,
      userId: userId,
    }).then((res) => {
      let posts = res.data;
      setPostsList(posts.reverse());
      getPhotos();
    });
  };

  const changeLike = (userId, postId, ifAdd) => {
    if (ifAdd) {
      Axios.post("https://sharescape-mysql.herokuapp.com/addLike", {
        userId: userId,
        postId: postId,
      });
    } else {
      Axios.post("https://sharescape-mysql.herokuapp.com/removeLike", {
        userId: userId,
        postId: postId,
      });
    }
  };

  const getPosts = () => {
    Axios.post("https://sharescape-mysql.herokuapp.com/getPosts", {
      userId: localStorage.getItem("userId"),
    }).then((res) => {
      let posts = res.data;
      setPostsList(posts.reverse());
      console.log("getPostsFunc", posts);
    });
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const postContent = e.target.post.value;
    const image = e.target.inputPhoto.files[0];
    const numLikes = 0;
    const dateTime = moment().format("YYYY-MM-DD HH:mm:ss");

    if (image) {
      let reader = new FileReader();
      reader.onload = () => {
        Axios.post("https://sharescape-mysql.herokuapp.com/post", {
          name: localStorage.getItem("name"),
          postContent: postContent,
          userId: localStorage.getItem("userId"),
          numLikes: numLikes,
          image: reader.result,
          dateTime: dateTime,
        }).then((res) => {
          let posts = res.data;
          setPostsList(posts.reverse());
          getPhotos();
          console.log("afterImagePosted", posts);
        });
      };

      reader.readAsDataURL(image);
    } else {
      Axios.post("https://sharescape-mysql.herokuapp.com/post", {
        name: localStorage.getItem("name"),
        postContent: postContent,
        userId: localStorage.getItem("userId"),
        numLikes: numLikes,
        image: null,
        dateTime: dateTime,
      }).then((res) => {
        let posts = res.data;
        setPostsList(posts.reverse());
        console.log("afterTextPost", posts);
      });
    }
    
    getPosts();
    e.target.reset();
    setPhotoAdded("");
  };

  const checkAnswer = () => {
    Axios.get(
      "https://sharescape-mysql.herokuapp.com/getMostRecentQuestion"
    ).then((res) => {
      if (res.data.length > 0) {
        let data = res.data[0];
        let questionId = data.questionId;
        let userId = localStorage.getItem("userId");

        Axios.post("https://sharescape-mysql.herokuapp.com/getAnswer", {
          questionId: questionId,
          userId: userId,
        }).then((res) => {
          if (res.data.length < 1) {
            setShowOptions(true);
          } else {
            setShowOptions(false);
          }
        });
      } else {
        setShowOptions(true);
      }
    });
  };

  const getResults = () => {
    const date = moment().subtract(1, "days").format("YYYY-MM-DD");
    Axios.post("https://sharescape-mysql.herokuapp.com/getYesterdayQuestion", {
      date: date,
    }).then((res) => {
      if (res.data.length < 1) {
        setNoQYesterday(true);
      } else {
        setNoQYesterday(false);
        setYesterdayQ(res.data[0].question);
        localStorage.setItem("yesterdayQ", res.data[0].question);
        Axios.post("https://sharescape-mysql.herokuapp.com/answerSums", {
          id: res.data[0].questionId,
        }).then((res) => {
          let answers = res.data[0];
          if (answers.all_answers === 0) {
            setNoAnswers(true);
          } else {
            setNoAnswers(false);
            let yesPerc = Math.round(
              (answers.yes_answers / answers.all_answers) * 100
            );
            let noPerc = Math.round(
              (answers.no_answers / answers.all_answers) * 100
            );
            localStorage.setItem("yesPerc", yesPerc);
            localStorage.setItem("noPerc", noPerc);
          }
        });
      }
    });
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        profileBoxDisplay,
        setProfileBoxDisplay,
        showFollowerBox,
        setShowFollowerBox,
        showNotifs,
        setShowNotifs,
        postsList,
        setPostsList,
        getPosts,
        handlePostSubmit,
        changeLike,
        liked,
        setLiked,
        deletePost,
        photoAdded,
        setPhotoAdded,
        getPhotos,
        photoList,
        noQYesterday,
        setNoQYesterday,
        getResults,
        noAnswers,
        showOptions,
        setShowOptions,
        checkAnswer,
        yesterdayQ,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
