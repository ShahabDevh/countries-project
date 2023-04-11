import { useEffect, useRef, useState } from "react";

export const useOnOutSideClose = <T extends HTMLElement>() => {
	const ref = useRef<T>(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const closeOnOutSideClick = (e: MouseEvent) => {
			if (
				isMenuOpen &&
				ref.current &&
				!ref.current.contains(e.target as Node)
			) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", closeOnOutSideClick);
	}, [isMenuOpen]);

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const openMenu = () => {
		setIsMenuOpen(true);
	};

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return { ref, closeMenu, openMenu, toggleMenu, isMenuOpen };
};
