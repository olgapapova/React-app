import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setOrder } from "../redux/orderSlice.js";
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import karzina from "../images/karzina.png"
import img1_1 from "../images/img1_1.jpg"
import img1_2 from "../images/img1_2.jpg"
import img1_3 from "../images/img1_3.jpg"
import img1_4 from "../images/img1_4.jpg"
import img1_5 from "../images/img1_5.jpg"
import img1_6 from "../images/img1_6.jpg"
import img1_7 from "../images/img1_7.jpg"
import img1_8 from "../images/img1_8.jpg"
import img1_9 from "../images/img1_9.jpg"
import img1_10 from "../images/img1_10.jpg"
import img1_11 from "../images/img1_11.jpg"
import img1_12 from "../images/img1_12.jpg"
import img1_13 from "../images/img1_13.jpg"
import img1_14 from "../images/img1_14.jpg"
import img1_15 from "../images/img1_15.jpg"
import img1_16 from "../images/img1_16.jpg"
import img1_17 from "../images/img1_17.jpg"
import img1_18 from "../images/img1_18.jpg"
import img1_19 from "../images/img1_19.jpg"
import img1_20 from "../images/img1_20.jpg"
import img1_21 from "../images/img1_21.jpg"
import img1_22 from "../images/img1_22.jpg"
import img1_23 from "../images/img1_23.jpg"
import img1_24 from "../images/img1_24.jpg"
import img1_25 from "../images/img1_25.jpg"
import img1_26 from "../images/img1_26.jpg"
import img1_27 from "../images/img1_27.jpg"
import img1_28 from "../images/img1_28.jpg"
import img1_29 from "../images/img1_29.jpg"
import img1_30 from "../images/img1_30.jpg"
import img1_31 from "../images/img1_31.jpg"
import img1_32 from "../images/img1_32.jpg"
import img1_33 from "../images/img1_33.jpg"
import img1_34 from "../images/img1_34.jpg"
import img2_1 from "../images/img2_1.jpg"
import img2_2 from "../images/img2_2.jpg"
import img2_3 from "../images/img2_3.jpg"
import img2_4 from "../images/img2_4.jpg"
import img2_5 from "../images/img2_5.jpg"
import img2_6 from "../images/img2_6.jpg"
import img2_7 from "../images/img2_7.jpg"
import img2_8 from "../images/img2_8.jpg"
import img2_9 from "../images/img2_9.jpg"
import img2_10 from "../images/img2_10.jpg"
import img2_11 from "../images/img2_11.jpg"
import img2_12 from "../images/img2_12.jpg"
import img2_13 from "../images/img2_13.jpg"
import img2_14 from "../images/img2_14.jpg"
import img2_15 from "../images/img2_15.jpg"
import img2_16 from "../images/img2_16.jpg"
import img2_17 from "../images/img2_17.jpg"
import img2_18 from "../images/img2_18.jpg"
import img2_19 from "../images/img2_19.jpg"
import img3_1 from "../images/img3_1.jpg"
import img3_2 from "../images/img3_2.jpg"
import img3_3 from "../images/img3_3.jpg"
import img3_4 from "../images/img3_4.jpg"
import img3_5 from "../images/img3_5.jpg"
import img3_6 from "../images/img3_6.jpg"
import img3_7 from "../images/img3_7.jpg"
import img3_8 from "../images/img3_8.jpg"
import img3_9 from "../images/img3_9.jpg"
import img3_10 from "../images/img3_10.jpg"
import img3_11 from "../images/img3_11.jpg"
import img3_12 from "../images/img3_12.jpg"
import img3_13 from "../images/img3_13.jpg"
import img3_14 from "../images/img3_14.jpg"
import img3_15 from "../images/img3_15.jpg"
import img3_16 from "../images/img3_16.jpg"
import img3_17 from "../images/img3_17.jpg"
import img3_18 from "../images/img3_18.jpg"
import img3_19 from "../images/img3_19.jpg"
import img3_20 from "../images/img3_20.jpg"
import img4_1 from "../images/img4_1.jpg"
import img4_2 from "../images/img4_2.jpg"
import img4_3 from "../images/img4_3.jpg"
import img4_4 from "../images/img4_4.jpg"
import img4_5 from "../images/img4_5.jpg"
import img4_6 from "../images/img4_6.jpg"
import img4_7 from "../images/img4_7.jpg"
import img4_8 from "../images/img4_8.jpg"
import img4_9 from "../images/img4_9.jpg"
import img4_10 from "../images/img4_10.jpg"
import img4_11 from "../images/img4_11.jpg"
import img4_12 from "../images/img4_12.jpg"
import img4_13 from "../images/img4_13.jpg"
import img4_14 from "../images/img4_14.jpg"
import img4_15 from "../images/img4_15.jpg"
import img4_16 from "../images/img4_16.jpg"
import img4_17 from "../images/img4_17.jpg"
import img4_18 from "../images/img4_18.jpg"
import img4_19 from "../images/img4_19.jpg"
import img4_20 from "../images/img4_20.jpg"
import img4_21 from "../images/img4_21.jpg"
import img4_22 from "../images/img4_22.jpg"
import img5_1 from "../images/img5_1.jpg"
import img5_2 from "../images/img5_2.jpg"
import img5_3 from "../images/img5_3.jpg"
import img5_4 from "../images/img5_4.jpg"
import img5_5 from "../images/img5_5.jpg"
import img5_6 from "../images/img5_6.jpg"
import img5_7 from "../images/img5_7.jpg"
import img5_8 from "../images/img5_8.jpg"
import img5_9 from "../images/img5_9.jpg"
import img5_10 from "../images/img5_10.jpg"
import img5_11 from "../images/img5_11.jpg"
import img5_12 from "../images/img5_12.jpg"
import img5_13 from "../images/img5_13.jpg"
import img5_14 from "../images/img5_14.jpg"
import img5_15 from "../images/img5_15.jpg"
import img5_16 from "../images/img5_16.jpg"
import img5_17 from "../images/img5_17.jpg"
import img5_18 from "../images/img5_18.jpg"
import img5_19 from "../images/img5_19.jpg"
import img5_20 from "../images/img5_20.jpg"
import img5_21 from "../images/img5_21.jpg"
import img5_22 from "../images/img5_22.jpg"
import img5_23 from "../images/img5_23.jpg"
import img5_24 from "../images/img5_24.jpg"
import img5_25 from "../images/img5_25.jpg"
import img5_26 from "../images/img5_26.jpg"
import img5_27 from "../images/img5_27.jpg"
import img5_28 from "../images/img5_28.jpg"
import img5_29 from "../images/img5_29.jpg"
import img6_1 from "../images/img6_1.jpg"
import img6_2 from "../images/img6_2.jpg"
import img6_3 from "../images/img6_3.jpg"
import img6_4 from "../images/img6_4.jpg"
import img6_5 from "../images/img6_5.jpg"
import img6_6 from "../images/img6_6.jpg"
import img6_7 from "../images/img6_7.jpg"
import img6_8 from "../images/img6_8.jpg"
import img6_9 from "../images/img6_9.jpg"
import img6_10 from "../images/img6_10.jpg"
import img6_11 from "../images/img6_11.jpg"
import img6_12 from "../images/img6_12.jpg"
import img7_1 from "../images/img7_1.jpg"
import img7_2 from "../images/img7_2.jpg"
import img7_3 from "../images/img7_3.jpg"
import img7_4 from "../images/img7_4.jpg"
import img7_5 from "../images/img7_5.jpg"
import img7_6 from "../images/img7_6.jpg"
import img7_7 from "../images/img7_7.jpg"

