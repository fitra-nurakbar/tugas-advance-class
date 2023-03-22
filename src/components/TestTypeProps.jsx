import React from "react";
import PropTypes from "prop-types";

function TestTypeProps(props) {
  const { nama, usia, alamat } = props;

  return (
    <div>
      <p>{nama}</p>
      <p>{usia}</p>
      <p>{alamat}</p>
    </div>
  );
}

TestTypeProps.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  usia: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alamat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TestTypeProps;
