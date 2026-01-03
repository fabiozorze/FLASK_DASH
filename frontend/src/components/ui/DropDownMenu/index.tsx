import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DropdownContent} from "./styles"
import type { ReactNode } from "react";


interface DropDownProps{
    trigger: ReactNode;
    children: ReactNode;
    align?: "start" | "center" | "end"
}

export function DropDownMenu({trigger, children, align="end"}:DropDownProps) {
    return (
        <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                    <DropdownContent
                        className="MenubarContent"
                        align={align}
                        sideOffset={5}
                    >
                        {children}
                        
                    </DropdownContent>
                </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}