export default function Tooltip({ message, children, classNames }) {
    return (
        <div className={`group relative flex flex-col items-center ${classNames}`}>
            {children}
            <span className="absolute top-8 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 z-50">{message}</span>
        </div>
    )
}
