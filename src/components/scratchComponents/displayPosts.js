import React from 'react'
import { Query } from 'react-apollo'
import { listChallenges } from '../..//graphql/queries';
import { onCreateChallenge } from '../..//graphql/subscriptions'
import gql from 'graphql-tag';
import Post from './post'

class DisplayPosts extends React.Component {

    subscribeNewChallenges = (subscribeToMore) => {
        return subscribeToMore({
            document: gql(onCreateChallenge),
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                const newChallengeData = subscriptionData.data.onCreateChallenge;
                return Object.assign({}, prev, {
                    listChallenges: {
                        ...prev.listChallenges,
                        items: [...prev.listChallenges.items, newChallengeData]
                    }
                })
            }
        })
    }


    render() {
        return (
            <div className="challenges">
                <Query query={gql(listChallenges)}  >
                    {({ loading, data, error, subscribeToMore }) => {

                        if (loading) return <p>loading...</p>
                        if (error) return <p>{error.message}</p>

                        return <Post data={data} subscribeToMore={() =>
                            this.subscribeNewChallenges(subscribeToMore)} />
                    }}
                </Query>



            </div>
        )
    }
}


export default DisplayPosts;
