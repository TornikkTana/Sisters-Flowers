// ── Products List ──
// You can edit this array to change titles, prices, tags, or photos of the bouquets
const products = [
  {
    id: 1,
    name: "ბუჩქოვანი ვარდები",
    price: 65,
    tag: "ბესტსელერი",
    img: "https://savvaflowers.pl/images/virtuemart/product/imgonline-com-ua-Resize-o7NtupIfcu59X0.jpg"
  },
  {
    id: 2,
    name: "ველური თაიგული",
    price: 45,
    tag: "ველური",
    img: "https://scontent.fkut1-1.fna.fbcdn.net/v/t51.75761-15/464906828_18050660098941147_2177758919750217736_n.jpg?stp=dst-jpegr_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGfEieM0ORiMMw0pRHBgwdL_ydxrJMLZ4L_J3Gskwtngv_VzQh-vJD5RFwuRSrp-UgQ8mWMAQSR8IWNIf5G4yqB&_nc_ohc=iQRzkQyn650Q7kNvwFW-lfy&_nc_oc=Adqe3mE5RPst9TOpQK4JyK0CRSxB1wrffcdP2BVuCQnPGGG-6jvOzKKm7pDHqTYJkO9qjS-FlMc_V5mwIAky75nj&_nc_zt=23&se=-1&_nc_ht=scontent.fkut1-1.fna&_nc_gid=9JpTHzz32RamLA0r18M9EQ&_nc_ss=7b2a8&oh=00_Af7GmhfaZcFyBz-IGmMCO5JZRpTyUt0jXfqKm4CWVtX95Q&oe=6A1B98D4"
  },
  {
    id: 3,
    name: "კლასიკური თაიგული",
    price: 50,
    tag: "კლასიკა",
    img: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/447958786_18035961493941147_7072933869909822742_n.jpg?stp=dst-jpegr_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEhr9YVrJIDdEbUNRylF3RRfPI09D-LGbx88jT0P4sZvIrxS8fSSxMKXRvxZcg8wYj9ROeTV5k8L_RwR6lsNSTE&_nc_ohc=G1dWoZ0he1UQ7kNvwE5V9a9&_nc_oc=Adpa3n1vgBfHFkVueNbXq9lTpTFbehU1y_DT0UKZR91BhFREoaV0XpxBdGjp8sThACWaPEo-4Tw4l8AE6BWMhS9q&_nc_zt=23&se=-1&_nc_ht=scontent.fkut1-1.fna&_nc_gid=bOk03p3_VFhenrDw4BciLA&_nc_ss=7b2a8&oh=00_Af5re1A--KKhLGYfk4i8z7aSsz9RODwlDUxFFJQeDqLXIQ&oe=6A1B7AF2"
  },
  {
    id: 4,
    name: "სეზონური კომპოზიცია",
    price: 80,
    tag: "სეზონური",
    img: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/482055772_954849570126590_3431705839345277835_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHgcBNcvGFtiJROQYXVF2JEIDV2xv5auVYgNXbG_lq5VlEVXj9Ph7HLLDx8dvAo6zMYevrYGOWq2QC0KwNIhaFG&_nc_ohc=eT3FiuxTQngQ7kNvwEN0sDB&_nc_oc=AdpVAHBlvUg8Gp1bvsiNBaLUUUj3-mFUEgYQh41j_LbNXtpKF8kco74EsLlpNitaEzCSTkE-2TInSTkBkc-TAKNq&_nc_zt=23&_nc_ht=scontent.fkut1-1.fna&_nc_gid=j5mzvM3bbfswyS0QJZDHKA&_nc_ss=7b2a8&oh=00_Af4_Qk1qdAjPYvKOcxpagAlvwg99fdYZ_-G-sXd0EN3BjQ&oe=6A1B6AE1"
  },
  {
    id: 5,
    name: "ფერადი კომპოზიცია",
    price: 50,
    tag: "ფერადი",
    img: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/481080124_953492703595610_2639523134252446872_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEpMXnotpGCwGw8rubUYlnooKpcqPEvvFmgqlyo8S-8WUGWCxUOvEyAiHQ2PPa1srOeXyMc7tRuvuufX4sv9wgR&_nc_ohc=5uef26jZCdAQ7kNvwHD6Xzk&_nc_oc=AdqQ7O6O_yEIj_VFH5N-jD9uyFwCONr58Fo-BcKM5BBwdk04T-nSKFLY45G1eomoY6zjZVPy87TxrkyK-yWeFo50&_nc_zt=23&_nc_ht=scontent.fkut1-1.fna&_nc_gid=iPdsqOeRtzH0U2ru-2TFGw&_nc_ss=7b2a8&oh=00_Af5hnuomCTkG8650uF9wrjaYmPf1nwGKmesp72hJzVu95g&oe=6A1B68B8"
  }
];

