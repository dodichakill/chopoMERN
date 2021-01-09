import React, { useRef } from "react";
import propTypes from "prop-types";

import "./index.scss";

export default function File(props) {
  const {
    value,
    placeholder,
    name,
    accept,
    prepend,
    outerClassName,
    append,
    inputClassName,
  } = props;

  const refInputFile = useRef(null);

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          type="file"
          name={name}
          accept={accept}
          ref={refInputFile}
          value={value}
          onChange={props.onChange}
          className="d-none"
        />
        <input
          className={["form-control", inputClassName].join(" ")}
          onClick={() => refInputFile.current.click()}
          defaultValue={value}
          placeholder={placeholder}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
    </div>
  );
}

File.defaultProps = {
  placeholder: "Browse a file...",
};

File.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
