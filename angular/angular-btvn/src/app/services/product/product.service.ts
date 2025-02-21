import { Injectable } from '@angular/core';
import {Product} from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProductById(id: number): Product {
    console.log(id)
    return this.products.find(product => product.id == id) || {} as Product
  }

  products:Product[]  = [
    {
      id: 1,
      description: '1 Miếng Gà Giòn+ 1 Mỳ Ý Sốt Bò Bằm (vừa)+ 1 Khoai Tây Chiên Giòn (vừa)+ 1 Ly Pepsi (vừa)+ 1 Kem Vanilla',
      name: 'Cùng Bee Mix & Match 2',
      price: "79.000",
      image: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/h/i/hinh_combo-03.png'
    },
    {
      id : 2,
      description: '2 Miếng Gà Giòn + 1 Khoai Tây Chiên Giòn (vừa) + 1 Ly Pepsi (vừa) + 1 Kem Vanilla',
      name: 'Cùng Bee Mix & Match 4',
      price: "79.000",
      image: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/h/i/hinh_combo-03.png'
    },
    {
      id: 3,
      description: '1 Gà Giòn Vui Vẻ + 1 Mì Ý Jolly + 1 Nước ngọt',
      name: 'Cùng Bee Mix & Match 1',
      price: "79.000",
      image: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/h/i/hinh_combo-01.png'
    },
    {
      id: 4,
      name: 'Cùng Bee Mix & Match 3',
      description: '2 Gà Giòn Vui Vẻ + 2 Mì Ý Jolly vừa + 1 Khoai tây chiên vừa + 2 Nước ngọt vừa',
      price: "79.000",
      image: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/h/i/hinh_combo-04.png'
    },
    {
      id: 5,
      description: '3 Gà giòn vui vẻ + 2 Mì Ý Jolly vừa + 1 Khoai tây chiên vừa + 3 Nước ngọt vừa',
      name: 'Combo Một Mình Ăn Ngon',
      price: "79.000",
      image: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/m/_/m_n_ngon_ph_i_th_-_1.png'
    },
    {
      id: 6,
      description: '1 Gà Giòn Vui Vẻ + 1 Mì Ý Jolly + 1 Nước ngọt',
      name: 'Cặp đôi ăn ý',
      price: "185.000",
      image: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/m/_/m_n_ngon_ph_i_th_-_2_2__1.png'
    },
    {
      id: 7,
      name: 'Combo Cả Nhà No Nê',
      description: '3 Gà giòn vui vẻ + 2 Mì Ý Jolly vừa + 1 Khoai tây chiên vừa + 3 Nước ngọt vừa',
      price: "185.000",
      image: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/m/_/m_n_ngon_ph_i_th_-_3.png'
    },
    {
      id: 8,
      description: '2 Gà Giòn Vui Vẻ + 2 Mì Ý Jolly vừa + 2 Cơm Gà Giòn Vui Vẻ + 2 Khoai tây chiên vừa + 2 Bánh Xoài Đào + 4 Nước ngọt vừa',
      name: 'Combo Bạn Bè Tụ Tập',
      price: "322.000",
      image: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/m/_/m_n_ngon_ph_i_th_-_4_2.png'
    },
  ]
  products2:Product[]  = [
    {
      id: 1,
      description: '1 Miếng Gà Giòn+ 1 Mỳ Ý Sốt Bò Bằm (vừa)+ 1 Khoai Tây Chiên Giòn (vừa)+ 1 Ly Pepsi (vừa)+ 1 Kem Vanilla',
      name: 'Cùng Bee Mix & Match 2',
      price: "79.000",
      image: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/h/i/hinh_combo-03.png'
    },
    {
      id : 2,
      description: '2 Miếng Gà Giòn + 1 Khoai Tây Chiên Giòn (vừa) + 1 Ly Pepsi (vừa) + 1 Kem Vanilla',
      name: 'Cùng Bee Mix & Match 4',
      price: "79.000",
      image: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/h/i/hinh_combo-03.png'
    },
    {
      id: 3,
      description: '1 Gà Giòn Vui Vẻ + 1 Mì Ý Jolly + 1 Nước ngọt',
      name: 'Cùng Bee Mix & Match 1',
      price: "79.000",
      image: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/h/i/hinh_combo-01.png'
    },
    {
      id: 4,
      name: 'Cùng Bee Mix & Match 3',
      description: '2 Gà Giòn Vui Vẻ + 2 Mì Ý Jolly vừa + 1 Khoai tây chiên vừa + 2 Nước ngọt vừa',
      price: "79.000",
      image: 'https://jollibee.com.vn/media/catalog/product/cache/9011257231b13517d19d9bae81fd87cc/h/i/h'
},
]}
