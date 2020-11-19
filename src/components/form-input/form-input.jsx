import './form-input.scss';


const FormInput = ({ handleChange, label, ...otherProps }) => {
    let labelComp = null;
    if (label) {
        labelComp = <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
            {label}
        </label>;
    }

    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps} />
            {labelComp}
        </div>
    );
};

export default FormInput;
