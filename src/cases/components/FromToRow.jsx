import './FromToRow.css'

function formatDate(value) {
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
        return value;
    }
    return parsed.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function FromToRow({ from, to }) {
    return (<span className="case-dates">{formatDate(from)} — {formatDate(to)}</span>);
}
