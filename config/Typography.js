import React from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components';
import Colors from '../config/colors';

const Container = styled.Text`
  ${Platform.select({
    ios: {
        fontFamily: 'Avenir'
    },
    android: {
        fontFamily: 'Roboto'
    }
})}
`;

const HeadMain = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '28px' : '28px'}
`;
const Head1 = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '24px' : '24px'};
`;

const Head3 = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '22px' : '20px'};
`;

const Head4 = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '18px' : '18px'};
`;

const Subtitle1 = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '16px' : '16px'};
`;

const Subtitle2 = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '16px' : '16px'};
  font-weight: bold;
`;

const Paragraph = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '14px' : '14px'};
  line-height: 18px;
`;

const ParagraphBold = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '14px' : '14px'};
  font-weight: bold;
`;

const SmallParagraph = styled.Text`
  font-size: ${Platform.OS === 'android' ? '14px' : '12px'};
  color: ${Colors.darkgray};
  line-height: 18px;
`;

const Caption = styled.Text`
  font-size: ${Platform.OS === 'android' ? '12px' : '12px'};
`;

export const H = ({children, colors}) => {
    return (
        <Container>
            <HeadMain style={{color: colors}}>{children}</HeadMain>
        </Container>
    );
};

export const H1 = ({children, colors}) => {
    return (
        <Container>
            <Head1 style={{color: colors}}>{children}</Head1>
        </Container>
    );
};

export const H3 = ({children, colors}) => {
    return (
        <Container>
            <Head3 style={{color: colors}}>{children}</Head3>
        </Container>
    );
};

export const H4 = ({children, colors}) => {
    return (
        <Container>
            <Head4 style={{color: colors}}>{children}</Head4>
        </Container>
    );
};

export const Sub1 = ({children, colors}) => {
    return (
        <Container>
            <Subtitle1 style={{color: colors}}>{children}</Subtitle1>
        </Container>
    );
};

export const Sub2 = ({children, colors}) => {
    return (
        <container>
            <Subtitle2 style={{color: colors}}>{children}</Subtitle2>
        </container>
    );
};

export const P = ({children, colors}) => {
    return (
        <Container>
            <Paragraph styele={{color: colors}}>{children}</Paragraph>
        </Container>
    );
};

export const PBold = ({children, colors}) => {
    return (
        <Container>
            <ParagraphBold style={{color: colors}}>{children}</ParagraphBold>
        </Container>
    );
};

export const SP = ({children, colors}) => {
    return (
        <Container>
            <SmallParagraph style={{color: colors}}>{children}</SmallParagraph>
        </Container>
    );
};

export const Cap = ({children, colors}) => {
    return (
        <Container>
            <Caption style={{color: colors}}>{children}</Caption>
        </Container>
    )
}

