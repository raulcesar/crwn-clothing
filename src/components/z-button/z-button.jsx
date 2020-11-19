import './z-button.scss';


const ZButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    const classNameGoogle = isGoogleSignIn ? 'google-sign-in' : '';
    return (
        <button className={`${classNameGoogle} z-button`} {...otherProps}>
            {children}
        </button>
    );
};

export default ZButton;
