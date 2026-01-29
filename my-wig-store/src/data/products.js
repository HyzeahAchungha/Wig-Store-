import bobblack from "../assets/images/8incbobblack.jpeg"
import eightinchblackbob from "../assets/images/8inchblackbob.jpeg"
import CuryBurgundy from "../assets/images/burgundyvolumenous.jpeg"
import Blondbob from "../assets/images/blondbob.jpeg"
 import blackstraight from "../assets/images/straight.jpeg"
import Brownbob from "../assets/images/brownbob.jpeg"
import Burgundy from "../assets/images/Burgandy Bob jpeg.jpeg"
import Burgundycurly from "../assets/images/burgundy.jpeg"
import colocurly from "../assets/images/colocurly.jpeg"
import colorbob from "../assets/images/colorbob.jpeg"
import colorwaterwave from "../assets/images/colorwaterwave.jpeg"
import cop from "../assets/images/cop.jpeg"
import shortburnorange from "../assets/images/shortburnorange.jpeg"
import currly from "../assets/images/currly.jpeg"
import currlyblond from "../assets/images/curryblond.jpeg"
import longcolorish from "../assets/images/longcolorish.jpeg"
import VoluminousCurly from "../assets/images/VoluminousCurly.jpeg"
import waterwave from "../assets/images/waterwave.jpeg"
import waterwavecurl from "../assets/images/waterwavecurl.jpeg"
import SDDfringebob from "../assets/images/SDD fringe bob.jpeg"
import laceshortbobblack from "../assets/images/Lace Short Bob black.jpeg"
import burnorangcurl from "../assets/images/burnorangcurl.jpeg"
import straight12 from "../assets/images/straignt12.jpeg"
import straightburnorange from "../assets/images/straightburnorange.jpeg"
import straightbrown from "../assets/images/straightbrown.jpeg"
import straightburgundy from "../assets/images/straightburgundy.jpeg"


