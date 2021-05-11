import { Component, OnInit } from '@angular/core';
import { products } from '../models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{

  productsArray : products[]= [

    {
      productTitle:"Galaxy M51",
      productImage:"https://images.samsung.com/is/image/samsung/in-galaxy-m51-m515fz-8gb-sm-m515fzbeins--304622793?$684_547_PNG$",
      description:"Quad camera setup - 64MP (F1.8) main camera + 12MP (F2.2) ultra wide camera + 5MP (F2.4) depth camera + 5MP (F2.4) macro camera"
    },

    {
      productTitle:"Galaxy M31",
      productImage:"https://images.samsung.com/is/image/samsung/in-galaxy-m31-m315f-8gb-sm-m315fzbhins-frontblue-249409193?$684_547_PNG$",
      description:"Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera"
    },

    {
      productTitle:"Galaxy F41",
      productImage:"https://images.samsung.com/is/image/samsung/in-galaxy-f41-f415fz-6gb-sm-f415fzbgins-sm-f---fzbdins-314816801?$684_547_PNG$",
      description:"16.21cm (6.4\") Super AMOLED Infinity U Display 64MP Versatile Triple Camera - 64MP (Main) + 8MP (UW) + 5MP (Depth) Long Lasting Battery"
    },

    {
      productTitle:"Galaxy A51",
      productImage:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-a515fmshins/gallery/in-galaxy-a51-a515fz-8gb-sm-a515fmshins-416286223?$684_547_PNG$",
      description:"48MP (F1.8)+12MP (F2.2)+5MP(F2.2)+5MP(F2.4) rear camera | 32MP front facing camera 4000mAH lithium-ion battery"
    },

    {
      productTitle:"Galaxy A71",
      productImage:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-a715fmswins/gallery/in-galaxy-a71-a715fz-8gb-sm-a715fmswins-416286328?$684_547_PNG$",
      description:"48MP (F1.8)+12MP (F2.2)+8MP(F2.2)+5MP(F2.4) rear camera | 64MP front facing camera 6000mAH lithium-ion battery"
    },

    {
      productTitle:"Galaxy M21",
      productImage:"https://images.samsung.com/is/image/samsung/in-galaxy-m21-m215f-4gb-sm-m215fzbdins-frontblue-221755107?$684_547_PNG$",
      description:"Triple Camera Setup - 48MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera and 20MP (F2.2) front facing Camera"
    }

  ];
 

}
