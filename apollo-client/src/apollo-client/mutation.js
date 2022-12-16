import { gql } from "@apollo/client";

const createStudent = gql`
  mutation createStudent($name: String!, $age: Int!, $classId: ID!) {
    createStudent(name: $name, age: $age, classId: $classId) {
      id
      name
      age
      class {
        name
      }
    }
  }
`;

export { createStudent };