// ── Single Stems for Custom Bouquet Builder ──
// These are single flower sticks that customers can select and assemble stem-by-stem
const singleStems = [
  {
    id: 101,
    name: "წითელი ვარდი",
    price: 6,
    tag: "ყვავილი",
    img: "https://media.istockphoto.com/id/503592218/photo/long-stem-red-rose.jpg?s=612x612&w=0&k=20&c=yJ7kmr6goY2G5-OxJF69huAWcjsnqP0cEqlKEF0csTw=",
    contain: true
  },
  {
    id: 102,
    name: "თეთრი ვარდი",
    price: 6,
    tag: "ყვავილი",
    img: "https://secretblooms.com.au/wp-content/uploads/2023/01/rose_lola_white.jpg",
    contain: true
  },
  {
    id: 103,
    name: "ბუჩქოვანი ვარდი (ყვითელი)",
    price: 12,
    tag: "ბუჩქოვანი",
    img: "https://www.craftoutlet.com/cdn/shop/files/rose-lily-bush-yellow-2-63324yw.jpg?v=1750855215&width=2343"
  },
  {
    id: 104,
    name: "ჰოლანდიური ტიტა (ვარდისფერი)",
    price: 8,
    tag: "სეზონური",
    img: "https://www.hollandsouvenirshop.nl/image/cache/catalog/Products/10-2020/houten-tulpen/houten-tulp-lila-steel-1000x1000.jpg.webp"
  },
  {
    id: 105,
    name: "პეონი (სამეფო)",
    price: 18,
    tag: "პრემიუმი",
    img: "https://www.craftoutlet.com/cdn/shop/files/image_79026.jpg?v=1736170930"
  },
  {
    id: 106,
    name: "გიფსოფილა (თეთრი)",
    price: 10,
    tag: "დეკორი",
    img: "https://cdn.ecommercedns.uk/files/2/236502/2/51218312/3-png.jpg"
  },
  {
    id: 107,
    name: "ევკალიპტის ტოტი",
    price: 6,
    tag: "მწვანე",
    img: "https://thesuffolknest.com/cdn/shop/files/artificial_blush_eucalyptus_stem.jpg?v=1778753576"
  },
  {
    id: 108,
    name: "დეკორატიული მწვანე ფოთლები",
    price: 4,
    tag: "მწვანე",
    img: "https://static.vecteezy.com/system/resources/thumbnails/060/595/438/small_2x/vine-with-lush-green-leaves-botanical-decoration-plant-stem-cut-out-transparent-png.png"
  },
  {
    id: 109,
    name: "პრემიუმ შესაფუთი ქაღალდი და ლენტი (ვარდისფერი)",
    price: 15,
    tag: "აქსესუარი",
    img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=500&q=80"
  },
  {
    id: 110,
    name: "პრემიუმ შესაფუთი ქაღალდი და ლენტი (შავი)",
    price: 15,
    tag: "აქსესუარი",
    img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=500&q=80"
  },
  {
    id: 111,
    name: "პრემიუმ შესაფუთი ქაღალდი და ლენტი (თეთრი)",
    price: 15,
    tag: "აქსესუარი",
    img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=500&q=80"
  },
  {
    id: 112,
    name: "პრემიუმ შესაფუთი ქაღალდი და ლენტი (კრემისფერი)",
    price: 15,
    tag: "აქსესუარი",
    img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=500&q=80"
  },
  {
    id: 113,
    name: "პრემიუმ შესაფუთი ქაღალდი და ლენტი (წითელი)",
    price: 15,
    tag: "აქსესუარი",
    img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=500&q=80"
  },
  {
    id: 114,
    name: "პრემიუმ შესაფუთი ქაღალდი და ლენტი (ცისფერი)",
    price: 15,
    tag: "აქსესუარი",
    img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=500&q=80"
  },
  {
    id: 115,
    name: "პრემიუმ შესაფუთი ქაღალდი და ლენტი (მწვანე)",
    price: 15,
    tag: "აქსესუარი",
    img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=500&q=80"
  },
  {
    id: 116,
    name: "პრემიუმ შესაფუთი ქაღალდი და ლენტი (იასამნისფერი)",
    price: 15,
    tag: "აქსესუარი",
    img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=500&q=80"
  },
  {
    id: 117,
    name: "პრემიუმ შესაფუთი ქაღალდი და ლენტი (ნაცრისფერი)",
    price: 15,
    tag: "აქსესუარი",
    img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=500&q=80"
  }
];


