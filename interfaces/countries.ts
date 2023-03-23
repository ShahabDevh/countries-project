import { URL } from "url";

type CountryStatus = "officially-assigned" | "user-assigned";
type LatitudeAndLongitude = [number, number];
type CountryStartWeek = "monday" | "sunday" | "saturday";
type CarDriverSeat = "left" | "right";

interface Maps {
	googleMaps: URL;
	openStreetMaps: URL;
}

interface ImageFormate {
	png: URL;
	svg: URL;
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

export const test = {
	name: {
		common: "Aruba",
		official: "Aruba",
		nativeName: {
			nld: { official: "Aruba", common: "Aruba" },
			pap: { official: "Aruba", common: "Aruba" },
		},
	},
	tld: [".aw"],
	cca2: "AW",
	ccn3: "533",
	cca3: "ABW",
	cioc: "ARU",
	independent: false,
	status: "officially-assigned",
	unMember: false,
	currencies: { AWG: { name: "Aruban florin", symbol: "ƒ" } },
	idd: { root: "+2", suffixes: ["97"] },
	capital: ["Oranjestad"],
	altSpellings: ["AW"],
	region: "Americas",
	subregion: "Caribbean",
	languages: { nld: "Dutch", pap: "Papiamento" },
	translations: {
		ara: { official: "أروبا", common: "أروبا" },
		bre: { official: "Aruba", common: "Aruba" },
		ces: { official: "Aruba", common: "Aruba" },
		cym: { official: "Aruba", common: "Aruba" },
		deu: { official: "Aruba", common: "Aruba" },
		est: { official: "Aruba", common: "Aruba" },
		fin: { official: "Aruba", common: "Aruba" },
		fra: { official: "Aruba", common: "Aruba" },
		hrv: { official: "Aruba", common: "Aruba" },
		hun: { official: "Aruba", common: "Aruba" },
		ita: { official: "Aruba", common: "Aruba" },
		jpn: { official: "アルバ", common: "アルバ" },
		kor: { official: "아루바", common: "아루바" },
		nld: { official: "Aruba", common: "Aruba" },
		per: { official: "آروبا", common: "آروبا" },
		pol: { official: "Aruba", common: "Aruba" },
		por: { official: "Aruba", common: "Aruba" },
		rus: { official: "Аруба", common: "Аруба" },
		slk: { official: "Aruba", common: "Aruba" },
		spa: { official: "Aruba", common: "Aruba" },
		swe: { official: "Aruba", common: "Aruba" },
		tur: { official: "Aruba", common: "Aruba" },
		urd: { official: "اروبا", common: "اروبا" },
		zho: { official: "阿鲁巴", common: "阿鲁巴" },
	},
	latlng: [12.5, -69.96666666],
	landlocked: false,
	area: 180.0,
	demonyms: {
		eng: { f: "Aruban", m: "Aruban" },
		fra: { f: "Arubaise", m: "Arubais" },
	},
	flag: "\uD83C\uDDE6\uD83C\uDDFC",
	maps: {
		googleMaps: "https://goo.gl/maps/8hopbQqifHAgyZyg8",
		openStreetMaps: "https://www.openstreetmap.org/relation/1231749",
	},
	population: 106766,
	fifa: "ARU",
	car: { side: "right" },
	timezones: ["UTC-04:00"],
	continents: ["North America"],
	flags: {
		png: "https://flagcdn.com/w320/aw.png",
		svg: "https://flagcdn.com/aw.svg",
	},
	coatOfArms: {
		png: "https://mainfacts.com/media/images/coats_of_arms/aw.png",
		svg: "https://mainfacts.com/media/images/coats_of_arms/aw.svg",
	},
	startOfWeek: "monday",
	capitalInfo: { latlng: [12.52, -70.03] },
};
