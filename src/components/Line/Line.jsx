import React, { Component } from "react";
import styled from "styled-components";
import Panel from "./Panel";
import Comment from "./Comments";
import Photo from "./BackDrop/Photo";
import Modal from "./BackDrop/Modal";

class Line extends Component {
  state = {
    profile_name: "vladyslav_varnava",
    likes: 123,
    liked: false,
    opened: false,
    comments: [
      {
        comment: "perfect"
      }
    ],
    comment: ""
  };

  handleComment = e => {
    this.setState({
      comment: e.target.value
    });
  };

  createComment = () => {
    this.setState(({ comments, comment }) => ({
      comments: [
        ...comments,
        {
          comment
        }
      ],
      comment: ""
    }));
  };
  createCommentFromPhoto = commentPhoto => {
    this.setState(({ comments, comment }) => ({
      comments: [
        ...comments,
        {
          comment: commentPhoto
        }
      ],
      comment: ""
    }));
  };

  handleKeyPress = e => {
    if (e.target.value !== "") {
      if (e.key === "Enter") {
        this.createComment();
      }
    }
  };

  like = () => {
    this.setState({
      liked: !this.state.liked
    });
  };

  openedHandler = () => {
    this.setState({
      opened: false
    });
  };

  render() {
    const comments = this.state.comments.map((item, key) => {
      return (
        <Comment key={key} item={item.comment} name={this.state.profile_name} />
      );
    });

    return (
      <Container className="App">
        {this.state.opened ? (
          <Modal show={this.state.opened} backdrop={this.openedHandler}>
            <Photo
              name={this.state.profile_name}
              comments={this.state.comments}
              name={this.state.profile_name}
              onComment={this.createCommentFromPhoto}
              likes={this.state.likes}
              liked={this.state.liked}
              like={this.like}
            />
          </Modal>
        ) : null}

        <ListPhotoItem>
          <Profile>
            <Profile_img />
            <Profile_name>{this.state.profile_name}</Profile_name>
          </Profile>
          <Img
            onClick={() => this.setState({ opened: !this.state.opened })}
            src="http://vacation-dpl.com/wp-content/uploads/2018/08/Image-17A.jpg"
          />
          <Icons>
            {this.state.liked ? (
              <I className="fas fa-heart fa-2x" onClick={this.like}>
                {" "}
              </I>
            ) : (
              <I className="far fa-heart fa-2x" onClick={this.like} />
            )}
            <I className="far fa-comment fa-2x" />
            <I className="fas fa-cloud-upload-alt fa-2x" />
          </Icons>
          <Likes> {this.state.likes} "likes" </Likes>
          <Comments>{comments}</Comments>

          <Input
            placeholder="Add comment"
            value={this.state.comment}
            onChange={this.handleComment}
            onKeyPress={this.handleKeyPress}
          />
        </ListPhotoItem>
        <Panel name={this.state.profile_name} />
      </Container>
    );
  }
}
const ListPhotoItem = styled.div`
  z-index: 160;
  width: 45%;
  height: 900px;
  margin-left: 20%;
  margin-top: 50px;
  box-sizing: border-box;
  border: 1px solid #e6e6e6;
  margin-bottom: 40px;
  @media (max-width: 700px) {
    width: 100%;
    margin-left: 0;
  }
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 5px;
`;
const Profile_img = styled.div`
  background-color: grey;
  height: 25px;
  width: 25px;
  margin-left : 13px;
  margin-top: 7.5px
  border-radius: 50%;
  border: 1px solid #e6e6e6; 
  box-sizing: border-box;
`;
const Profile_name = styled.p`
  display: flex;
  align-items: center;
  height: 25px;
  font-size: 0.8em;
  font-weight: bold;
  margin-left: 7px;
`;
const Img = styled.img`
  width: 100%;
  height: 640px;
  @media (max-width: 500px) {
    width: 100%;
    margin-left: 0;
    height: 400px;
  }
`;
const Icons = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
`;
const I = styled.i`
  margin-top: 15px;
  margin-left: 10px;
`;
const Likes = styled.p`
  font-size: 0.9em;
  padding-top: 10px;
  width: 100px;
`;
const Input = styled.input`
  width: 97%;
  height: 40px;
  border: none;
  border-top: 1px solid #e6e6e6;
`;
const Comments = styled.div`
  overflow: scroll;
  height: 100px;
`;
const Container = styled.div`
  display: flex;
`;
export default Line;