// ── Products scraped from Wolt (Sisters Flower) mapped to IDs 301-320 ──
const woltProducts = [
  {
    id: 301,
    name: "ფერადი გერბერა",
    price: 90,
    description: "თაიგულში არსებული ყვავილები ,შესაძლოა ჩანაცვლდეს იგივე ყვავილით ,უბრალოდ განსხვავებული ფერით",
    category: "ყვავილები",
    img: "https://wolt-menu-images-cdn.wolt.com/menu-images/601d162ee51465f991cb5ee1/b5a05aec-679a-11eb-9109-86daa48a53e6_020_10____________________.jpeg"
  },
  {
    id: 302,
    name: "ფერადი სფრეი ვარდი 10 ცალი",
    price: 225,
    description: "თაიგულში არსებული ყვავილები ,შესაძლოა ჩანაცვლდეს იგივე ყვავილით ,უბრალოდ განსხვავებული ფერით",
    category: "ვარდი",
    img: "https://wolt-menu-images-cdn.wolt.com/menu-images/601d162ee51465f991cb5ee1/b3a25068-99e1-11ec-bf27-121ad7d8dffe_b8184e5a_d560_4ae3_a480_2581786f0126.jpeg"
  },
  {
    id: 303,
    name: "ფერადი სფრეი ვარდი 20 ცალი",
    price: 450,
    description: "თაიგულში არსებული ყვავილები ,შესაძლოა ჩანაცვლდეს იგივე ყვავილით ,უბრალოდ განსხვავებული ფერით",
    category: "ვარდი",
    img: "https://wolt-menu-images-cdn.wolt.com/menu-images/601d162ee51465f991cb5ee1/02519d7c-99e2-11ec-bdc5-a669878ebe30_5cb2c504_2759_4307_9b06_ec9b84ad4bb8.jpeg"
  },
  {
    id: 304,
    name: "იასამანი",
    price: 36,
    description: "თაიგული შეიძლება  იყოს ოდნავ განსხვავებუად შეფუთული",
    category: "შეიგრძენი გაზაფხული",
    img: "https://imageproxy.wolt.com/assets/69ddf7733c7046e2a6b0d4e3"
  },
  {
    id: 305,
    name: "იასამანი",
    price: 76.5,
    description: "თაიგული შეიძლება  იყოს ოდნავ განსხვავებუად შეფუთული",
    category: "შეიგრძენი გაზაფხული",
    img: "https://imageproxy.wolt.com/assets/69ddf8173c7046e2a6b0d51d"
  },
  {
    id: 306,
    name: "პიონი თეთრი 10 ტოტი",
    price: 146,
    description: "თაიგულში არსებული ყვავილები ,შესაძლოა ჩანაცვლდეს იგივე ყვავილებით ,უბრალოდ განსხვავებული ფერით ასევე თაიგული შეიძლება იყოს ოდნავ განსხვავებუად შეფუთული.",
    category: "შეიგრძენი გაზაფხული",
    img: "https://wolt-menu-images-cdn.wolt.com/menu-images/601d162ee51465f991cb5ee1/66872054-b73a-11eb-8fc2-5aaa095ba78d_d9fa1434_11a3_4636_ba3b_7c3f3153e029.jpeg"
  },
  {
    id: 307,
    name: "პიონი ბორდოსფერი (5 ცალი)",
    price: 75,
    description: "თაიგულში არსებული ყვავილები ,შესაძლოა ჩანაცვლდეს იგივე ყვავილებით ,უბრალოდ განსხვავებული ფერით ასევე თაიგული შეიძლება იყოს ოდნავ განსხვავებუად შეფუთული.",
    category: "შეიგრძენი გაზაფხული",
    img: "https://wolt-menu-images-cdn.wolt.com/menu-images/601d162ee51465f991cb5ee1/31457b8e-b73f-11eb-a737-2a8d0e13ea00_edb7962d_dc16_44d4_946c_03465da3262b.jpeg"
  },
  {
    id: 308,
    name: "პიონი ვარდისფერი  (10 ცალი)",
    price: 150,
    description: "თაიგულში არსებული ყვავილები ,შესაძლოა ჩანაცვლდეს იგივე ყვავილებით ,უბრალოდ განსხვავებული ფერით ასევე თაიგული შეიძლება იყოს ოდნავ განსხვავებუად შეფუთული.",
    category: "შეიგრძენი გაზაფხული",
    img: "https://wolt-menu-images-cdn.wolt.com/menu-images/601d162ee51465f991cb5ee1/0284a244-b73e-11eb-8379-0ed4f51f4122_c02d6e75_0568_4599_adfc_38f5928e7ef2.jpeg"
  },
  {
    id: 309,
    name: "პიონი ფერადი (10 ცალი)",
    price: 150,
    description: "თაიგულში არსებული ყვავილები ,შესაძლოა ჩანაცვლდეს იგივე ყვავილებით ,უბრალოდ განსხვავებული ფერით",
    category: "შეიგრძენი გაზაფხული",
    img: "https://wolt-menu-images-cdn.wolt.com/menu-images/601d162ee51465f991cb5ee1/327a256e-b73e-11eb-b109-6a8cc970b139_f4cecfe5_c17f_4ced_8b07_c8d0bf2269f1.jpeg"
  },
  {
    id: 310,
    name: "მზესუმზირა",
    price: 170,
    description: "თაიგულში არსებული ყვავილები ,შესაძლოა ჩანაცვლდეს იგივე ყვავილებით ,უბრალოდ განსხვავებული ფერით ასევე თაიგული შეიძლება იყოს ოდნავ განსხვავებუად შეფუთული.",
    category: "ყვავილები",
    img: "https://wolt-menu-images-cdn.wolt.com/menu-images/601d162ee51465f991cb5ee1/22af55c4-ba8f-11eb-9822-ce2a3612ebdf_119f183f_1c07_430c_b73b_490625a6d8ae.jpeg"
  },
  {
    id: 311,
    name: "ვარდისფერი წინწკალა",
    price: 45,
    description: "თაიგულში არსებული ყვავილები ,შესაძლოა ჩანაცვლდეს იგივე ყვავილებით ,უბრალოდ განსხვავებული ფერით ასევე თაიგული შეიძლება იყოს ოდნავ განსხვავებუად შეფუთული.",
    category: "შეიგრძენი გაზაფხული",
    img: "https://wolt-menu-images-cdn.wolt.com/menu-images/601d162ee51465f991cb5ee1/659c879c-bd57-11eb-bd51-d6af14e2c848_img_6687.jpeg"
  },
  {
    id: 312,
    name: "გვირილა",
    price: 35,
    description: "თაიგულში არსებული ყვავილები ,შესაძლოა ჩანაცვლდეს იგივე ყვავილებით ,უბრალოდ განსხვავებული ფერით ასევე თაიგული შეიძლება იყოს ოდნავ განსხვავებუად შეფუთული.",
    category: "შეიგრძენი გაზაფხული",
    img: "https://wolt-menu-images-cdn.wolt.com/menu-images/601d162ee51465f991cb5ee1/e4008b38-bd57-11eb-ba16-760ae1832846_img_6701.jpeg"
  },
  {
    id: 313,
    name: "ჯუჯა ვარდების კომპოზიცია",
    price: 300,
    description: "თაიგულში არსებული ყვავილები ,შესაძლოა ჩანაცვლდეს იგივე ყვავილებით ,უბრალოდ განსხვავებული ფერით ასევე თაიგული შეიძლება იყოს ოდნავ განსხვავებუად შეფუთული.",
    category: "კომპოზიცია",
    img: "https://wolt-menu-images-cdn.wolt.com/menu-images/601d162ee51465f991cb5ee1/bd6d5daa-ba8e-11eb-bbfe-96f1120dbef2_e401332d_5dd1_4868_b7ca_8c2b57aaf932.jpeg"
  },
  {
    id: 314,
    name: "ალსტრომერია 5 ცალი",
    price: 50,
    description: "თაიგულში არსებული ყვავილები ,შესაძლოა ჩანაცვლდეს იგივე ყვავილებით ,უბრალოდ განსხვავებული ფერით ასევე თაიგული შეიძლება იყოს ოდნავ განსხვავებუად შეფუთული.",
    category: "ყვავილები",
    img: "https://wolt-menu-images-cdn.wolt.com/menu-images/601d162ee51465f991cb5ee1/43230686-99a8-11ec-b39b-724deb917915_4ea3e472_5da8_45c4_820a_bcd539c6b5f8.jpeg"
  },
  {
    id: 315,
    name: "ალსტრომერია 10 ცალი",
    price: 90,
    description: "თაიგულში არსებული ყვავილები ,შესაძლოა ჩანაცვლდეს იგივე ყვავილებით ,უბრალოდ განსხვავებული ფერით ასევე თაიგული შეიძლება იყოს ოდნავ განსხვავებუად შეფუთული.",
    category: "ყვავილები",
    img: "https://wolt-menu-images-cdn.wolt.com/menu-images/601d162ee51465f991cb5ee1/03305f10-99df-11ec-941d-32a37afc7823_454be6cc_11cd_4065_9565_408ab1a0aa84.jpeg"
  },
  {
    id: 316,
    name: "ალსტრომერია 15 ცალი",
    price: 135,
    description: "თაიგულში არსებული ყვავილები ,შესაძლოა ჩანაცვლდეს იგივე ყვავილებით ,უბრალოდ განსხვავებული ფერით ასევე თაიგული შეიძლება იყოს ოდნავ განსხვავებუად შეფუთული.",
    category: "ყვავილები",
    img: "https://wolt-menu-images-cdn.wolt.com/menu-images/601d162ee51465f991cb5ee1/3e74dc04-99df-11ec-998e-f64168bbb6ad_b8d0883b_cb27_4bc3_8be8_36d13a7d3672.jpeg"
  },
  {
    id: 317,
    name: "ალსტრომერია 20 ცალი",
    price: 160,
    description: "თაიგულში არსებული ყვავილები ,შესაძლოა ჩანაცვლდეს იგივე ყვავილებით ,უბრალოდ განსხვავებული ფერით ასევე თაიგული შეიძლება იყოს ოდნავ განსხვავებუად შეფუთული.",
    category: "ყვავილები",
    img: "https://wolt-menu-images-cdn.wolt.com/menu-images/601d162ee51465f991cb5ee1/8c7c44dc-99df-11ec-8368-d23fe09513b9_9846080d_5400_45d3_bf6a_1a38c4a7e4e6.jpeg"
  },
  {
    id: 318,
    name: "ფერადი სფრეი ვარდი 5 ცალი",
    price: 112,
    description: "თაიგულში არსებული ყვავილები,შესაძლოა ჩანაცვლდეს იგივე ყვავილებით ,უბრალოდ განსხვავებული ფერით ასევე თაიგული შეიძლება იყოს ოდნავ განსხვავებუად შეფუთული.",
    category: "ვარდი",
    img: "https://wolt-menu-images-cdn.wolt.com/menu-images/601d162ee51465f991cb5ee1/f8717fa2-9a63-11ec-be2e-f6efd6caef2b_da263b80_55a9_45d7_b2a4_0441a828962f.jpeg"
  },
  {
    id: 319,
    name: "ფერადი სფრეი ვარდი 15 ცალი",
    price: 337,
    description: "თაიგულში არსებული ყვავილები ,შესაძლოა ჩანაცვლდეს იგივე ყვავილებით ,უბრალოდ განსხვავებული ფერით ასევე თაიგული შეიძლება იყოს ოდნავ განსხვავებუად შეფუთული.",
    category: "ვარდი",
    img: "https://wolt-menu-images-cdn.wolt.com/menu-images/601d162ee51465f991cb5ee1/4a99ba98-99eb-11ec-b1c3-32a37afc7823_0b206642_2195_462d_824f_1cd89e318e5c.jpeg"
  },
  {
    id: 320,
    name: "პიონი ( 20 ცალი)",
    price: 300,
    description: "თაიგულში არსებული ყვავილები ,შესაძლოა ჩანაცვლდეს იგივე ყვავილებით ,უბრალოდ განსხვავებული ფერით ასევე თაიგული შეიძლება იყოს ოდნავ განსხვავებუად შეფუთული.",
    category: "შეიგრძენი გაზაფხული",
    img: "https://wolt-menu-images-cdn.wolt.com/menu-images/601d162ee51465f991cb5ee1/a633c75a-0f9a-11ef-bc03-6a1bdf2cb007_img_8329.jpeg"
  }
];

