import Icon from "../Icon";

export default function StackInfo({ data, onStackSelect }) {

    const handleClick = () => {
        onStackSelect(data);
    };

    return (
        <div onClick={handleClick} className="flex items-center text-neutral-200 bg-neutral-900 hover:bg-neutral-800 hover:scale-105 transition-all rounded-md h-10 px-2 py-2 cursor-pointer">
            <Icon icon={data.icon} className="w-8 h-8" />
            <div className="flex flex-col ml-2 text-neutral-300 text-opacity-95 w-full">
                <span className="text-sm">{data.name}</span>
                {
                    data.certifications.length > 0 && (
                        <Icon icon="diploma" className="w-4 h-4 self-end" />
                    )
                }
            </div>
        </div>
    );
}
