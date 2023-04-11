import CountryCard from "components/country-card/CountryCard";
import { Country } from "interfaces/countries";
import { memo } from "react";

type IProps = {
	countries: Country[];
};

function Countries({ countries }: IProps) {
	return (
		<>
			{countries.map((item) => (
				<CountryCard key={item.name.official} data={item} />
			))}
		</>
	);
}

export default memo(Countries);
