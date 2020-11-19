import React from 'react';
import {TouchableOpacity} from 'react-native';

import styled from 'styled-components/native';
import Colors from '../config/colors';
import {EvilIcons} from '@expo/vector-icons';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const SearchArea = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  border: 1px solid ${Colors.lightgray};
  border-radius: 25px;
  padding: 10px;
`;

const Flex = styled.View`
  flex-direction: row;
`;

const Placeholder = styled.Text`
  color: ${Colors.gray};
  margin-left: 10px;
`;

export const SearchTab = ({setSearch, size, icon, placeholder}) => {
    return (
        <Container>
            <TouchableOpacity onPress={setSearch}>
                <SearchArea>
                    <Flex>
                        <EvilIcons name={icon} size={size} color={Colors.black}/>
                        <Placeholder>{placeholder}</Placeholder>
                    </Flex>
                </SearchArea>
            </TouchableOpacity>
        </Container>
    )
}
