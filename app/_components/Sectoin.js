export default function Section({ children, bg = "", id }) {
    return (
        <section id={id} className={`md:py-12 md:px-8 p-2 ${bg}`}>
            <div className="max-w-screen-2xl mx-auto">{children}</div>
        </section>
    );
}
