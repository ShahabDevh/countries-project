import { RegionItem } from "interfaces/region";
import { useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import {
	Dropdown,
	DropdownButton,
	DropdownItem,
	DropdownLabel,
	DropdownMenu,
} from "./RegionDropdown.styles";

interface IProps {
	value: RegionItem | null;
	onChange: (item: RegionItem) => void;
}

const regions: RegionItem[] = [
	{ value: "africa", label: "Africa" },
	{ value: "america", label: "America" },
	{ value: "asia", label: "Asia" },
	{ value: "europe", label: "Europe" },
	{ value: "oceania", label: "Oceania" },
];

// TODO: add handler for clicking out side of the dropdown
function RegionDropdown({ onChange, value }: IProps) {
	const dropdownRef = useRef<HTMLDivElement | undefined>();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	// const openMenu = () => {
	// 	setIsMenuOpen(true);
	// };

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<Dropdown ref={dropdownRef}>
			<DropdownButton onClick={toggleMenu}>
				<DropdownLabel>
					{value ? value.label : "Filter by Region"}
				</DropdownLabel>
				<BiChevronDown
					size={18}
					style={{ rotate: isMenuOpen ? "180deg" : "0deg" }} // TODO: move it to some where else
				/>
			</DropdownButton>

			<DropdownMenu isMenuOpen={isMenuOpen}>
				{regions.map((item) => (
					<DropdownItem
						key={item.value}
						onClick={() => {
							onChange(item);
							closeMenu();
						}}
					>
						{item.label}
					</DropdownItem>
				))}
			</DropdownMenu>
		</Dropdown>
	);
}

export default RegionDropdown;