// ── Helper to find an item across all product database arrays ──
function getItemDetails(id) {
  return products.find(p => p.id === id) ||
    singleStems.find(s => s.id === id) ||
    woltProducts.find(w => w.id === id);
}

// ── Shopping Cart State ──
let cart = JSON.parse(localStorage.getItem('flowersCart')) || [];

// ── DOM Elements ──
const collectionsGrid = document.getElementById('collectionsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartCloseBtn = document.getElementById('cartCloseBtn');
const cartBackdrop = document.getElementById('cartBackdrop');
const cartDrawer = document.getElementById('cartDrawer');
const cartItemsList = document.getElementById('cartItemsList');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const cartDrawerFooter = document.getElementById('cartDrawerFooter');
const cartBadge = document.getElementById('cartBadge');
const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');

// Modals
const checkoutModal = document.getElementById('checkoutModal');
const checkoutCloseBtn = document.getElementById('checkoutCloseBtn');
const checkoutForm = document.getElementById('checkoutForm');
const successModal = document.getElementById('successModal');
const successCloseBtn = document.getElementById('successCloseBtn');
const successCloseBtnX = document.getElementById('successCloseBtnX');
const successWhatsappBtn = document.getElementById('successWhatsappBtn');
const orderSummaryBox = document.getElementById('orderSummaryBox');

// ── Render Single Stems Grid (custom.html) ──
function renderSingleStems() {
  const stemsGrid = document.getElementById('stemsGrid');
  if (!stemsGrid) return;
  stemsGrid.innerHTML = '';

  singleStems.forEach((stem, index) => {
    const card = document.createElement('div');
    card.className = `stem-card reveal reveal-delay-${index % 3}`;

    const imgClass = stem.contain ? 'stem-img stem-img-contain' : 'stem-img';

    card.innerHTML = `
      <div class="stem-img-container">
        <img class="${imgClass}" src="${stem.img}" alt="${stem.name}" />
        <span class="stem-tag">${stem.tag}</span>
      </div>
      <div class="stem-details">
        <h3 class="stem-name">${stem.name}</h3>
        <p class="stem-price">₾ ${stem.price} / ყუნწი</p>
        <div class="stem-action-row">
          <div class="stem-qty-selector">
            <button class="stem-qty-btn stem-qty-minus">—</button>
            <span class="stem-qty-val" id="qty-val-${stem.id}">1</span>
            <button class="stem-qty-btn stem-qty-plus">+</button>
          </div>
          <button class="stem-btn-add" data-id="${stem.id}">კალათაში დამატება</button>
        </div>
      </div>
    `;

    // Local quantity buttons listeners
    const qtyValEl = card.querySelector(`#qty-val-${stem.id}`);
    let selectedQty = 1;

    card.querySelector('.stem-qty-minus').addEventListener('click', (e) => {
      e.preventDefault();
      if (selectedQty > 1) {
        selectedQty--;
        qtyValEl.textContent = selectedQty;
      }
    });

    card.querySelector('.stem-qty-plus').addEventListener('click', (e) => {
      e.preventDefault();
      selectedQty++;
      qtyValEl.textContent = selectedQty;
    });

    // Add to Cart with selected quantity
    card.querySelector('.stem-btn-add').addEventListener('click', (e) => {
      e.preventDefault();
      addToCart(stem.id, selectedQty);
      // Reset card selection quantity to 1 after addition
      selectedQty = 1;
      qtyValEl.textContent = 1;
    });

    stemsGrid.appendChild(card);
  });

  // Re-observe dynamic entries for scroll reveals
  if (typeof obs !== 'undefined') {
    document.querySelectorAll('.stems-grid .reveal').forEach(el => obs.observe(el));
  }
}


// ── Render Collections Grid ──
function renderCollections() {
  if (!collectionsGrid) return;
  collectionsGrid.innerHTML = '';

  products.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = `card reveal reveal-delay-${index % 3}`;

    card.innerHTML = `
      <div class="card-img-container">
        <img class="card-img" src="${product.img}" alt="${product.name}" />
        <span class="card-tag">${product.tag}</span>
      </div>
      <div class="card-details">
        <h3 class="card-name">${product.name}</h3>
        <p class="card-price">₾ ${product.price}</p>
        <button class="card-btn-add" data-id="${product.id}">კალათაში დამატება</button>
      </div>
    `;

    // Add to Cart Event Listener
    card.querySelector('.card-btn-add').addEventListener('click', (e) => {
      e.preventDefault();
      const id = parseInt(e.target.getAttribute('data-id'));
      addToCart(id);
    });

    collectionsGrid.appendChild(card);
  });

  // Re-observe dynamic entries for scroll reveals
  if (typeof obs !== 'undefined') {
    document.querySelectorAll('.collections-grid .reveal').forEach(el => obs.observe(el));
  }
}

