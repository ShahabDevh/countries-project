import { useQuery } from "react-query";
import { getCountries } from "services/countryServices";

const fetcher = () => getCountries().then((res) => res.data);

export const useGetCountries = () => {
	return useQuery(["countries"], fetcher, {
		refetchOnWindowFocus: false,
	});
};
