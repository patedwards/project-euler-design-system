/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChallenge = /* GraphQL */ `
  mutation CreateChallenge(
    $input: CreateChallengeInput!
    $condition: ModelChallengeConditionInput
  ) {
    createChallenge(input: $input, condition: $condition) {
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
export const updateChallenge = /* GraphQL */ `
  mutation UpdateChallenge(
    $input: UpdateChallengeInput!
    $condition: ModelChallengeConditionInput
  ) {
    updateChallenge(input: $input, condition: $condition) {
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
export const deleteChallenge = /* GraphQL */ `
  mutation DeleteChallenge(
    $input: DeleteChallengeInput!
    $condition: ModelChallengeConditionInput
  ) {
    deleteChallenge(input: $input, condition: $condition) {
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
export const createSolution = /* GraphQL */ `
  mutation CreateSolution(
    $input: CreateSolutionInput!
    $condition: ModelSolutionConditionInput
  ) {
    createSolution(input: $input, condition: $condition) {
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
export const updateSolution = /* GraphQL */ `
  mutation UpdateSolution(
    $input: UpdateSolutionInput!
    $condition: ModelSolutionConditionInput
  ) {
    updateSolution(input: $input, condition: $condition) {
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
export const deleteSolution = /* GraphQL */ `
  mutation DeleteSolution(
    $input: DeleteSolutionInput!
    $condition: ModelSolutionConditionInput
  ) {
    deleteSolution(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createConvo = /* GraphQL */ `
  mutation CreateConvo(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConvo(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      author {
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
      authorId
      content
      conversation {
        id
        messages {
          nextToken
        }
        associated {
          nextToken
        }
        name
        members
        createdAt
        updatedAt
      }
      messageConversationId
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      author {
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
      authorId
      content
      conversation {
        id
        messages {
          nextToken
        }
        associated {
          nextToken
        }
        name
        members
        createdAt
        updatedAt
      }
      messageConversationId
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      author {
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
      authorId
      content
      conversation {
        id
        messages {
          nextToken
        }
        associated {
          nextToken
        }
        name
        members
        createdAt
        updatedAt
      }
      messageConversationId
      createdAt
      updatedAt
    }
  }
`;
export const createConvoLink = /* GraphQL */ `
  mutation CreateConvoLink(
    $input: CreateConvoLinkInput!
    $condition: ModelConvoLinkConditionInput
  ) {
    createConvoLink(input: $input, condition: $condition) {
      id
      user {
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
      convoLinkUserId
      conversation {
        id
        messages {
          nextToken
        }
        associated {
          nextToken
        }
        name
        members
        createdAt
        updatedAt
      }
      convoLinkConversationId
      createdAt
      updatedAt
    }
  }
`;
export const updateConvoLink = /* GraphQL */ `
  mutation UpdateConvoLink(
    $input: UpdateConvoLinkInput!
    $condition: ModelConvoLinkConditionInput
  ) {
    updateConvoLink(input: $input, condition: $condition) {
      id
      user {
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
      convoLinkUserId
      conversation {
        id
        messages {
          nextToken
        }
        associated {
          nextToken
        }
        name
        members
        createdAt
        updatedAt
      }
      convoLinkConversationId
      createdAt
      updatedAt
    }
  }
`;
