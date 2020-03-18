import React, { Fragment, useState, useEffect } from 'react';
import {
  StatusBar, 
  FlatList
} from 'react-native';
import { Header } from './src/components/Header';
import { Photo } from './src/components/Photo';
// import { Comments } from './src/components/Comments';
// import request from './src/api/feed'; 

const App = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(()=>{
    request().then(res =>{
      setPhotos(res);
    });
  }, []);

  return (
    <Fragment>
      <StatusBar barStyle="light-content"/>
      <FlatList 
        data={photos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item})=>
        <Fragment>
          <Header fotoPerfil={item.userURL} nomeUsuario={item.userName}/>
          <Photo postPhoto={item.url} descricao={item.description} qntdLikes={item.likes}/>
          {/* <Comments comentarios={item.comentarios} /> */}
        </Fragment>
        }
      />
    </Fragment>
  );
}

export default App;