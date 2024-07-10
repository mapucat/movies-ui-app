import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDebounce } from "use-debounce";

import Button from "../ui/Button";
import Icon from "../ui/Icon";

type SearchInputProps = {
  onSearch: (value: string) => void;
};

const Wrapper = styled.div`
  // gradient animation
  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }

  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 4px;
  padding: 0.5rem;
  background: rgba(57, 63, 84, 0.8);

  &:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-position: 0% 0%;
    background: linear-gradient(
      to right,
      #730091,
      #00ef97,
      #ffda80,
      #e480ff,
      #730091,
      #ffda80
    );
    background-size: 500% auto;
    animation: gradient 3s linear infinite;
  }

  input {
    border-style: none;
    background: transparent;
    outline: none;
    width: 100%;
    color: #bfd2ff;
    font-size: 1.5rem;
    line-height: 1rem;
    vertical-align: middle;
    &::-webkit-input-placeholder {
      color: #7881a1;
    }
  }

  button {
    padding: 0;
    background: none;
    border: none;
    outline: none;

    font-size: 1rem;
    line-height: 1rem;
    vertical-align: middle;
    transition: color 0.25s;

    width: 32px;
    height: 32px;
  }
`;

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [value, setValue] = useState("");
  const [debouncedSearch] = useDebounce(value, 250);

  const handleChange = (event: any) => {
    const targetValue = (event.target as HTMLInputElement)?.value;
    setValue(targetValue);
  };

  useEffect(() => {
    onSearch(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <Wrapper>
      <input type="text" value={value} onChange={handleChange} />
      <Button variant="icon" onClick={() => setValue("")}>
        <Icon name="clear"></Icon>
      </Button>
    </Wrapper>
  );
};

export default SearchInput;
