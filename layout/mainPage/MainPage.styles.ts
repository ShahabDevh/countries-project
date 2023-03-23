import styled from "styled-components";

export const Wrapper = styled.div`
	margin: 3.2rem 2.4rem 1.8rem;

	& > div[aria-label="dropdown"] {
		margin-top: 3.2rem;
	}
`;

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 2.4rem;

	& > div {
		margin-bottom: 5rem;
	}
`;
