import "./button.sass";

const Button = (props) => {
    const { children } = props;
    return (
        <div {...props} className="ui_button_background">
            <button className="ui_button">{children}</button>
        </div>
    );
};

export default Button;
