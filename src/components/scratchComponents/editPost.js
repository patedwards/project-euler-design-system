import React from "react";
import { updateChallenge } from "../../graphql/mutations";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

class EditPost extends React.Component {
  state = {
    show: false,
    postData: {
      title: this.props.title,
      description: this.props.description
    }
  };

  handleModal = () => {
    this.setState({ show: !this.state.show });
    document.description.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  handleSubmit = (e, updateChallenge) => {
    e.preventDefault();
    updateChallenge({
      variables: {
        input: {
          id: this.props.id,
          title: this.state.postData.title,
          description: this.state.postData.description
        }
      }
    }).then(res => this.handleModal());
  };

  handleTitle = e => {
    this.setState({
      postData: { ...this.state.postData, title: e.target.value }
    });
  };

  handleDescription = e => {
    this.setState({
      postData: { ...this.state.postData, description: e.target.value }
    });
  };

  render() {
    return (
      <>
        {this.state.show && (
          <div className="modal">
            <button className="close" onClick={this.handleModal}>
              X
            </button>
            <Mutation mutation={gql(updateChallenge)}>
              {updatePost => {
                return (
                  <form
                    className="add-post"
                    onSubmit={e => this.handleSubmit(e, updatePost)}
                  >
                    <input
                      type="text"
                      required
                      value={this.state.postData.title}
                      onChange={this.handleTitle}
                    />
                    <textarea
                      rows="3"
                      cols="40"
                      required
                      value={this.state.postData.description}
                      onChange={this.handleDescription}
                    />
                    <button>Update Post</button>
                  </form>
                );
              }}
            </Mutation>
          </div>
        )}
        <button onClick={this.handleModal}>Edit</button>
      </>
    );
  }
}

export default EditPost;

