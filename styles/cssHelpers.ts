import styled from "styled-components";

export const H1 = styled.h1`
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.text};
	font-size: 1.6rem;
`;

export const H2 = styled.h2`
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.text};
	font-size: 2.2rem;
`;
