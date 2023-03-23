import styled from "styled-components";

export const HeaderBox = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: ${({ theme }) => theme.boxShadow};
	background: ${({ theme }) => theme.color.element};
	padding: 1.2rem 0.8rem;
	height: 8.2rem;
`;

export const Button = styled.button`
	display: inline-flex;
	align-items: center;

	/* height: 100%; */
	color: ${({ theme }) => theme.color.text};
	font-weight: ${({ theme }) => theme.fontWeight.light};
	background: inherit;
	border: none;
	border-radius: 0.8rem;
	padding: 1.2rem 0.8rem;

	&:hover {
		background: ${({ theme }) => theme.color.background};
	}

	& svg {
		margin-right: 0.8rem;
	}
`;
