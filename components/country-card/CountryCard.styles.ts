import styled from "styled-components";

export const Card = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	overflow: hidden;
	width: 90%;
	box-shadow: ${({ theme }) => theme.boxShadow};
	background: ${({ theme }) => theme.color.element};
`;

export const ImageWrapper = styled.div`
	position: relative;
	width: 100%;
	/* max-width: 32rem; */
	height: 18rem;
`;

export const CountryInfoWrapper = styled.div`
	width: 100%;
	padding: 2.4rem 1.6rem;

	h2 {
		margin-bottom: 1.6rem;
	}
`;

export const CardDetailContainer = styled.p`
	color: ${({ theme }) => theme.color.text};
	font-size: ${({ theme }) => theme.fontSize.homePage};
	font-weight: ${({ theme }) => theme.fontWeight.regular};
	margin-bottom: 0.4rem;
`;

export const CardDetail = styled.span`
	color: ${({ theme }) => theme.color.text};
	font-weight: ${({ theme }) => theme.fontWeight.light};
	margin-left: 0.4rem;
`;
