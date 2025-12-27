import * as Menubar from "@radix-ui/react-menubar"
import { MenubarRoot, MenubarTrigger } from "./styles"
import { QuestionIcon } from "@phosphor-icons/react"


export function DropDownMenu() {
    return (
        <MenubarRoot className="MenubarRoot">
            <Menubar.Menu>
                <MenubarTrigger className="MenubarTrigger"><QuestionIcon size={18}/> Support</MenubarTrigger>
                <Menubar.Portal>
                    <Menubar.Content
                        className="MenubarContent"
                        align="start"
                        sideOffset={5}
                        alignOffset={-3}
                    >
                        <Menubar.Item className="MenubarItem">
                            New Tab
                        </Menubar.Item>
                        <Menubar.Item className="MenubarItem">
                            New Window
                        </Menubar.Item>
                        <Menubar.Item className="MenubarItem">
                            Print…
                        </Menubar.Item>
                    </Menubar.Content>
                </Menubar.Portal>
            </Menubar.Menu>
        </MenubarRoot>
    )
}