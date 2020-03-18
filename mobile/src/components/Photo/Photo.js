import React, { Fragment, useState } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  View, 
} from 'react-native';
import style from './style'; 

import {likeImg, curtirFoto} from './../../api/curtidas';

const Photo = (props) => {
  const {postPhoto, descricao, qntdLikes} = props;

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(qntdLikes);

  const likePhoto = () => {
    const [newStateLiked, qnt] = curtirFoto(liked, likes);
    setLikes(qnt)
    setLiked(newStateLiked)
  }

  return (
    <Fragment>
      <Image 
        source={{uri: postPhoto}}
        style={style.img}  
      />
      <Text>{descricao}</Text>
      <View style={style.viewLike}>
        <TouchableOpacity onPress={likePhoto}>
          <Image 
            source={likeImg(liked)} 
            style={style.like}
          />
        </TouchableOpacity>
        <Text>Curtidas: {likes}</Text>
      </View>
    </Fragment>
  );
}


export default Photo;