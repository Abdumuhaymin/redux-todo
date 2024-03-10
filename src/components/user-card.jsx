import React from "react";

export const UserCard = ({ name, surname, id }) => {
  return (
    <>
      <div>
        <h1>{name}</h1>
        <h2>{surname}</h2>
      </div>
    </>
  );
};
