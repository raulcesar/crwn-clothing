import './z-button.scss';


const ZButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
    const classNameGoogle = isGoogleSignIn ? 'google-sign-in' : '';
    const classNameInverted = inverted ? 'inverted' : '';
    return (
        <button className={`${classNameGoogle} ${classNameInverted} z-button`} {...otherProps}>
            {children}
        </button>
    );
};

export default ZButton;
