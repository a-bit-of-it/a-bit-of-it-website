import '../../../App.css';

function formatDate(value) {
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
        return value;
    }
    return parsed.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function FromToRow({ from, to }) {
    return (<p className="highlight">{formatDate(from)} -- {formatDate(to)}</p>);
}
