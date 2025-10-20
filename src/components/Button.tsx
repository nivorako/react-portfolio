import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "submit";
    fullWidth?: boolean;
    as?: any;
    to?: string;
}

const StyledButton = styled.button<ButtonProps>`
    padding: 1rem 2rem;
    font-size: 1.1rem;
    background: ${props => props.theme.background === '#0F172A' ? '#1e293b' : 'var(--secondary)'};
    color: ${props => props.theme.background === '#0F172A' ? 'var(--primary)' : 'var(--text)'};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    width: ${(props) => (props.fullWidth ? "100%" : "auto")};
    max-width: ${(props) => (props.fullWidth ? "300px" : "none")};
    margin: ${(props) => (props.fullWidth ? "0 auto" : "0")};
    position: relative;
    transform-style: preserve-3d;
    
    /* Effet 3D avec ombre */
    box-shadow: 
        0 2px 4px rgba(0, 0, 0, 0.1),
        0 4px 8px rgba(0, 0, 0, 0.08),
        0 1px 0 rgba(255, 255, 255, 0.1) inset;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0) 50%,
            rgba(0, 0, 0, 0.1) 100%
        );
        border-radius: 5px;
        pointer-events: none;
    }

    &:hover {
        transform: translateY(-4px) translateZ(20px) rotateX(5deg);
        background: ${props => props.theme.background === '#0F172A' ? 'var(--secondary)' : '#1e293b'};
        color: ${props => props.theme.background === '#0F172A' ? 'var(--text)' : 'var(--primary)'};
        box-shadow: 
            0 8px 16px rgba(0, 0, 0, 0.2),
            0 12px 24px rgba(0, 0, 0, 0.15),
            0 2px 0 rgba(255, 255, 255, 0.15) inset;
    }

    &:active {
        transform: translateY(-1px) translateZ(10px) scale(0.98);
        box-shadow: 
            0 4px 8px rgba(0, 0, 0, 0.15),
            0 6px 12px rgba(0, 0, 0, 0.1),
            0 1px 0 rgba(255, 255, 255, 0.1) inset;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
        transform: none;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    ${(props) => {
        const isDark = props.theme.background === '#0F172A';
        if (props.variant === "primary") {
            return `
                background: ${isDark ? 'var(--secondary)' : 'var(--primary)'};
                color: white;
                
                &:hover {
                    background: ${isDark ? 'var(--primary)' : 'var(--secondary)'};
                }
            `;
        }
    }}

    ${(props) => {
        const isDark = props.theme.background === '#0F172A';
        if (props.variant === "submit") {
            return `
                background: ${isDark ? 'var(--secondary)' : 'var(--primary)'};
                color: white;
                
                &:hover {
                    background: ${isDark ? 'var(--primary)' : 'var(--secondary)'};
                }
            `;
        }
    }}
`;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
