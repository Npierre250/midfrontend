import Constants from 'expo-constants';
import styled from "styled-components";
const StatusBarHeight = Constants.StatusBarHeight;

// Colors
export const colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#9CA3AF",
    brand: "#6D28D9",
    darklight: "#9CA3AF",
    green: "#10B981",
    red: "#EF4444"
};

const { primary, secondary, tertiary, brand, darklight, green, red } = colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 30px;
    padding-top: ${StatusBarHeight + 30}px; /* Use padding-top instead of padding-block-start */
    background-color: ${primary};
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%; /* Use width instead of inline-size */
    align-items: center;
    margin-top: 30px;
`;

export const PageLogo = styled.Image` /* Use Image instead of image */
    width: 250px; /* Use width instead of inline-size */
    height: 200px; /* Use height instead of block-size */
    border-radius:30px;
`;

export const WelcomeContainer = styled(InnerContainer)`
padding: 25px;
padding-top:10px;
justify-content:center;
`;

export const Avatar= styled.Image`
width: 100px;
height:100px;
margin:auto;
border-radius: 50px;
border-width:2px;
border-color:${secondary};
margin-bottom: 10px;
margin-top: 10px
`;

export const WelcomeImage=styled.Image`
height: 50%;
min-width:100%;
`;

 

export const PageTitle = styled.Text` /* Use Text instead of text */
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;

    ${(props)=> props.welcome && `
   font-size:35px
    `}
`;
export const SubTitle =styled.Text`
font-size: 18px;
margin-bottom:20px;
letter-spacing:1px;
font-weight:bold;
color: ${tertiary};

${(props)=> props.welcome && `
margin-bottom: 5px;
font-weight: normal;
 `}
`;

export const StyledFormArea=styled.View`
width:90%;
`;

export const StyledTextInput =styled.TextInput`
background-color: ${secondary};
padding: 15px;
padding-left: 55px;
border-radius: 5px;
font-size: 16px;
height: 60px;
margin-vertical:3px;
margin-bottom: 10px;
color:${tertiary};
`;

export const StyledInputLabel=styled.Text`
color: ${tertiary};
font-size: 13px;
text-align: left;
`;

export const LeftIcon= styled.View`
left: 15px;
top: 38px;
position: absolute;
z-index:1;
`;

export const RightIcon = styled.TouchableOpacity`
right:15px;
top:38px;
position:absolute;
z-index:1;
color: ${brand}
`;

export const StyledButton =styled.TouchableOpacity`
padding: 15px;
background-color: ${brand};
align-items: center;
justify-items: center;
border-radius: 5px;
margin-vertical: 5px;
height: 60px;
${(props)=> props.google ==true && `
 background-color: ${green};
 flex-direction: row;
 justify-content: center;
`}
`;

export const ButtonText=styled.Text`
color: ${primary};
font-size:12px;
${(props)=> props.google == true &&`
 padding:5px;
`}
`;

export const MsgBox= styled.Text`
text-align: center;
font-size:13px;
color:${red};
`;

export const Line =styled.View`
height: 1px;
width: 100%;
background-color: ${darklight};
margin-vertical: 10px;
`;

export const ExtraView =styled.View`
justify-content:center;
flex-direction:row;
align-items:center;
padding:10px;
`;

export const TextLink =styled.TouchableOpacity`
justify-content:center;
align-items:center;
`;

export const TextLinkContent =styled.Text`
color:${brand};
font-size: 15px;
`;

export const ExtraText=styled.Text`
justify-content:center;
flex-direction:row;
color: ${tertiary};
font-size: 15px;
`;