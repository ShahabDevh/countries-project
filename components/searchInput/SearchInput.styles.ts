import styled from "styled-components";

export const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	border-radius: 0.4rem;
	padding: 1.8rem 2.4rem;
	color: ${({ theme }) => theme.color.text};
	background: ${({ theme }) => theme.color.element};
	box-shadow: ${({ theme }) => theme.boxShadow};

	svg {
		margin: 0 1.2rem 0 0.8rem;
		color: ${({ theme }) => theme.color.text};
	}
`;

export const TextInput = styled.input.attrs((props) => ({
	type: "text",
	...props,
}))`
	border: none;
	background: inherit;
	height: 100%;
	width: 100%;
	color: ${({ theme }) => theme.color.text};
	padding: 0 1.6rem;
	outline: none;

	&::placeholder {
		color: ${({ theme }) => theme.color.text};
	}
`;
