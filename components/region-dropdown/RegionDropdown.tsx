import { useOnOutSideClose } from "hooks/useOnOutSideClose";
import { RegionItem } from "interfaces/region";
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
	{ value: "americas", label: "Americas" },
	{ value: "asia", label: "Asia" },
	{ value: "europe", label: "Europe" },
	{ value: "oceania", label: "Oceania" },
];

function RegionDropdown({ onChange, value }: IProps) {
	const { ref, closeMenu, isMenuOpen, toggleMenu } =
		useOnOutSideClose<HTMLDivElement>();

	const handleClick = (item: RegionItem) => {
		onChange(item);
		closeMenu();
	};

	return (
		<Dropdown ref={ref}>
			<DropdownButton onClick={toggleMenu}>
				<DropdownLabel>
					{value ? value.label : "Filter by Region"}
				</DropdownLabel>
				<BiChevronDown
					size={18}
					style={{ rotate: isMenuOpen ? "180deg" : "0deg" }}
				/>
			</DropdownButton>

			<DropdownMenu isMenuOpen={isMenuOpen}>
				{regions.map((item) => (
					<DropdownItem key={item.value} onClick={() => handleClick(item)}>
						{item.label}
					</DropdownItem>
				))}
			</DropdownMenu>
		</Dropdown>
	);
}

export default RegionDropdown;
