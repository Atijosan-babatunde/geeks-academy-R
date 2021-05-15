import { gql } from '@apollo/client';

export const GET_COURSES = gql`
query MyQuery {
  geeksAcademies {
    id
    headline
    slug
    views
    rating
    duration
    difficulty
    recommended
    popular
    trending
    description {
      text
    }
    banner {
      url
    }
  }
}
`;

export const GET_SINGLE_COURSE = gql`
query geeksAcademy($slug: String!) {
  geeksAcademy(where: {slug: $slug}) {
    views
    rating
    headline
    duration
    difficulty
    originalPrice
    courseOutlines {
      id
      title
      lesson
    }
    currentPrice
    description {
      text
    }
    banner {
      url
    }
  }
}
`;

export const CREATE_USER = gql`
mutation MyMutation($email: String!, $username: String!, $password: String!) {
  __typename
  createRegistration(data: {email: $email, username: $username, password: $password}) {
    id,
    email,
    username
  }
}
`;