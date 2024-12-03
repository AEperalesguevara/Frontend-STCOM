import STCOMlogo from "./STCOMlogo.png";
import Xlogo from "./X_.png";
import Instagramlogo from "./Instagram_.png";
import Facebooklogo from "./Facebook_.png";
import pc_1 from "./pc_1.png";
import pc_2 from "./pc_2.png";
import pc_3 from "./pc_3.png";
import printer_1 from "./printer_1.png";
import printer_2 from "./printer_2.png";
import printer_3 from "./printer_3.png";
import camera_1 from "./camera_1.png";
import camera_2 from "./camera_2.png";
import camera_3 from "./camera_3.png";
import keyboard_1 from "./keyboard_1.png";
import keyboard_2 from "./keyboard_2.png";
import keyboard_3 from "./keyboard_3.png";
import mouse_1 from "./mouse_1.png";
import mouse_2 from "./mouse_2.png";
import mouse_3 from "./mouse_3.png";
import laptop_1 from "./laptop_1.png";
import laptop_2 from "./laptop_2.png";
import laptop_3 from "./laptop_3.png";
import apple from "./apple_logo.png";
import microsoft from "./microsoft_logo.png";
import samsung from "./samsung_logo.png";
import dell from "./dell_logo.png";
import hp from "./hp_logo.png";
import lenovo from "./lenovo_logo.png";
import asus from "./asus_logo.png";
import razer from "./razer_logo.png";
import logitech from "./logitech_logo.png";
import sony from "./sony_logo.png";
import us from "./us.png";
export const assets = {
  pc_1,
  pc_2,
  pc_3,
  printer_1,
  printer_2,
  printer_3,
  camera_1,
  camera_2,
  camera_3,
  keyboard_1,
  keyboard_2,
  keyboard_3,
  mouse_1,
  mouse_2,
  mouse_3,
  laptop_1,
  laptop_2,
  laptop_3,
  STCOMlogo,
  Facebooklogo,
  Instagramlogo,
  Xlogo,
  us,
};

