import './button.styles.scss';

const Button = ({ children, buttonType, ...allprops }) => {
  const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
  };

  return (
    <button
      {...allprops}
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
    >
      {children}
    </button>
  );
};

export default Button;
