import React, { Component } from "react";
import styled from "styled-components";
import Comment from "../Comments";

class Photo extends Component {
  state = {
    comment: "",
    images: [
      {
        id: 0,
        src: 'http://vacation-dpl.com/wp-content/uploads/2018/08/Image-17A.jpg'
      },
      {
        id: 1,
        src: 'https://i.pinimg.com/originals/10/ab/87/10ab876d7ebe3eab9aaed94b73ee31c4.jpg'
      },
      {
        id: 2,
        src: 'https://www.unilad.co.uk/wp-content/uploads/2018/07/Katarina-1.png'
      }
    ],
    img_id: 0
  };

  handleComment = e => {
    this.setState({
      comment: e.target.value
    });
  };

  handleKeyPress = e => {
    if (e.target.value !== "") {
      if (e.key === "Enter") {
        this.props.onComment(this.state.comment);
        this.setState({ comment: "" });
      }
    }
  };
  nextPhoto = () => {
    this.setState({
      img_id: this.state.img_id + 1
    })
  }
  previousPhoto = () => {
    this.setState({
      img_id: this.state.img_id - 1
    })
  }

  render() {

    const images = this.state.images.map((item, index) => {


      if (this.state.img_id === index) {
        return (

          <Styled_img
            key={item.id}
            src={item.src}
          >

          </Styled_img>


        )
      }
    }
    )

    const comments = this.props.comments.map((item, key) => {
      return <Comment key={key} item={item.comment} name={this.props.name} />;
    });

    const controls = () => {
      if (this.state.images.length - 1 > this.state.img_id) {
        return (
          <div>
            <i className="fas fa-arrow-circle-right" onClick={this.nextPhoto} ></i>
            <i className="fas fa-arrow-circle-left" onClick={this.previousPhoto}></i>
          </div>
        )
      }
    }


    return (
      <Img_container>
        <Img>
          {images}
        </Img>
        <Controls_container>
        {(this.state.images.length - 1 > this.state.img_id) ?
          (this.state.img_id === 0) ?
            <i className="fas fa-arrow-circle-right fa-2x" onClick={this.nextPhoto} ></i> :
            <div >
              <i className="fas fa-arrow-circle-left fa-2x" onClick={this.previousPhoto}></i>
              <i className="fas fa-arrow-circle-right fa-2x" onClick={this.nextPhoto} ></i>
              </div>
          : <i className="fas fa-arrow-circle-left fa-2x" onClick={this.previousPhoto}></i>
        }
        </Controls_container>
        

        <Content>
          <Panl>
            <Profile_img />
            <Text>
              <Account>{this.props.name}</Account>
              <Name>Name surname</Name>
            </Text>
          </Panl>
          <Comments>{comments}</Comments>
          <Icons>
            {this.props.liked ? (
              <I className="fas fa-heart fa-2x" onClick={this.props.like} />
            ) : (
                <I className="far fa-heart fa-2x" onClick={this.props.like} />
              )}
            <I className="far fa-comment fa-2x" />
            <I className="fas fa-cloud-upload-alt fa-2x" />
          </Icons>
          <Likes> {this.props.likes} "likes" </Likes>
          <Input
            placeholder="Add comment"
            value={this.state.comment}
            onChange={this.handleComment}
            onKeyPress={this.handleKeyPress}
          />
        </Content>
      </Img_container>
    );
  }
}

const Controls_container= styled.div `
display: flex;
margin-left: 10px;

align-items: center;

`


const Img_container = styled.div`
  height: 500px;
  width: 700px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Img = styled.div`
  height: 100%;
  width: auto;
`;
const Panl = styled.div`
  margin-left: 30px;
  height: 70px;
  border: none;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
`;
const Profile_img = styled.div`
  background-color: grey;
  height: 45px;
  width: 45px;

  border-radius: 50%;
  border: 1px solid #e6e6e6;
`;
const Text = styled.div`
  height: 40px;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 20px;
  margin-bottom: 20px;
`;
const Account = styled.p`
  font-size: 0.9em;
  font-weight: bold;
  margin-left: 10px;
  margin-bottom: 0;
  padding: 0;
`;
const Name = styled.p`
  font-size: 0.6em;
  padding: 0;
  color: #999999;
  margin: 0;
`;
const Content = styled.div`
  display: flex;
  flex-flow: column;
`;
const Comments = styled.div`
  margin-left: 30px;
  height: 400px;
  width: 300px;
`;
const Icons = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-top: 40px;
  border-top: 1px solid #e6e6e6;
  padding: 15px;
`;
const I = styled.i`
  margin-top: 15px;
  margin-left: 10px;
`;
const Input = styled.input`
  margin-left: 30px;
  width: 97%;
  height: 40px;
  border: none;
  border-top: 1px solid #e6e6e6;
`;
const Likes = styled.p`
  font-size: 0.9em;
  padding-top: 10px;
  margin-left: 30px;
  width: 100px;
`;
const Styled_img = styled.img`
height: 100%;
width: auto;
`


export default Photo;
