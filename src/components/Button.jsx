import PropTypes from 'prop-types';

const Button = ({ text, color, onClick }) => {
    return (
        <button
            style={{ backgroundColor: color }}
            className="button"
            onClick={onClick}>
            {text}
        </button>
    );
};

Button.defaultProps = {
    color: 'steelblue',
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default Button