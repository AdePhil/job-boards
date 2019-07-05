import gql from "graphql-tag";

const jobs = gql`
  query {
    jobs {
      id
      title
      applyUrl
      commitment {
        title
      }
      tags {
        id
        name
      }
    }
  }
`;
const postJob = gql`
  mutation(
    $title: String!
    $commitmentId: ID!
    $companyName: String!
    $locationNames: String!
    $userEmail: String!
    $applyUrl: String!
    $description: String!
  ) {
    postJob(
      input: {
        title: $title
        commitmentId: $commitmentId
        companyName: $companyName
        locationNames: $locationNames
        userEmail: $userEmail
        applyUrl: $applyUrl
        description: $description
      }
    ) {
      id
      title
    }
  }
`;

export { jobs, postJob };