export const PRODUCTS = [

  // Featured Products
  { id: 1, name: "Sleek Bob Wig", description: "Classic bob cut for everyday elegance", price: 45000, image: SDDfringebob, type: "Bob", color: "Black", length: "12\"", featured: true },
  { id: 2, name: "Deep Wave Luxury", description: "Flowing deep waves with natural movement", price: 200000, image: VoluminousCurly, type: "Deep Wave", color: "Burgundy", length: "18\"", featured: true },
  { id: 3, name: "Bob Straight Elegance", description: "Silky colorbob hair perfection", price: 250000, image: colorbob, type: "Bone Straight", color: "Black", length: "20\"", featured: true },
  { id: 4, name: "Curly Burgundy Wig", description: "Bouncy natural curls", price: 250000, image: CuryBurgundy, type: "Curly", color: "Burgundy", length: "18\"", featured: true },
  
  // Bob Wigs
  { id: 5, name: "Short Bob Chic", description: "Modern short bob style", price: 50000 , image: bobblack, type: "Bob", color: "black", length: "8\"" },
  { id: 6, name: "Black Bob Beauty", description: "Stunning y bob cut", price: 50000, image: eightinchblackbob, type: "Bob", color: "black", length: "8\"" },
  { id: 7, name: "Brown Bob Elegance", description: "Rich brown bob style", price: 70000, image: Brownbob, type: "Bob", color: "Brown", length: "10\"" },
  { id: 8, name: "Black Bob Glam", description: "Deep oxblood bob sophistication", price: 50000, image: laceshortbobblack, type: "Bob", color: "Bob", length: "10\"" },
  { id: 21, name: "Blond Bob 10 inch", description: "Petite blond bob", price: 70000, image: Blondbob, type: "Bob", color: "Blond", length: "10\"" },
  { id: 22, name: "Burgundy Bob Beauty", description: "Stunning burgundy bob cut", price: 70000, image: Burgundy, type: "Bob", color: "Burgundy", length: "10\"" },
    { id: 23, name: "Brown Bob ", description: "Stunning brown bob cut", price: 70000, image: colorbob, type: "Bob", color: "Brown", length: "10\"" },
{ id: 24, name: "Black Bob ", description: "Stunning black bob cut", price: 70000, image: cop, type: "Bob", color: "Black", length: "10\"" },

{ id: 25, name: "Burnt orange Bob ", description: "Stunning burnt orange bob cut", price: 70000, image: shortburnorange, type: "Bob", color: "Black", length: "10\"" },


  // Deep Wave
  { id: 9, name: "Deep Wave Goddess", description: "Luxurious deep wave texture", price: 150000, image: VoluminousCurly, type: "Deep Wave", color: "Black", length: "20\"" },
  { id: 10, name: "Brown Deep Wave", description: "Warm brown deep waves", price: 250000, image: colorwaterwave, type: "Deep Wave", color: "Brown", length: "18\"" },
  { id: 11, name: "Burnt Orange Waves", description: "Bold burnt orange deep waves", price: 250000, image: burnorangcurl, type: "Deep Wave", color: "Burnt Orange", length: "16\"" },
  { id: 12, name: "Black Wave Luxury", description: "Rich oxblood deep waves", price: 250000, image: waterwavecurl, type: "Deep Wave", color: "Black", length: "14\"" },
  { id: 23, name: "Black Deep Wave 12 inch", description: "Black deep waves", price: 250000, image:VoluminousCurly, type: "Deep Wave", color: "Black", length: "12\"" },
  { id: 24, name: "Burgundy Deep Wave 20 inch", description: "Long burgundy waves", price: 250000, image: CuryBurgundy, type: "Deep Wave", color: "Burgundy", length: "20\"" },
  
  // Bone Straight
  { id: 13, name: "Straight & Sleek", description: "Ultra smooth bone straight", price: 250000, image: blackstraight, type: "Bone Straight", color: "Oxblood", length: "20\"" },
  { id: 14, name: "Burgundy Straight Glam", description: "Sleek burgundy straight hair", price: 150000, image: straightburgundy, type: "Bone Straight", color: "Burgundy", length: "18\"" },
  { id: 15, name: "Brown Silk Straight", description: "Silky brown straight perfection", price: 200000, image: straightbrown, type: "Bone Straight", color: "Brown", length: "20\"" },
  { id: 16, name: "Burnt Orange Sleek", description: "Vibrant burnt orange straight", price: 200000, image: straightburnorange, type: "Bone Straight", color: "Burnt Orange", length: "14\"" },
  { id: 25, name: "Black Straight 10 inch", description: "Short sleek black", price: 50000, image: bobblack, type: "Bone Straight", color: "Black", length: "10\"" },
  { id: 26, name: "Black Straight 12 inch", description: "Medium sleek black", price: 60000, image: straight12, type: "Bone Straight", color: "Black", length: "12\"" },
  
  // Curly
  { id: 17, name: "Natural Curls", description: "Defined natural curl pattern", price: 250000, image:waterwave, type: "Curly", color: "Black", length: "14\"" },
  { id: 18, name: "Burgundy Curl Queen", description: "Gorgeous burgundy curls", price: 250000, image: Burgundycurly, type: "Curly", color: "Burgundy", length: "14\"" },
  { id: 19, name: "Burnt Orange Curls", description: "Bouncy burnt orange curls", price: 150000, image: currlyblond, type: "Curly", color: "Burnt Orange", length: "18\"" },
  { id: 20, name: "Brown Curly Magic", description: "Deep oxblood curly delight", price: 150000, image: currly, type: "Curly", color: "Oxblood", length: "12\"" },
  { id: 27, name: "Brown Curly 20 inch", description: "Long flowing brown curls", price: 250000, image: colocurly, type: "Curly", color: "Brown", length: "20\"" },
  { id: 28, name: "Color Curly 18 inch", description: "Voluminous Color curls", price: 120000, image: longcolorish, type: "Curly", color: "Black", length: "18\"" },

];