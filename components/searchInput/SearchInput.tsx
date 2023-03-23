import { AiOutlineSearch } from "react-icons/ai";
import { InputWrapper, TextInput } from "./SearchInput.styles";

interface IProps {
	value: string;
	// eslint-disable-next-line no-unused-vars
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput({ value, onChange }: IProps) {
	return (
		<InputWrapper>
			<AiOutlineSearch />
			<TextInput
				placeholder="Search for a country..."
				onChange={onChange}
				value={value}
			/>
		</InputWrapper>
	);
}

export default SearchInput;
