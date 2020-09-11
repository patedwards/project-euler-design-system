import React, { Component } from 'react'
import { Mutation } from 'react-apollo';
import { deleteChallenge } from '../../graphql/mutations';
import gql from 'graphql-tag';
import { listChallenges } from '../../graphql/queries';


class deleteChallenge1 extends Component {

    handleDelete = (deleteChallenge) => {
        deleteChallenge({
            variables: {
                input: {
                    id: this.props.id
                }
            },
            optimisticResponse: () => ({
                deleteChallenge: {
                    // This type must match the return type of
                    //the query below (listChallenges)
                    __typename: 'ModelPostConnection',
                    id: this.props.id,
                    title: this.props.title,
                    body: this.props.body,
                    createdAt: this.props.createdAt
                }
            }),
            update: (cache, { data: { deleteChallenge } }) => {
                const query = gql(listChallenges);

                // Read query from cache
                const data = cache.readQuery({ query });

                // Add updated postsList to the cache copy
                data.listChallenges.items = [
                    ...data.listChallenges.items.filter(item =>
                     item.id !== this.props.id)
                ];

                //Overwrite the cache with the new results
                cache.writeQuery({ query, data });
            }
        })
    }

    render() {
        return (
            <Mutation mutation={gql(deleteChallenge)}>
                {(deleteChallenge, { loading, error }) => {
                    return <button onClick={
                       () => this.handleDelete(deleteChallenge)}>
                        Delete Post</button>
                }}
            </Mutation>
        )
    }
}


export default deleteChallenge1;
