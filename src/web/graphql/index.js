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