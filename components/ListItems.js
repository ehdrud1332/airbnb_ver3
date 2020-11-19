import React from 'react';
import {TouchableHighlight, Image, View} from 'react-native';
import styled from 'styled-components/native';
import {MaterialIcons, EvilIcons} from '@expo/vector-icons';
import Swipeable from "react-native-gesture-handler/Swipeable";

import Colors from '../config/colors';
import {Platform} from 'react-native-web';
import {SP} from '../config/Typography';

const Container = styled.View`
  background-color: white;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  ${Platform.select({
    ios: {
        fontFamily: 'Avenir'
    },
    android: {
        fontFamily: 'Roboto'
    }
})}
`;

const Marker = styled.View`
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background-color: ${Colors.faintgray};
  border-radius: 8px;
  border: 1px solid ${Colors.lightgray};
  margin-right: 15px;
`;

const ProfileContainer = styled.View`
  flex: 1;
`;

const ProfileTitle = styled.Text`
  font-size: 16px;
  color: ${Colors.black};
  margin-bottom: 6px;
`;

const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-right: 15px;
`;

const FirstLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ProfileSubTitle = styled.Text`
  font-size: 13px;
  color: ${Colors.darkgray};
`;

const SingleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const SearchList = ({onPress, title}) => {
    return (
        <TouchableHighlight underlayColor={Colors.lightgray} onPress={onPress}>
            <Container>
                <Marker>
                    <MaterialIcons name='location-on' size={18}/>
                </Marker>
                <ProfileContainer>
                    <ProfileTitle>{title}</ProfileTitle>
                </ProfileContainer>
            </Container>
        </TouchableHighlight>
    );
};