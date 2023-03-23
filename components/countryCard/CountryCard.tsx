import Image from "next/image";
import { H2 } from "styles/cssHelpers";
import { formatToThreeDigit } from "utils/number";
import {
	Card,
	CardDetail,
	CardDetailContainer,
	CountryInfoWrapper,
	ImageWrapper,
} from "./CountryCard.styles";

function CountryCard({ data }: { data: any }) {
	return (
		<Card>
			<ImageWrapper>
				<Image src={data.flags.png} alt={data.name.official} layout="fill" />
			</ImageWrapper>

			<CountryInfoWrapper>
				<H2>{data.name.official}</H2>

				<CardDetailContainer>
					Population:
					<CardDetail>{formatToThreeDigit(data.population)}</CardDetail>
				</CardDetailContainer>
				<CardDetailContainer>
					Region: <CardDetail>{data.region}</CardDetail>
				</CardDetailContainer>
				<CardDetailContainer>
					Capital: <CardDetail>{data.capital}</CardDetail>
				</CardDetailContainer>
			</CountryInfoWrapper>
		</Card>
	);
}

export default CountryCard;
