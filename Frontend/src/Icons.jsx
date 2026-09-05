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

export function GithubIcon() {
    return (
        <svg className="github-link-icon" width={20} height={20} viewBox="0 0 19 19" aria-hidden="true">
            <path fill="#08060d" fillRule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clipRule="evenodd"/>
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