export const categories = [
  { category_name: "PCs", category_image: pc_1 },
  { category_name: "Impresoras", category_image: printer_1 },
  { category_name: "Cámaras", category_image: camera_1 },
  { category_name: "Teclados", category_image: keyboard_1 },
  { category_name: "Mouse", category_image: mouse_1 },
  { category_name: "Laptops", category_image: laptop_1 },
];
export const brands = [
  { brand_name: "Apple", brand_image: apple },
  { brand_name: "Microsoft", brand_image: microsoft },
  { brand_name: "Samsung", brand_image: samsung },
  { brand_name: "Dell", brand_image: dell },
  { brand_name: "HP", brand_image: hp },
  { brand_name: "Lenovo", brand_image: lenovo },
  { brand_name: "Asus", brand_image: asus },
  { brand_name: "Razer", brand_image: razer },
  { brand_name: "Logitech", brand_image: logitech },
  { brand_name: "Sony", brand_image: sony },
];
export const products = [
  // PCs
  {
    product_id: 1,
    product_name: "PC Gamer RTX 3060",
    product_image: pc_1,
    product_price: 1500,
    product_desc: "PC de alto rendimiento con tarjeta gráfica RTX 3060.",
    product_category: "PCs",
    is_on_sale: true,
    product_brand: "Dell",
  },
  {
    product_id: 2,
    product_name: "PC Oficina Core i5",
    product_image: pc_2,
    product_price: 800,
    product_desc: "PC ideal para trabajos de oficina y tareas básicas.",
    product_category: "PCs",
    is_on_sale: false,
    product_brand: "HP",
  },
  {
    product_id: 3,
    product_name: "PC Creativo Core i7",
    product_image: pc_3,
    product_price: 2000,
    product_desc: "Diseñada para edición de video y diseño gráfico.",
    product_category: "PCs",
    is_on_sale: false,
    product_brand: "Lenovo",
  },
  // Impresoras
  {
    product_id: 4,
    product_name: "Impresora HP LaserJet",
    product_image: printer_1,
    product_price: 200,
    product_desc: "Impresora láser compacta y eficiente.",
    product_category: "Impresoras",
    product_brand: "HP",
  },
  {
    product_id: 5,
    product_name: "Impresora Canon Multifuncional",
    product_image: printer_2,
    product_price: 300,
    product_desc: "Imprime, escanea y copia con alta calidad.",
    product_category: "Impresoras",
    is_on_sale: true,
    product_brand: "Canon",
  },
  {
    product_id: 6,
    product_name: "Impresora Epson EcoTank",
    product_image: printer_3,
    product_price: 400,
    product_desc: "Baja en costos de tinta con un rendimiento excepcional.",
    product_category: "Impresoras",
    is_on_sale: true,
    product_brand: "Epson",
  },
  // Cámaras
  {
    product_id: 7,
    product_name: "Cámara Sony Alpha",
    product_image: camera_1,
    product_price: 1200,
    product_desc:
      "Cámara digital de alta resolución para fotógrafos profesionales.",
    product_category: "Cámaras",
    is_on_sale: true,
    product_brand: "Sony",
  },
  {
    product_id: 8,
    product_name: "Cámara GoPro Hero",
    product_image: camera_2,
    product_price: 500,
    product_desc: "Ideal para grabaciones de acción y deportes extremos.",
    product_category: "Cámaras",
    is_on_sale: true,
    product_brand: "HP",
  },
  {
    product_id: 9,
    product_name: "Cámara Nikon D3500",
    product_image: camera_3,
    product_price: 800,
    product_desc: "Cámara réflex ligera y fácil de usar.",
    product_category: "Cámaras",
    is_on_sale: false,
    product_brand: "Nikon",
  },
  // Teclados
  {
    product_id: 10,
    product_name: "Teclado Mecánico RGB",
    product_image: keyboard_1,
    product_price: 100,
    product_desc: "Teclado mecánico con retroiluminación RGB personalizable.",
    product_category: "Teclados",
    is_on_sale: false,
    product_brand: "Razer",
  },
  {
    product_id: 11,
    product_name: "Teclado Inalámbrico Logitech",
    product_image: keyboard_2,
    product_price: 50,
    product_desc: "Compacto y cómodo para el trabajo diario.",
    product_category: "Teclados",
    is_on_sale: false,
    product_brand: "Logitech",
  },
  {
    product_id: 12,
    product_name: "Teclado para Gaming Razer",
    product_image: keyboard_3,
    product_price: 150,
    product_desc: "Diseñado para gamers con switches táctiles y rápidos.",
    product_category: "Teclados",
    is_on_sale: false,
    product_brand: "Razer",
  },
  // Mouse
  {
    product_id: 13,
    product_name: "Mouse Gamer Logitech G502",
    product_image: mouse_1,
    product_price: 60,
    product_desc: "Mouse ergonómico con múltiples botones personalizables.",
    product_category: "Mouse",
    is_on_sale: true,
    product_brand: "Logitech",
  },
  {
    product_id: 14,
    product_name: "Mouse Inalámbrico Microsoft",
    product_image: mouse_2,
    product_price: 30,
    product_desc: "Compacto, ligero y sin cables.",
    product_category: "Mouse",
    is_on_sale: true,
    product_brand: "Microsoft",
  },
  {
    product_id: 15,
    product_name: "Mouse Vertical Ergonómico",
    product_image: mouse_3,
    product_price: 70,
    product_desc: "Diseño que reduce la tensión en la muñeca.",
    product_category: "Mouse",
    is_on_sale: false,
    product_brand: "Logitech",
  },
  // Laptops
  {
    product_id: 16,
    product_name: "Laptop Dell XPS 13",
    product_image: laptop_1,
    product_price: 1200,
    product_desc: "Ultraligera con pantalla infinita y alto rendimiento.",
    product_category: "Laptops",
    is_on_sale: false,
    product_brand: "Dell",
  },
  {
    product_id: 17,
    product_name: "Laptop MacBook Air M1",
    product_image: laptop_2,
    product_price: 1400,
    product_desc: "Potencia y eficiencia con el chip M1 de Apple.",
    product_category: "Laptops",
    is_on_sale: true,
    product_brand: "Apple",
  },
  {
    product_id: 18,
    product_name: "Laptop Gaming MSI",
    product_image: laptop_3,
    product_price: 1600,
    product_desc: "Rendimiento extremo para juegos y multitarea.",
    product_category: "Laptops",
    is_on_sale: false,
    product_brand: "HP",
  },
];
