import { DropDownMenu } from "@/components/ui/DropDownMenu";
import { HeaderNavigation, Title,  } from "./styles";

interface HeaderProps {
    title: string | undefined;
  }
export function Header({title}:HeaderProps){
    return(
    <HeaderNavigation>
        <Title>{title}</Title>
        <DropDownMenu/>
    </HeaderNavigation>
    )
}