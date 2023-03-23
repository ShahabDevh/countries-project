import axios from "axios";
import CountryCard from "components/countryCard/CountryCard";
import RegionDropdown from "components/regionDropdown/RegionDropdown";
import SearchInput from "components/searchInput/SearchInput";
import { Country } from "interfaces/countries";
import { RegionItem } from "interfaces/region";
import { memo, useCallback, useEffect, useState } from "react";
import { CardContainer, Wrapper } from "./MainPage.styles";

function MainPage() {
	const [search, setSearch] = useState<string>("");
	const [region, setRegion] = useState<RegionItem | null>(null);
	const [countries, setCountries] = useState<Country[]>([]);

	useEffect(() => {
		getCountries();
	}, []);

	const getCountries = async () => {
		try {
			const { data } = await axios.get("https://restcountries.com/v3.1/all");
			// const { data } = await axios.get(
			// 	"https://restcountries.com/v3.1/name/aruba?fullText=true"
			// );
			setCountries(data);
		} catch (err) {
			console.error(err);
		}
	};

	const handleChangeSearch = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setSearch(e.target.value);
		},
		[]
	);

	const handleChangeRegion = useCallback((region: RegionItem) => {
		setRegion(region);
	}, []);

	return (
		<Wrapper>
			<SearchInput onChange={handleChangeSearch} value={search} />
			<RegionDropdown onChange={handleChangeRegion} value={region} />

			<NewCountries countries={countries} />
			{/* <CardContainer>
				{countries?.map((item) => (
					<CountryCard key={item.name.official} data={item} />
				))}
			</CardContainer> */}
		</Wrapper>
	);
}

function Countries({ countries }: { countries: Country[] }) {
	return (
		<CardContainer>
			{countries?.map((item) => (
				<CountryCard key={item.name.official} data={item} />
			))}
		</CardContainer>
	);
}

const NewCountries = memo(Countries);

export default MainPage;
