import './z-button.scss';


const ZButton = ({ children, ...otherProps }) => {
    return (
        <button className='z-button' {...otherProps}>
            {children}
        </button>
    );
};

export default ZButton;
