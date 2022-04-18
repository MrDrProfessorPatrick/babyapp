import img from '../assets/placeholderPhoto.PNG';
import inst1 from '../assets/inst1.jpg';
import inst2 from '../assets/inst2.jpg';
import inst3 from '../assets/inst3.jpg';
import inst4 from '../assets/inst4.jpg';
import inst5 from '../assets/inst5.jpg';
import inst6 from '../assets/inst6.jpg';

const mockGood = {
  img: img,
  name: 'the neame of the item',
  price: 9.99,
  description: 'detailed description of the item',
};

export let goods = Array(16).fill(mockGood);
export let instPhotos = [inst1, inst2, inst3, inst4, inst5, inst6];
