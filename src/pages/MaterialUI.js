import React from "react";
import MaterialHeader from "../components/MaterialHeader";
import MaterialTableUI from "../components/MaterialTableUI";
import MaterialTileUI from "../components/MaterialTileUI";

const MaterialUI = () => {
  return (
    <div className="mt-32">
      {/*<MaterialHeader />*/}
      <MaterialTableUI />
      <MaterialTileUI />
      {/*<MaterialBody />*/}
    </div>
  );
};

export default MaterialUI;
