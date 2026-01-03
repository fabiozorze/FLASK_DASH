import { DropDownMenu } from "@/components/ui/DropDownMenu";
import { HeaderNavigation, NavMenu, MenuButton, Title, SupportButton,  } from "./styles";
import { CaretCircleDownIcon, QuestionIcon, UserIcon } from "@phosphor-icons/react";
import { DropdownItem } from "@/components/ui/DropDownMenu/styles";


interface HeaderProps {
    title: string | undefined;
  }
export function Header({title}:HeaderProps){
    return(
    <HeaderNavigation>
        <Title>{title}</Title>
        <NavMenu>
        <DropDownMenu 
        align="end" 
        trigger={
            <SupportButton>
                <QuestionIcon size={18}/>
                Help & Support
                <CaretCircleDownIcon size={18}/>
            </SupportButton>
        }>
            <DropdownItem>FAQ</DropdownItem>
            <DropdownItem>Community</DropdownItem>
            <DropdownItem>Contact us</DropdownItem>
        </DropDownMenu>

        <DropDownMenu 
        align="end" 
        trigger={
            <MenuButton>
                <UserIcon size={25}/>
            </MenuButton>
        }>
            <DropdownItem>FAQ</DropdownItem>
            <DropdownItem>Community</DropdownItem>
            <DropdownItem>Contact us</DropdownItem>
        </DropDownMenu>

        </NavMenu>

    </HeaderNavigation>
    )
}