// ── Cart Operations ──
function addToCart(productId, qty = 1) {
  const existingItem = cart.find(item => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    cart.push({ productId, quantity: qty });
  }
  updateCart();
  toggleCart(true); // Open cart drawer on add
}

function updateQuantity(productId, delta) {
  const item = cart.find(item => item.productId === productId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.productId !== productId);
    }
  }
  updateCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.productId !== productId);
  updateCart();
}

function calculateTotal() {
  return cart.reduce((sum, item) => {
    const product = getItemDetails(item.productId);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
}

function updateCart() {
  // Save to localStorage
  localStorage.setItem('flowersCart', JSON.stringify(cart));

  // Render Badge
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartBadge.textContent = totalItemsCount;

  // Render Cart List
  if (cart.length === 0) {
    cartItemsList.innerHTML = '<div class="cart-empty-message">კალათა ცარიელია</div>';
    cartDrawerFooter.style.display = 'none';
  } else {
    cartItemsList.innerHTML = '';
    cartDrawerFooter.style.display = 'block';

    cart.forEach(item => {
      const product = getItemDetails(item.productId);
      if (!product) return;

      const imgClass = product.contain ? 'cart-item-img cart-item-img-contain' : 'cart-item-img';

      const itemRow = document.createElement('div');
      itemRow.className = 'cart-item';
      itemRow.innerHTML = `
        <img src="${product.img}" alt="${product.name}" class="${imgClass}" />
        <div class="cart-item-details">
          <h4 class="cart-item-name">${product.name}</h4>
          <span class="cart-item-price">₾ ${product.price}</span>
          <div class="cart-item-quantity">
            <button class="qty-btn qty-minus" data-id="${product.id}">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn qty-plus" data-id="${product.id}">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-id="${product.id}">✕</button>
      `;

      // Quantity Buttons Listeners
      itemRow.querySelector('.qty-minus').addEventListener('click', () => updateQuantity(product.id, -1));
      itemRow.querySelector('.qty-plus').addEventListener('click', () => updateQuantity(product.id, 1));
      // Remove Button Listener
      itemRow.querySelector('.cart-item-remove').addEventListener('click', () => removeFromCart(product.id));

      cartItemsList.appendChild(itemRow);
    });

    // Render Total Price
    cartTotalPrice.textContent = `₾ ${calculateTotal()}`;
  }

  // Update AI visualizer if available on custom.html
  if (typeof updateAIVisualizerSummary === 'function') {
    updateAIVisualizerSummary();
  }
}

// ── Toggle Functions ──
function toggleCart(isOpen) {
  if (isOpen) {
    cartDrawer.classList.add('open');
    cartBackdrop.classList.add('visible');
  } else {
    cartDrawer.classList.remove('open');
    cartBackdrop.classList.remove('visible');
  }
}

function toggleModal(modal, isOpen) {
  if (isOpen) {
    modal.classList.add('open');
  } else {
    modal.classList.remove('open');
  }
}

// ── Checkout Flow ──
function handleCheckoutSubmit(e) {
  e.preventDefault();

  const clientName = document.getElementById('clientName').value.trim();
  const clientPhone = document.getElementById('clientPhone').value.trim();
  const deliveryAddress = document.getElementById('deliveryAddress').value.trim();
  const deliveryDate = document.getElementById('deliveryDate').value;
  const deliveryTime = document.getElementById('deliveryTime').value;
  const cardText = document.getElementById('cardText').value.trim();
  const paymentMethodVal = document.getElementById('paymentMethod').value;

  const paymentText = paymentMethodVal === 'bank_transfer' ? 'საბანკო გადარიცხვა' : 'ნაღდი/ბარათი კურიერთან';
  const total = calculateTotal();

  // Detect if order has custom stems for WhatsApp special instructions
  const hasCustomStems = cart.some(item => singleStems.some(s => s.id === item.productId));

  // 1. Build dynamic receipt inside success modal
  let summaryHtml = `
    <div class="order-summary-title">${hasCustomStems ? 'შეკვეთილი პროდუქტები:' : 'შეკვეთილი თაიგულები:'}</div>
  `;

  let whatsappText = `გამარჯობა, მსურს ყვავილების შეკვეთა:\n\n`;
  whatsappText += `🌸 *შეკვეთა:*\n`;

  cart.forEach(item => {
    const product = getItemDetails(item.productId);
    if (product) {
      summaryHtml += `
        <div class="order-summary-item">
          <span>${product.name} (x${item.quantity})</span>
          <span>₾ ${product.price * item.quantity}</span>
        </div>
      `;
      whatsappText += `- ${product.name} x ${item.quantity} (₾ ${product.price * item.quantity})\n`;
    }
  });

  summaryHtml += `
    <div class="order-summary-total">
      <span>სულ ჯამი:</span>
      <span>₾ ${total}</span>
    </div>
  `;
  whatsappText += `\n💵 *სულ ჯამი:* ₾ ${total}\n\n`;

  whatsappText += `👤 *კლიენტის ინფორმაცია:*\n`;
  whatsappText += `სახელი: ${clientName}\n`;
  whatsappText += `ტელეფონი: ${clientPhone}\n`;
  whatsappText += `მისამართი: ${deliveryAddress}\n`;
  whatsappText += `მიტანის თარიღი: ${deliveryDate} / ${deliveryTime}\n`;

  if (cardText) {
    whatsappText += `✉️ *მისალოცი ბარათის ტექსტი:*\n"${cardText}"\n`;
  }
  whatsappText += `💳 *გადახდის მეთოდი:* ${paymentText}\n`;

  if (hasCustomStems) {
    whatsappText += `\n⚠️ *მნიშვნელოვანი შენიშვნა ფლორისტს:*\nგთხოვთ, ეს ცალკეული ყვავილების ღეროები ააწყოთ ერთ თაიგულად და მიწოდებამდე გამომიგზავნოთ ფოტო WhatsApp-ში! 📸\n`;
  }

  orderSummaryBox.innerHTML = summaryHtml;

  // 2. Set WhatsApp Link
  const whatsappUrl = `https://wa.me/995577779326?text=${encodeURIComponent(whatsappText)}`;
  successWhatsappBtn.onclick = () => window.open(whatsappUrl, '_blank');

  // 3. Clear Cart & Reset Form
  cart = [];
  updateCart();
  checkoutForm.reset();
  document.getElementById('clientPhone').value = "+995 ";

  // 4. Toggle Modals
  toggleModal(checkoutModal, false);
  toggleModal(successModal, true);
}

// ── Event Listeners ──
if (cartBtn) cartBtn.addEventListener('click', () => toggleCart(true));
if (cartCloseBtn) cartCloseBtn.addEventListener('click', () => toggleCart(false));
if (cartBackdrop) cartBackdrop.addEventListener('click', () => toggleCart(false));

if (cartCheckoutBtn) {
  cartCheckoutBtn.addEventListener('click', () => {
    toggleCart(false);
    toggleModal(checkoutModal, true);
  });
}

if (checkoutCloseBtn) checkoutCloseBtn.addEventListener('click', () => toggleModal(checkoutModal, false));
if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckoutSubmit);

if (successCloseBtn) successCloseBtn.addEventListener('click', () => toggleModal(successModal, false));
if (successCloseBtnX) successCloseBtnX.addEventListener('click', () => toggleModal(successModal, false));

// ── Nav scroll ──
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ── Scroll reveal ──
const revealEls = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => obs.observe(el));

