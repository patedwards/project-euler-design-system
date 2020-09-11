import React from "react";
import { Mutation } from "react-apollo";
import { createChallenge } from "../../graphql/mutations";
import gql from "graphql-tag";

class CreatePost extends React.Component {
  handleSubmit = (e, createPost) => {
    e.preventDefault();
    createPost({
      variables: {
        input: {
          name: this.name.value,
          description: this.description.value,
        }
      }
    }).then(res => {
      this.name.value = "";
      this.description.value = "";
    });
  };
  render() {
    return (
      <div>
        <h1>Create post</h1>

        <Mutation mutation={gql(createChallenge)}>
          {(createChallenge, { data, loading, error }) => {
            return (
              <div>
                <form
                  className="add-post"
                  onSubmit={e => this.handleSubmit(e, createChallenge)}
                >
                  <input
                    type="text" placeholder="Name"
                    ref={node => (this.name = node)}
                    required
                  />
                  <textarea
                    rows="3"
                    cols="40"
                    placeholder="Description"
                    ref={node => (this.description = node)}
                    required
                  />
                  <button>{loading ? "Yes boss..." : "Create Post"}
                  </button>
                </form>
                {error && <p>{error.message}</p>}
              </div>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default CreatePost;
