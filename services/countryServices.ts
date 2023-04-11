import axios, { AxiosResponse } from "axios";
import { Country } from "interfaces/countries";

export const getCountries = (): Promise<AxiosResponse<Country[]>> => {
	return axios.get("https://restcountries.com/v3.1/all");
};
export const getCountry = (countryName: string) => {
	return axios.get(
		`https://restcountries.com/v3.1/name/${countryName}?fullText=true`
	);
};