import './BooksListCategory.css';

export const PageBook = () => { 

  const books = useSelector(state => state.books.data); 
  const chooseBook = useSelector(state => state.chooseBook.dataCh);
  let book;
  let img; 

  if (books !== null) {
    book=books.find(item => item.id === chooseBook);
  }
  if (book) {
  switch (book.image) {
    case 'img1_1.7fb7c23a2ec3dc17bd12.jpg':
      img=img1_1;
      break;
    case 'img1_2.daa40b3cb9179f4ee706.jpg':
      img=img1_2;
      break;
    case 'img1_3.129fb9b6abb2fe8721b6.jpg':
      img=img1_3;
      break;
    case 'img1_4.971cf3ec80c6fc99e9d4.jpg':
      img=img1_4;
      break;
    case 'img1_5.16a20c0093202c2d6b41.jpg':
      img=img1_5;
      break;
    case 'img1_6.da8401fa7b6e1be9ab64.jpg':
      img=img1_6;
      break;
    case 'img1_7.0f1e9311ea34de60c1b3.jpg':
      img=img1_7;
      break;
    case 'img1_8.4c2399c5a7f64bda4a31.jpg':
      img=img1_8;
      break;
    case 'img1_9.792a56cfa4af24ed48a6.jpg':
      img=img1_9;
      break;
    case 'img1_10.e9b1a0b0a6873d5064e9.jpg':
      img=img1_10;
      break;
    case 'img1_11.668187b87a028f269eca.jpg':
      img=img1_11;
      break;
    case 'img1_12.ab1f6dbca9cfc2f68f0e.jpg':
      img=img1_12;
      break;
    case 'img1_13.c1a145157c0e2bc9ba08.jpg':
      img=img1_13;
      break;
    case 'img1_14.bdc4bf37bc6f580bc6eb.jpg':
      img=img1_14;
      break;
    case 'img1_15.b6666c409c04d482f82c.jpg':
      img=img1_15;
      break;
    case 'img1_16.4cd3a8f1e1d44d15ec39.jpg':
      img=img1_16;
      break;
    case 'img1_17.28db62dd50f33d9136b8.jpg':
      img=img1_17;
      break;
    case 'img1_18.0b391a5d494a4e1b0a3e.jpg':
      img=img1_18;
      break;
    case 'img1_19.3c4afd594ecfbe6d564b.jpg':
      img=img1_19;
      break;
    case 'img1_20.c1db423f8c472f5bd805.jpg':
      img=img1_20;
      break;
    case 'img1_21.f1fd225bd09c838a54d2.jpg':
      img=img1_21;
      break;
    case 'img1_22.0b366043404971b10b7d.jpg':
      img=img1_22;
      break;
    case 'img1_23.749cc31041d85a864145.jpg':
      img=img1_23;
      break;
    case 'img1_24.8566b2460e3cb810b921.jpg':
      img=img1_24;
      break;
    case 'img1_25.b126cb1ab7f23bc8b4b5.jpg':
      img=img1_25;
      break;
    case 'img1_26.f601d4861456ec6a8a1a.jpg':
      img=img1_26;
      break;
    case 'img1_27.be84690beb48c00a7500.jpg':
      img=img1_27;
      break;
    case 'img1_28.6d10940fa4cf81c9ee62.jpg':
      img=img1_28;
      break;
    case 'img1_29.9bd11f52c39fb7dccf13.jpg':
      img=img1_29;
      break;
    case 'img1_30.32d9e3092016d4445923.jpg':
      img=img1_30;
      break;
    case 'img1_31.7daec52fa8697a206f25.jpg':
      img=img1_31;
      break;
    case 'img1_32.b2cf1c820cf893a5ba9e.jpg':
      img=img1_32;
      break;
    case 'img1_33.34095a8468c31c88a9f2.jpg':
      img=img1_33;
      break;
    case 'img1_34.c0bda8581ac3c662ec48.jpg':
      img=img1_34;
      break;
    case 'img2_1.93b55ff10221d5cb791a.jpg':
      img=img2_1;
      break;
    case 'img2_2.af32305ea474b7597d36.jpg':
      img=img2_2;
      break;
    case 'img2_3.c4f4abd5c2bec8b49443.jpg':
      img=img2_3;
      break;
    case 'img2_4.228556b44ee8e591fef9.jpg':
      img=img2_4;
      break;
    case 'img2_5.6eb9cef8dbf6cff9641b.jpg':
      img=img2_5;
      break;
    case 'img2_6.ff88d9f58d7917e45dd6.jpg':
      img=img2_6;
      break;
    case 'img2_7.aead1b79472de3f0d92c.jpg':
      img=img2_7;
      break;
    case 'img2_8.f7f0e143175ad0c35478.jpg':
      img=img2_8;
      break;
    case 'img2_9.271257610fac35f47848.jpg':
      img=img2_9;
      break;
    case 'img2_10.40181c20d072c7664e60.jpg':
      img=img2_10;
      break;
    case 'img2_11.f6c7ce79dd567a6ebda2.jpg':
      img=img2_11;
      break;
    case 'img2_12.890717b69e028860f77a.jpg':
      img=img2_12;
      break;
    case 'img2_13.08644f0dd6027c5dc541.jpg':
      img=img2_13;
      break;
    case 'img2_14.20e93f582ed6dc5b34ce.jpg':
      img=img2_14;
      break;
    case 'img2_15.69f2110d914e868ef51a.jpg':
      img=img2_15;
      break;
    case 'img2_16.b0567a86a0cc7184e2e4.jpg':
      img=img2_16;
      break;
    case 'img2_17.973918779068355b1c41.jpg':
      img=img2_17;
      break;
    case 'img2_18.1290a7f828fbcdaa3a3d.jpg':
      img=img2_18;
      break;
    case 'img2_19.2f48c602b8ca35a910db.jpg':
      img=img2_19;
      break;
    case 'img3_1.690b198a2d4353dbe6e9.jpg':
      img=img3_1;
      break;
    case 'img3_2.41f3f5724140546e5556.jpg':
      img=img3_2;
      break;
    case 'img3_3.2ccef6ce47ebf70be3e4.jpg':
      img=img3_3;
      break;
    case 'img3_4.31db4f88d14ca5705b9a.jpg':
      img=img3_4;
      break;
    case 'img3_5.8218949052f69a86ac3a.jpg':
      img=img3_5;
      break;
    case 'img3_6.3e7bc4c2ac0b454701b9.jpg':
      img=img3_6;
      break;
    case 'img3_7.99c7341858a122452225.jpg':
      img=img3_7;
      break;
    case 'img3_8.48985354635dc65c43d8.jpg':
      img=img3_8;
      break;
    case 'img3_9.eec5031602adceda67da.jpg':
      img=img3_9;
      break;
    case 'img3_10.e2db090443fefa205172.jpg':
      img=img3_10;
      break;
    case 'img3_11.6f918c9a65b2e0c4f222.jpg':
      img=img3_11;
      break;
    case 'img3_12.2a95aa87a87df0b48700.jpg':
      img=img3_12;
      break;
    case 'img3_13.7dfa2e3ee77d5e09a57f.jpg':
      img=img3_13;
      break;
    case 'img3_14.f23ac95ec74e62d2d657.jpg':
      img=img3_14;
      break;
    case 'img3_15.298512dd57a7ceac7cfb.jpg':
      img=img3_15;
      break;
    case 'img3_16.f7ccc08f772d67d9ae5c.jpg':
      img=img3_16;
      break;
    case 'img3_17.3f5ce528b0bd50b1afdd.jpg':
      img=img3_17;
      break;
    case 'img3_18.7f29bed118fc508953c5.jpg':
      img=img3_18;
      break;
    case 'img3_19.73e8eac7fea5a32baeed.jpg':
      img=img3_19;
      break;
    case 'img3_20.1215edab3ec45a1ce192.jpg':
      img=img3_20;
      break;
    case 'img4_1.910878983fc458872736.jpg':
      img=img4_1;
      break;
    case 'img4_2.b5809639fc8970790787.jpg':
      img=img4_2;
      break;
    case 'img4_3.49d8b93d29e8f4d094fe.jpg':
      img=img4_3;
      break;
    case 'img4_4.319e251fc3583f51ed85.jpg':
      img=img4_4;
      break;
    case 'img4_5.23f67a76c72e61b2b8b3.jpg':
      img=img4_5;
      break;
    case 'img4_6.06852107f48b13e91fc1.jpg':
      img=img4_6;
      break;
    case 'img4_7.90607cbc5dfba487fe92.jpg':
      img=img4_7;
      break;
    case 'img4_8.6e0a654d1b07389bd086.jpg':
      img=img4_8;
      break;
    case 'img4_9.7b89b930a8c0952dfdd5.jpg':
      img=img4_9;
      break;
    case 'img4_10.30d44d99e9b222e3dde1.jpg':
      img=img4_10;
      break;
    case 'img4_11.15c42deb3b726a4dabfe.jpg':
      img=img4_11;
      break;
    case 'img4_12.83b7b9b3ad93b0ac8684.jpg':
      img=img4_12;
      break;
    case 'img4_13.99807b1875a8aa14621b.jpg':
      img=img4_13;
      break;
    case 'img4_14.fbf2a06ca0037b0d4178.jpg':
      img=img4_14;
      break;
    case 'img4_15.38aca79cf5a020f7c9ae.jpg':
      img=img4_15;
      break;
    case 'img4_16.8a8429f12a4c3bbc1a74.jpg':
      img=img4_16;
      break;
    case 'img4_17.4e578fe385cd99a347cd.jpg':
      img=img4_17;
      break;
    case 'img4_18.17ee6722902da5e18fcc.jpg':
      img=img4_18;
      break;
    case 'img4_19.4175390c6a3551347ee2.jpg':
      img=img4_19;
      break;
    case 'img4_20.6f6eb4bf6d098bd9e3a3.jpg':
      img=img4_20;
      break;
    case 'img4_21.c2cb1fb81b22fd1f8924.jpg':
      img=img4_21;
      break;
    case 'img4_22.d40b94015f87c8349cca.jpg':
      img=img4_22;
      break;
    case 'img5_1.748773b2415bc62843d2.jpg':
      img=img5_1;
      break;
    case 'img5_2.7c931c2fb033373fc8d7.jpg':
      img=img5_2;
      break;
    case 'img5_3.284ee212b07b57beda45.jpg':
      img=img5_3;
      break;
    case 'img5_4.54e15899ba5b93242416.jpg':
      img=img5_4;
      break;
    case 'img5_5.47b7bbb9aa2781cf7eaa.jpg':
      img=img5_5;
      break;
    case 'img5_6.98a5fdbfb94cebe06505.jpg':
      img=img5_6;
      break;
    case 'img5_7.8fb64f0d496d8939f4c8.jpg':
      img=img5_7;
      break;
    case 'img5_8.f2dd9060d66c936d10db.jpg':
      img=img5_8;
      break;
    case 'img5_9.cab0459feee47475e198.jpg':
      img=img5_9;
      break;
    case 'img5_10.5c8103b581e2e4a9f444.jpg':
      img=img5_10;
      break;
    case 'img5_11.96471d962ce585f13cb9.jpg':
      img=img5_11;
      break;
    case 'img5_12.4e4ecd1c0d58a569760e.jpg':
      img=img5_12;
      break;
    case 'img5_13.b11074d10da278537ed0.jpg':
      img=img5_13;
      break;
    case 'img5_14.50713aa448e23c5221a7.jpg':
      img=img5_14;
      break;
    case 'img5_15.5755e38dc90902ee50ca.jpg':
      img=img5_15;
      break;
    case 'img5_16.8af06b0bc0c03357341f.jpg':
      img=img5_16;
      break;
    case 'img5_17.c8780f48a4c7280d3392.jpg':
      img=img5_17;
      break;
    case 'img5_18.e7b88001a2ce6a7e6d1a.jpg':
      img=img5_18;
      break;
    case 'img5_19.21c60c4e9d739109ca2c.jpg':
      img=img5_19;
      break;
    case 'img5_20.72556f8bc65fc2809320.jpg':
      img=img5_20;
      break;
    case 'img5_21.018d3134f2c3327631bb.jpg':
      img=img5_21;
      break;
    case 'img5_22.9547c506d954fb2031ee.jpg':
      img=img5_22;
      break;
    case 'img5_23.a288f5d135f4d77ed72c.jpg':
      img=img5_23;
      break;
    case 'img5_24.7b932e456bc238bf7af7.jpg':
      img=img5_24;
      break;
    case 'img5_25.4c0fd6bfb90e4861ace0.jpg':
      img=img5_25;
      break;
    case 'img5_26.95280979fafa73a82ba3.jpg':
      img=img5_26;
      break;
    case 'img5_27.0b04c0fe5445d2329f4f.jpg':
      img=img5_27;
      break;
    case 'img5_28.a662cd462bfb10a50d60.jpg':
      img=img5_28;
      break;
    case 'img5_29.99d7a33ad6a51654baed.jpg':
      img=img5_29;
      break;
    case 'img6_1.9a9173f1a7f0aec9c41d.jpg':
      img=img6_1;
      break;
    case 'img6_2.0b2a8d5f81ef2a18c614.jpg':
      img=img6_2;
      break;
    case 'img6_3.67eb6def0a2a46832d3c.jpg':
      img=img6_3;
      break;
    case 'img6_4.c96fa5bd9eeeb509903a.jpg':
      img=img6_4;
      break;
    case 'img6_5.a1546b7d0faec9de0db9.jpg':
      img=img6_5;
      break;
    case 'img6_6.0bb0c14bc93a2cad1f6d.jpg':
      img=img6_6;
      break;
    case 'img6_7.75890afd8935e3914bf8.jpg':
      img=img6_7;
      break;
    case 'img6_8.4024d842d3b0ff1a792a.jpg':
      img=img6_8;
      break;
    case 'img6_9.4f33234bbcfe0e1eb3e7.jpg':
      img=img6_9;
      break;
    case 'img6_10.e21ff3e7122bb3cb679c.jpg':
      img=img6_10;
      break;
    case 'img6_11.30cc06f04866fe950819.jpg':
      img=img6_11;
      break;
    case 'img6_12.ff6cc850783c470d5744.jpg':
      img=img6_12;
      break;
    case 'img7_1.2b6c9b946106ec5a29c2.jpg':
      img=img7_1;
      break;
    case 'img7_2.0b5960289ba113d24b6a.jpg':
      img=img7_2;
      break;
    case 'img7_3.c9a96b35aec7677c72b2.jpg':
      img=img7_3;
      break;
    case 'img7_4.f840e3dc593960400a02.jpg':
      img=img7_4;
      break;
    case 'img7_5.288faa7ba8ea7f083a2a.jpg':
      img=img7_5;
      break;
    case 'img7_6.0707b39e59a71f181b42.jpg':
      img=img7_6;
      break;
    case 'img7_7.b20cc492feacae30cd46.jpg':
      img=img7_7;
      break;
  }
}

  const dispatch = useDispatch();

  function addToOrder() {
    dispatch( setOrder({
      id: book.id,
      image: book.image,
      nameBook: book.nameBook,
      price: book.price,
    }) );
  };

  return (
    <>
    <div className="Navigation">
        <NavLink to="/">Главная</NavLink><span> &gt; { book && book.nameBook }</span>
    </div>
    {
        books !==null ? !book &&
        <div className="mes">По данному запросу ничего не найдено!</div> 
        : null
    }
    { book &&
    <div className="WrapCh">
      <div className="clearfix:after">
        <img className="ImageBookCh" src={img}/><br/>
        <div className="CategoryBookChoose">
          <div className="TextBookNameBookCh">{book.nameBook}</div>
          <div className="TextBookBookCh">{book.author}</div>
          <div className="TextBookNameBookCh">{book.price} руб.</div>
          <div className="TextBookCh">
            <NavLink onClick={addToOrder}>
              <img className="Icons3Choose" src={karzina}/>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    }
    </>
  );  
}
