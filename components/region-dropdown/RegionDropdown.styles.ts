import styled from "styled-components";

export const Dropdown = styled.div.attrs((...props) => ({
	"aria-label": "dropdown",
	...props,
}))<{ ref: HTMLDivElement | undefined | any }>`
	position: relative;
	width: 65%;
`;

export const DropdownButton = styled.button`
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	border: none;
	width: 100%;
	height: 4.6rem;
	padding: 0.8rem 1.2rem;
	background: ${({ theme }) => theme.color.element};
	box-shadow: ${({ theme }) => theme.boxShadow};
	color: ${({ theme }) => theme.color.text};
`;
export const DropdownMenu = styled.div<{ isMenuOpen: boolean }>`
	box-sizing: border-box;
	position: absolute;
	z-index: 1;
	top: calc(4.6rem + 0.8rem);
	left: 50%;
	translate: -50% 0;
	width: 100%;
	background: #fff;
	padding: 0.8rem 1.2rem;
	background: ${({ theme }) => theme.color.element};
	box-shadow: ${({ theme }) => theme.boxShadow};
	transition: 0.25s ease all;

	opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
	visibility: ${({ isMenuOpen }) => (isMenuOpen ? "visible" : "hidden")};
`;

export const DropdownItem = styled.div`
	font-size: ${({ theme }) => theme.fontSize.homePage};
	color: ${({ theme }) => theme.color.text};
	margin-bottom: 1rem;
	cursor: pointer;
`;

export const DropdownLabel = styled.span`
	font-size: ${({ theme }) => theme.fontSize.homePage};
`;
