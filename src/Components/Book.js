import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

export const Book = () => {
  const { id } = useParams();

  // const obj = useOutletContext();

  return (
    <h1>
      {" "}
      Book {id}
      {/* <br />
      {obj.hello}{" "} */}
    </h1>
  );
};
