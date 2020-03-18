const likeImg = (liked) => {
    if(liked)
      return require("./../../res/img/s2-checked.png");
    return require("./../../res/img/s2.png");
}

const curtirFoto = (liked, likes) => {
    let qnt = likes
    if(liked)
      qnt--;
    else
      qnt++;

    return [!liked, qnt];
}

export {likeImg, curtirFoto};