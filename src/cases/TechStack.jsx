import './TechStack.css'

export default function TechStack({ children })
{
    return (
        <div className="tech-stack">
            <span className="tech-stack-title">For nerds</span>
            <ul className="tech-stack-list">
                {children}
            </ul>
        </div>
    );
}

const TECH_ICON_PATH = "/tech";

function TechItem({ icon, name })
{
    return (
        <li className="tech-stack-item">
            <img
                src={`${TECH_ICON_PATH}/${icon}`}
                alt={name}
                className="tech-stack-icon"
                width={40}
                height={40}
            />
            <span>{name}</span>
        </li>
    );
}

export function PostgreSqlTech() {
    return <TechItem icon="PostgresqlIcon.svg" name="PostgreSQL" />;
}

export function AspDotNetTech() {
    return <TechItem icon="DotNetIcon.svg" name="ASP.NET" />;
}

export function UnityTech() {
    return <TechItem icon="UnityIcon.svg" name="Unity" />;
}

export function BluetoothTech() {
    return <TechItem icon="BluetoothIcon.svg" name="Bluetooth" />;
}

export function RabbitMqTech() {
    return <TechItem icon="RabbitMqIcon.svg" name="RabbitMq" />;
}

export function PythonTech() {
    return <TechItem icon="PythonIcon.svg" name="Python" />;
}

export function MsSqlTech() {
    return <TechItem icon="MssqlIcon.png" name="MSSQL" />;
}

export function ReactTech() {
    return <TechItem icon="ReactIcon.svg" name="React" />;
}

export function AzureTech() {
    return <TechItem icon="AzureIcon.svg" name="Azure" />;
}

export function AiTech() {
    return <TechItem icon="AiIcon.svg" name="AI Agents" />;
}