// ── Render Catalog Grid ──
function renderCatalog(filter = 'all') {
  const catalogGrid = document.getElementById('catalogGrid');
  if (!catalogGrid) return;
  catalogGrid.innerHTML = '';

  let filtered = woltProducts;
  if (filter === 'roses') {
    filtered = woltProducts.filter(p => p.category === 'ვარდი' || p.name.includes('ვარდი'));
  } else if (filter === 'peonies') {
    filtered = woltProducts.filter(p => p.name.includes('პიონი'));
  } else if (filter === 'alstroemerias') {
    filtered = woltProducts.filter(p => p.name.includes('ალსტრომერია'));
  } else if (filter === 'seasonal') {
    filtered = woltProducts.filter(p => p.category === 'შეიგრძენი გაზაფხული' || p.name.includes('იასამანი') || p.name.includes('გვირილა') || p.name.includes('წინწკალა'));
  }

  filtered.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = `card reveal reveal-delay-${index % 3}`;

    card.innerHTML = `
      <div class="card-img-container">
        <img class="card-img" src="${product.img}" alt="${product.name}" />
        <span class="card-tag">${product.price >= 150 ? 'პრემიუმი' : 'პოპულარული'}</span>
      </div>
      <div class="card-details">
        <h3 class="card-name">${product.name}</h3>
        <p class="card-desc">${product.description}</p>
        <p class="card-price">₾ ${product.price}</p>
        <button class="card-btn-add" data-id="${product.id}">კალათაში დამატება</button>
      </div>
    `;

    // Add to Cart Event Listener
    card.querySelector('.card-btn-add').addEventListener('click', (e) => {
      e.preventDefault();
      addToCart(product.id);
    });

    catalogGrid.appendChild(card);
  });

  // Re-observe dynamic entries for scroll reveals
  if (typeof obs !== 'undefined') {
    document.querySelectorAll('#catalogGrid .reveal').forEach(el => obs.observe(el));
  }
}

