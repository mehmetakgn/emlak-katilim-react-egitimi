import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  const { type, size, onClick, children, className } = props;
  const classNames = `${className} btn btn-${type} btn-${size}`;


  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "success", "danger"]).isRequired,
  size: PropTypes.oneOf(["xl", "lg", "sm"]).isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
