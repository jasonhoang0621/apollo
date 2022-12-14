import { useQuery } from "@apollo/client";
import React from "react";
import { getStudents } from "../apollo-client/query";
import ReactJson from "react-json-view";

const Home = () => {
  const { data, loading } = useQuery(getStudents);

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
    </div>
  );
};

export default Home;
