import React, {useState} from 'react';
import {Modal, FlatList, TouchableOpacity, StatusBar} from 'react-native';
import styled from 'styled-components/native';
import Colors from '../config/colors';
import {H} from '../config/Typography';
import {SearchTab, SearchInput} from '../components/SearchBar';
import {SearchList} from '../components/ListItems'
import {AdCard, FirstCard} from '../components/Adcard';

import {Homedata} from '../data/Homedata';

const InitialCities = [
    {title: 'Seoul'},
    {title: 'Busan'},
    {title: 'Jeju'}
]

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

const Safe = styled.SafeAreaView`
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0};
`;

const SearchArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const CancelBtn = styled.Text`
  color: ${Colors.black};
  text-decoration: underline;
  margin-left: 10px;
`;

const HLine = styled.View`
  width: 100%;
  margin: 0 auto;
  height: 1px;
  background-color: ${Colors.faintgray};
`;

const HeroText = styled.View`
  padding: 30px
`;

const SearchScreen = () => {

    const [search, setSearch] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState("")

    const filteredCity = InitialCities.filter((city) => {
        return city.title.toLowerCase().includes(searchKeyword.toLocaleLowerCase());
    });

    const renderItem = ({item, index}) => {
        if (index === 0) {
            return (
                <FirstCard
                    title={item.title}
                    subTitle={item.subTitle}
                    image={item.image}
                />
            )
        } else {
            return (
                <AdCard
                    title={item.title}
                    subTitle={item.subTitle}
                    image={item.image}
                />
            )
        }
    }

    return (
        <Common>
            <Container>
                <SearchTab
                    placeholder={'Location, landMark, or address'}
                    icon={"search"}
                    size={28}
                    setSearch={() => setSearch(true)}
                />

                <Modal visible={search} animationType='slide'>
                    <Safe>
                        <FlatList
                            ListHeaderComponent={
                                <SearchArea>
                                    <SearchInput
                                        placeholder='Search'
                                        onChangeText={(text) => setSearchKeyword(text)}
                                    />
                                    <TouchableOpacity onPress={() => setSearch(false)}>
                                        <CancelBtn>Cancel</CancelBtn>
                                    </TouchableOpacity>
                                </SearchArea>
                            }
                            keyboardShouldPersistTaps={"handled"}
                            keyExtractor={(item) => item.title}
                            data={filteredCity}
                            renderItem={({item}) => (
                                <SearchList title={item.title}/>
                            )}
                            ItemSeparatorComponent={() => <HLine />}
                        />
                    </Safe>
                </Modal>

                <HLine />
                <HeroText>
                    <H colors={Colors.red}>가까운 여행지, 에어비앤비와 경험해보세요.</H>
                </HeroText>

                <FlatList
                    data={Homedata}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.title}
                    renderItem={renderItem}
                />
            </Container>
        </Common>
    );
};

export default SearchScreen;
