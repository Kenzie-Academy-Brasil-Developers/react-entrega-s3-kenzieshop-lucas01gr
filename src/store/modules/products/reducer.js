const defaultState = [
  {
    id: 1,
    name: "Geladeira",
    price: 2000,
    img: "https://electrolux.vtexassets.com/arquivos/ids/211050-800-800?v=637638813232570000&width=800&height=800&aspect=true",
  },
  {
    id: 2,
    name: "Forno Micro-ondas",
    price: 350,
    img: "https://m.media-amazon.com/images/I/81V7ATz2Q5L._AC_SX679_.jpg",
  },
  {
    id: 3,
    name: "Tv Philco",
    price: 3500,
    img: "https://images.kabum.com.br/produtos/fotos/158885/smart-tv-lg-43-4k-uhd-43up7500-com-wifi-e-bluetooth-hdr-thinqai-compativel-com-inteligencia-artificial-43up7500psf_1623677620_gg.jpg",
  },
  {
    id: 4,
    name: "Ventilador",
    price: 200,
    img: "https://imgs.casasbahia.com.br/55011465/1xg.jpg?imwidth=500",
  },
  {
    id: 5,
    name: "Batedeira",
    price: 80,
    img: "https://www.casasbahia-imagens.com.br/html/conteudo-produto/73/50004211/imagens/batedeira_2_.png",
  },
  {
    id: 6,
    name: "Fogão",
    price: 250,
    img: "https://consul.vtexassets.com/arquivos/ids/220407-800-auto?v=637572229166230000&width=800&height=auto&aspect=true",
  },
];

const productsReducer = (state = defaultState, action) => {
  return state;
};

export default productsReducer;
