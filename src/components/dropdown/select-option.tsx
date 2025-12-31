import { Option } from "@/components/theme-toggle";

export function renderOption(option: Option) {
    return (<><div className="inline-block">{option.icon}</div>
        <span>{option.label}</span></>)
}


export default function SelectOption({ option, handleSelect, isSelected }: { option: Option, handleSelect: (option: Option) => void, isSelected: boolean }) {
    return (<button
        key={option.value}
        onClick={() => handleSelect(option)}
        className={`flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-left rounded-md hover:bg-dropdown-bg-hover ${isSelected ? "bg-dropdown-bg-selected" : ""}`}
    >
        {renderOption(option)}
    </button>);
}