// ── Initialization ──
document.addEventListener('DOMContentLoaded', () => {
  renderCollections();
  renderSingleStems();
  renderCatalog();
  updateCart();

  // Set up filter buttons for catalog
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.getAttribute('data-category');
        renderCatalog(category);
      });
    });
  }

  // Set default min date to today for checkout
  const dateInput = document.getElementById('deliveryDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  // Set up AI visualizer triggers
  const aiGenBtn = document.getElementById('aiGenBtn');
  if (aiGenBtn) {
    aiGenBtn.addEventListener('click', handleAIVisualization);
  }
  updateAIVisualizerSummary();
});

// ── AI Bouquet Visualizer (Nano Banana AI) ──
const stemPromptMap = {
  101: "red roses",
  102: "white roses",
  103: "yellow spray roses",
  104: "pink Dutch tulips",
  105: "royal peonies",
  106: "white gypsophila (baby's breath) flowers",
  107: "eucalyptus branches",
  108: "decorative lush green leaves",
  109: "pink wrapping paper",
  110: "black wrapping paper",
  111: "white wrapping paper",
  112: "beige wrapping paper",
  113: "red wrapping paper",
  114: "blue wrapping paper",
  115: "green wrapping paper",
  116: "purple wrapping paper",
  117: "grey wrapping paper"
};

