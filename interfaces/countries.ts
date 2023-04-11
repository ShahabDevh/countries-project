type CountryStatus = "officially-assigned" | "user-assigned";
type LatitudeAndLongitude = [number, number];
type CountryStartWeek = "monday" | "sunday" | "saturday";
type CarDriverSeat = "left" | "right";

interface Maps {
	googleMaps: string;
	openStreetMaps: string;
}

interface ImageFormate {
	png: string;
	svg: string;
}

interface CapitalInfo {
	latlng: LatitudeAndLongitude;
}

interface CardInfo {
	side: CarDriverSeat;
}

interface Idd {
	root: string;
	suffixes: string[];
}

export interface Country {
	name: {
		common: string;
		official: string;
		nativeName: object;
	};
	tld: string[];
	cca2: string;
	ccn3: string;
	cca3: string;
	cioc: string;
	independent: boolean;
	status: CountryStatus;
	unMember: boolean;
	currencies: object;
	idd: Idd;
	capital: string[];
	altSpellings: string[];
	region: string;
	subregion: string;
	languages: object;
	translations: object;
	latlng: LatitudeAndLongitude;
	landlocked: boolean;
	area: number;
	demonyms: object;
	flag: string;
	maps: Maps;
	population: number;
	fifa: string;
	car: CardInfo;
	timezones: string[];
	continents: string[];
	flags: ImageFormate;
	coatOfArms: ImageFormate;
	startOfWeek: CountryStartWeek;
	capitalInfo: CapitalInfo;
}
