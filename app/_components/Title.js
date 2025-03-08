export default function Title({ title }) {
    return (
        <h2 className="text-2xl font-bold relative pl-20 my-8">
            <span className="absolute left-0 top-1/2 w-96 h-[2px] bg-gray-300 transform -translate-x-80"></span>
            <span className="translate-x-1/4 translate-y-1/2 blur-md absolute">
                {title}
            </span>
            {title}
        </h2>
    );
}
