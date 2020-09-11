/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChallenge = /* GraphQL */ `
  query GetChallenge($id: ID!) {
    getChallenge(id: $id) {
      id
      name
      description
      solutions {
        id
        name
        description
        videoLink
        githubLink
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listChallenges = /* GraphQL */ `
  query ListChallenges(
    $filter: ModelChallengeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChallenges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        solutions {
          id
          name
          description
          videoLink
          githubLink
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSolution = /* GraphQL */ `
  query GetSolution($id: ID!) {
    getSolution(id: $id) {
      id
      name
      description
      videoLink
      githubLink
      createdAt
      updatedAt
    }
  }
`;
export const listSolutions = /* GraphQL */ `
  query ListSolutions(
    $filter: ModelSolutionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSolutions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        videoLink
        githubLink
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      conversations {
        items {
          id
          convoLinkUserId
          convoLinkConversationId
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          authorId
          content
          messageConversationId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        conversations {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConvo = /* GraphQL */ `
  query GetConvo($id: ID!) {
    getConvo(id: $id) {
      id
      messages {
        items {
          id
          authorId
          content
          messageConversationId
          createdAt
          updatedAt
        }
        nextToken
      }
      associated {
        items {
          id
          convoLinkUserId
          convoLinkConversationId
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      members
      createdAt
      updatedAt
    }
  }
`;
