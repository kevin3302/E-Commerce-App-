import { Injectable } from '@angular/core';
import { products } from './models/products.model';

@Injectable({
  providedIn: 'root'
})
export class WatchService {

  constructor() { }

  private watchesList : products[] = [

    {
      productTitle : 'P3C/09 "ORANGE CARBON"',
      productImage : "https://cdn.shopify.com/s/files/1/0423/3969/6794/products/pc3-1_660x660.png?v=1612520940",
      description : "The P3C/09’s massive 47mm case you have come to expect from us is made lighter and stronger thanks to Carbon Fiber! And that’s not all! It’s packed with fruity details that’ll boost your energy levels."
    },

    {
      productTitle : 'P3C/04 "RED CARBON"',
      productImage : "https://cdn.shopify.com/s/files/1/0423/3969/6794/products/SEVENFRIDAY_Watches_WebAssets_P3C04RedCarbon_Soldier_800px_800x800.png?v=1601470525",
      description : "The P3C/04 Red Carbon will set your heart racing and ignite a passion that will only be quenched by strapping this unique piece to your wrist! But it’s the strap that’ll get your blood pumping hard. "
    },

    {
      productTitle : "Q1/01",
      productImage : "https://cdn.shopify.com/s/files/1/0423/3969/6794/products/5dee6299d090e05989b6e9e6_1920x1920.png?v=1594130151",
      description : "The Q1/01 is an industrial essence tribute to the soundboards and audio equipment that produce music.The round stainless steel box with squared edges features black and gun metal colors."
    },

    {
      productTitle : 'T3/02 "RUNWAY 07"',
      productImage : "https://cdn.shopify.com/s/files/1/0423/3969/6794/products/T302_800x800.png?v=1594130149",
      description : "Stainless steel (316L) bezel Black PVD case Bezel grooved line refilled with black Berlac painting Finishing switching between polished, brushed and sandblasted Engraved 7F logo on the crown."
    },

    {
      productTitle : "M2B/01",
      productImage : "https://cdn.shopify.com/s/files/1/0423/3969/6794/products/5dee6511d090e05989b6ea85_1920x1920.png?v=1594130146",
      description : "M2B/01 watch, the latest addition to the wildly popular M-Series. The M-Series combines our love of industrial design and the drive for originality that we are known for at SEVENFRIDAY!"
    },

    {
      productTitle : 'Q2/03 "CHOO-CHOO"',
      productImage : "https://cdn.shopify.com/s/files/1/0423/3969/6794/products/5dee64b1d090e05989b6ea6b_367cb073-bcce-449e-a93a-71ff90fcdc50_1920x1920.png?v=1594130144",
      description : "The black, gray and copper colors found in a locomotive cockpit inspired the colors of the Q2/03. The moving minute hand recalls the manometers with every move of the locomotive."
    }
  ];

  getwatchdetails(){
    return this.watchesList;
  }


}
