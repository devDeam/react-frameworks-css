import React from "react";
import MediaCard from "./MaterialCard";
import PersistentDrawerLeft from './Drawer';
const MaterialUi = (): JSX.Element => {
  return (
    <>
      <PersistentDrawerLeft />
      <h2>Material UI en React</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
    </>
  );
};

export default MaterialUi;
