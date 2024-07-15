import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatForms";
import { Platform } from "../hooks/usePlatForms";

interface Props {
  onSelectPlatForm: (platform: Platform) => void;
  seletedPlatForm: Platform | null;
}
const PlatFormSelector = ({ onSelectPlatForm, seletedPlatForm }: Props) => {
  const { generic, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {seletedPlatForm?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {generic.map((pf) => (
          <MenuItem onClick={() => onSelectPlatForm(pf)} key={pf.id}>
            {pf.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatFormSelector;
