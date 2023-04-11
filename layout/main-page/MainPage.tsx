import Countries from "components/countries-container/CountriesContainer";
import RegionDropdown from "components/region-dropdown/RegionDropdown";
import SearchInput from "components/search-input/SearchInput";
import { useGetCountries } from "hooks/useCountries";
import { useDebounce } from "hooks/useDebounce";
import { RegionItem } from "interfaces/region";
import { useMemo, useState } from "react";
import { Loading } from "styles/cssHelpers";
import { CountriesContainer, Wrapper } from "./MainPage.styles";

function MainPage() {
	const [search, setSearch] = useState("");
	const [region, setRegion] = useState<RegionItem | null>(null);
	const debouncedSearch = useDebounce(search, 450);

	const { data, status } = useGetCountries();

	const filteredData = useMemo(() => {
		if (!data) return [];

		if (debouncedSearch.length && region) {
			return data.filter(
				(item) =>
					item.region.toLowerCase() === region.value &&
					item.name.official.toLowerCase().includes(debouncedSearch)
			);
		}

		if (debouncedSearch.length) {
			return data.filter((item) =>
				item.name.official.toLowerCase().includes(debouncedSearch)
			);
		}

		if (region) {
			return data.filter((item) => item.region.toLowerCase() === region.value);
		}

		return data;
	}, [data, debouncedSearch, region]);

	const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleChangeRegion = (region: RegionItem) => {
		setRegion(region);
	};

	return (
		<Wrapper>
			<SearchInput onChange={handleChangeSearch} value={search} />
			<RegionDropdown onChange={handleChangeRegion} value={region} />

			<CountriesContainer>
				{status === "loading" && <Loading>LOADING...</Loading>}
				{status === "success" && <Countries countries={filteredData} />}
			</CountriesContainer>
		</Wrapper>
	);
}

export default MainPage;
