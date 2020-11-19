import React, {useState} from 'react';
import {Modal, FlatList, TouchableOpacity, StatusBar} from 'react-native';
import styled from 'styled-components';
import Colors from '../config/colors';
import {H} from '../config/Typography';
import {SearchTab} from '../components/SearchBar';

const Common = styled.SafeAreaView`
  background-color: white;
  flex: 1;
  ${Platform.select({
    ios: {
        fontFamily: 'Avenir'
    },
    android: {
        fontFamily: 'Roboto',
        paddingTop: StatusBar.currentHeight
    },
})}
`;

const Container = styled.View`
  flex: 1
`;

const SearchScreen = () => {

    const [search, setSearch] = useState(false);

    return (
        <Common>
            <Container>
                <SearchTab
                    placeholder={'Location, landMark, or address'}
                    icon={"search"}
                    size={28}
                    setSearch={() => setSearch(true)}
                />
            </Container>
        </Common>
    );
};

export default SearchScreen;
