import React from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import "./Form.css";
export default function Form({ validaInput, handleSubmit, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input onChange={validaInput} type="text" value={novaTarefa}></input>
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

/*Form.defaultProps = {
  novaTarefa: "Valor Padrão",
};*/
Form.propTypes = {
  validaInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
