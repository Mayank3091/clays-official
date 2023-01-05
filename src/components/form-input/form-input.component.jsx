import './form-input.styles.scss';

const FormInput = ({ label, ...otherprops }) => {
  const labelClass = otherprops.value.length ? 'shrink' : '';

  return (
    <div className="group">
      {label && (
        <label className={`${labelClass} form-input-label`}>{label}</label>
      )}
      <input {...otherprops} className="form-input" />
    </div>
  );
};

export default FormInput;
