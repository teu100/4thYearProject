import React from 'react';
import { Image } from 'react-native';

function ViewImage(props) {
    return (
        <Image source={require("../assets/CompanyIcon.png")} />
    );
}

export default ViewImage;