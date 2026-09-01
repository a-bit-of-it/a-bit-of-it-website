export function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function scrollToSectionOnClick(id) {
    return (event) => {
        event.preventDefault();
        scrollToSection(id);
    };
}
