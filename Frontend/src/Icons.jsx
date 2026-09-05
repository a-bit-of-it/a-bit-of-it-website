export function LegoIcon() {
    return (
        <img width={70} src="/LegoIcon.svg" alt="The iconic red/yellow/white LEGO icon" />
    );
}

export function LegoHouseIcon() {
    return (
        <img width={227} src="/LegoHouseIcon.png" alt="LEGO House - Home of the Brick icon" />
    );
}

export function SuperMarioIcon() {
    return (
        <img width={150} src="/SuperMarioIcon.svg" alt="The iconic red/green/yellow/blue Super Mario icon" />
    );
}

export function ChemoMetecIcon() {
    return (
        <img width={150} src="/ChemoMetecIcon.png" alt="The icon of the cell counting equipment manufacturer, ChemoMetec" />
    );  
}

const svgIconProps = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
};

export function AccountingIcon() {
    return (
        <svg {...svgIconProps} aria-hidden="true">
            <path d="M6 3h9l3 3v15H6z" />
            <path d="M9 9h6M9 12h6M9 15h3" />
            <circle cx="17" cy="17" r="3" />
            <path d="M15.5 17l1 1 2-2" />
        </svg>
    );
}

export function AgentIcon() {
    return (
        <svg {...svgIconProps} aria-hidden="true">
            <path d="M4 5h16v11H8l-4 4z" />
            <circle cx="9" cy="10.5" r="0.6" fill="currentColor" stroke="none" />
            <circle cx="12" cy="10.5" r="0.6" fill="currentColor" stroke="none" />
            <circle cx="15" cy="10.5" r="0.6" fill="currentColor" stroke="none" />
        </svg>
    );
}

export function ResearchIcon() {
    return (
        <svg {...svgIconProps} aria-hidden="true">
            <path d="M6 3h8l4 4v14H6z" />
            <path d="M9 9h6M9 12h4" />
            <circle cx="16" cy="17" r="3" />
            <path d="M18.2 19.2L21 22" />
        </svg>
    );
}