import React , { ReactNode, ButtonHTMLAttributes  } from "react";

import "./index.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    children?: ReactNode
    // any props that come into the component
}

/**
 * Button Component displays reusable button
 *
 * @component
 * @example
 * // Button use :
 * <Button onClick={handleClick}>Cliquez-moi</Button>
 *
 * @param {Props} props -Component propriety
 * @param {ReactNode} props.children - Button content
 * @param {ButtonHTMLAttributes} props - other Html propriety of Button.
 * @returns {JSX.Element} - Élément JSX which display btn component.
 */

const Button: React.FC<Props> = ({children, ...props}: Props) => {
    return (
        <button className="btn" {...props}>
            {children}
        </button>
    )
};

export default Button;