function updateAIVisualizerSummary() {
  const aiSummaryList = document.getElementById('aiSummaryList');
  const aiGenBtn = document.getElementById('aiGenBtn');
  if (!aiSummaryList || !aiGenBtn) return;

  const stemItems = cart.filter(item => singleStems.some(s => s.id === item.productId));

  if (stemItems.length === 0) {
    aiSummaryList.innerHTML = '<div class="ai-summary-empty">თქვენი თაიგული ცარიელია. აირჩიეთ ყვავილები ზემოთ მოცემული სიიდან და დაამატეთ კალათაში.</div>';
    aiGenBtn.disabled = true;
    aiGenBtn.classList.add('disabled');
    return;
  }

  aiGenBtn.disabled = false;
  aiGenBtn.classList.remove('disabled');
  aiSummaryList.innerHTML = '';

  stemItems.forEach(item => {
    const product = getItemDetails(item.productId);
    if (!product) return;

    const row = document.createElement('div');
    row.className = 'ai-summary-item';
    row.innerHTML = `
      <span>${product.name}</span>
      <span class="ai-summary-qty">x${item.quantity}</span>
    `;
    aiSummaryList.appendChild(row);
  });
}

function handleAIVisualization() {
  const aiLoader = document.getElementById('aiLoader');
  const aiPlaceholder = document.getElementById('aiPlaceholder');
  const aiGeneratedImg = document.getElementById('aiGeneratedImg');
  
  if (!aiLoader || !aiPlaceholder || !aiGeneratedImg) return;

  const stemItems = cart.filter(item => singleStems.some(s => s.id === item.productId));
  if (stemItems.length === 0) return;

  const flowerDescriptions = [];
  let wrappingDescription = '';

  stemItems.forEach(item => {
    const promptWord = stemPromptMap[item.productId];
    if (!promptWord) return;

    if (item.productId >= 109 && item.productId <= 117) {
      wrappingDescription = `wrapped in premium ${promptWord} with a matching silk ribbon`;
    } else {
      flowerDescriptions.push(`${item.quantity} ${promptWord}`);
    }
  });

  let itemsText = flowerDescriptions.join(', ');
  if (!itemsText) {
    itemsText = 'fresh beautiful botanical flowers';
  }

  let finalWrapping = wrappingDescription ? wrappingDescription : 'as a clean, elegant hand-tied bunch';

  const prompt = `A professional, stunning, luxury botanical florist bouquet containing: ${itemsText}. The bouquet is ${finalWrapping}. Studio background, neutral warm backdrop, soft natural dramatic lighting, photorealistic, ultra realistic, highly detailed, 8k resolution, commercial flower boutique photography style, masterpiece.`;

  aiPlaceholder.style.display = 'none';
  aiGeneratedImg.style.display = 'none';
  aiGeneratedImg.classList.remove('loaded');
  aiLoader.style.display = 'flex';

  const seed = Math.floor(Math.random() * 10000000);
  const generatorUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=800&height=800&nologo=true&seed=${seed}`;

  const tempImg = new Image();
  tempImg.src = generatorUrl;
  tempImg.onload = () => {
    aiLoader.style.display = 'none';
    aiGeneratedImg.src = generatorUrl;
    aiGeneratedImg.style.display = 'block';
    setTimeout(() => {
      aiGeneratedImg.classList.add('loaded');
    }, 50);
  };
  tempImg.onerror = () => {
    aiLoader.style.display = 'none';
    aiPlaceholder.style.display = 'flex';
    alert('ვერ მოხერხდა სურათის გენერირება. გთხოვთ სცადოთ მოგვიანებით.');
  };
}
