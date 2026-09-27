export default function Button({
    text,
    type = "button",
    onClick,
    disabled = false,
    }) {
    return (
        <button type={type} onClick={onClick} disabled={disabled}
        className="w-full max-w-80 bg-primary-500 text-black px-4 py-2 rounded-md active:bg-primary-700 hover:bg-primary-600 disabled:bg-primary-100 disabled:cursor-not-allowed"
        >
            {text}
        </button>
    );
}