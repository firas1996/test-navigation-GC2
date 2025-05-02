import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

const UserDetails = () => {
  const { abc } = useOutletContext();
  const { id } = useParams();
  return (
    <div>
      <h1>
        User: {id}: {abc}
      </h1>
    </div>
  );
};

export default UserDetails;
