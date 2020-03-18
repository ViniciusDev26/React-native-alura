import React, { Fragment } from 'react';
import { View, Text, Image } from 'react-native';

import style from "./style";

const Header = (props) => {
    const {fotoPerfil, nomeUsuario} = props;
    return(
        <View style={style.header}>
            <Image 
                source={{uri: fotoPerfil}}
                style={style.fotoUsuario}
            />
            <Text>{nomeUsuario}</Text>
        </View>
    );
};

export default Header;