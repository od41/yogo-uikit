import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import React from "react";
import { SearchIcon, ShortcutIcon } from "@rootcomponents/base/Icons";

type InputProps = {
  placeholder?: string
  variant?: string
} & ChakraInputProps

export const Search = ({placeholder, variant="filled", ...rest}: InputProps) => {
  return (
    <>
      <InputGroup variant={variant}>
        <InputLeftAddon children={<SearchIcon/>} />
        <Input 
          placeholder={placeholder ? placeholder : "Search"} 
          {...rest}
        />
        <InputRightAddon children={<ShortcutIcon />} />
      </InputGroup>
    </>
  );
};
