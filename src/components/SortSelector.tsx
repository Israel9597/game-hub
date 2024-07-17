import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}
const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { vlaue: "", label: "Relevance" },
    { vlaue: "-added", label: "Date added" },
    { vlaue: "name", label: "Name" },
    { vlaue: "-releases", label: "Release date" },
    { vlaue: "-metacritic", label: "Popularity" },
    { vlaue: "-rating", label: "Average rating" },
  ];
  const currentSortOrder = sortOrders.find((order) => order.vlaue == sortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By:{currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((lables) => (
          <MenuItem
            onClick={() => onSelectSortOrder(lables.vlaue)}
            key={lables.vlaue}
          >
            {lables.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
