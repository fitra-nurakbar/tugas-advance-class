import React from "react";
import TestTypeProps from "../components/TestTypeProps";
import List from "../components/List";

export default function Test() {
  return (
    <div>
      <TestTypeProps nama={"fitra"} usia={20} alamat={"Ciamis"} />
      <List />
    </div>
  );
}
