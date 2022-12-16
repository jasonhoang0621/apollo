import { gql } from "@apollo/client";

const getStudents = gql`
  query getStudents {
    students {
      id
      name
      age
      class {
        id
        name
        students {
          name
        }
      }
    }
  }
`;

export { getStudents };
