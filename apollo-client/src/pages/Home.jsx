import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { getStudents } from "../apollo-client/query";
import ReactJson from "react-json-view";
import { createStudent } from "../apollo-client/mutation";

const Home = () => {
  const { data, loading } = useQuery(getStudents);
  const [
    mutateFunction,
    { data: createData, loading: _createLoading, error: _error },
  ] = useMutation(createStudent);

  const handleAddStudent = () => {
    mutateFunction({
      variables: {
        name: "John Doe",
        age: 20,
        classId: "6398b28d2517ed74ab17b3b1",
      },
      refetchQueries: [{ query: getStudents }],
    });
  };

  console.log(createData);

  if (loading) return <div>Loading...</div>;

  return (
    <div
      style={{
        marginTop: 20,
        marginLeft: 20,
      }}
    >
      <ReactJson
        src={data}
        collapsed
        displayDataTypes={false}
        theme="ocean"
        iconStyle="square"
        enableClipboard={false}
        //increase size
      />

      <button
        onClick={handleAddStudent}
        style={{
          backgroundColor: "white",
          color: "black",
          padding: 10,
          borderRadius: 5,
          marginTop: 20,
          cursor: "pointer",
        }}
      >
        Create student
      </button>
    </div>
  );
};

export default Home;
