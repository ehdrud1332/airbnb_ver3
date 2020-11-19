import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import styled from 'styled-components/native';
import Colors from '../config/colors';

const First = styled.View`
  background: #fff;
  width: 270px;
  height: 270px;
  border-radius: 12px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12);
  margin: 12px 12px 12px 30px;
`;

const ImageContainer = styled.View`
  width: 270px;
  height: 180px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  overflow: hidden;
`;

const MainImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  font-size: 16px;
  color: ${Colors.black};
  margin: 16px 0 0 16px;
`;

const Subtitle = styled.Text`
  color: ${Colors.gray};
  margin: 6px 16px 10px;
`;

const Card = styled.View`
  background: #fff;
  width: 270px;
  height: 270px;
  border-radius: 12px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12);
  margin: 12px 12px 12px 12px;
`;

export const FirstCard = ({image, title, subTitle}) => {
    return (
        <First elevation={5}>
            <ImageContainer>
                <MainImage source={image}/>
            </ImageContainer>
            <Title>{title}</Title>
            <Subtitle>{subTitle}</Subtitle>
        </First>
    );
};

export const AdCard = ({image, title, subTitle}) => {
    return (
        <Card elevation={5}>
            <ImageContainer>
                <MainImage source={image}/>
            </ImageContainer>
            <Title>{title}</Title>
            <Subtitle>{subTitle}</Subtitle>
        </Card>
    );
};
