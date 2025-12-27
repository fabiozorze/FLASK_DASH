import styled from "styled-components";
import * as Menubar from "@radix-ui/react-menubar";

export const MenubarRoot = styled(Menubar.Root)`
	background-color: ${props=>props.theme.colors["purple"]};

    width: 12.25rem;
    height: 2.35rem;

	display: flex;
    justify-content: center;

	padding: 3px;

	border-radius: 6px;
`;

export const MenubarTrigger = styled(Menubar.Trigger)`
    display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2px;

    color: ${props=>props.theme.colors["white"]};
	font-size: ${props=>props.theme.fontSizes["md"]};
    font-weight: ${props=>props.theme.fontWeights["medium"]};
    line-height: 1;

	padding: 8px 12px;

	outline: none;

	user-select: none;

	border-radius: 4px;

`