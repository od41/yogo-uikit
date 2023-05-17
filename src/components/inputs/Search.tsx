import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import React from "react";
import { SearchIcon, ShortcutIcon } from "@rootcomponents/base/Icons";

export const Search = () => {
  return (
    <>
      <InputGroup variant="filled">
        <InputLeftAddon children={<SearchIcon/>} />
        <Input placeholder="Search" />
        <InputRightAddon children={<ShortcutIcon />} />
      </InputGroup>
    </>
  );
};
