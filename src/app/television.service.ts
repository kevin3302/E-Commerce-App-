import { Injectable } from '@angular/core';
import { products } from './models/products.model';

@Injectable({
  providedIn: 'root'
})
export class TelevisionService {

  constructor() { }

  private televisionList : products[] = [

    {
      productTitle: 'Samsung Crystal Ultra HD Smart LED TV',
      productImage: "https://images.samsung.com/is/image/samsung/in-qledtv-q900r-qa82q900rbkxxl-frontblack-164068878?$684_547_PNG$",
      description: " It’s super high resolution 4 times higher than 4K UHD and 16 times higher than FHD. With more than 33 million pixels, Samsung Smart LED gives you an amazing pixel-less viewing experience. It's real 8K resolution.You can enjoy content 8K resolution."
    },
  
  
    {
      productTitle: '2m 16cm (85") Q70A QLED 4K Smart TV',
      productImage: "https://images.samsung.com/is/image/samsung/p6pim/in/qa85qn900akxxl/gallery/in-neo-qled-8k-qn900a-qa85qn900akxxl-426823787?$684_547_PNG$",
      description: "The powerful evolution of Neo QLED 4K comes with a backlight dimming technology that precision controls our Quantum Mini LEDs. Witness darkest black to the purest white with x1.5 more lighting zones than normal Quantum Matrix Technology."
    },
  
    {
      productTitle: 'Samsung QLED 8K Q900R',
      productImage: "https://images.samsung.com/is/image/samsung/p6pim/in/qa85q70aakxxl/gallery/in-qled-q70a-384002-qa85q70aakxxl-427627181?$684_547_PNG$",
      description: "Samsung QLED 8K Q900R takes you into a nearly infinite depth of realism, like you’re walking through each scene as you experience so precise you can almost touch their presence.A whole new dimension of picture quality with super high resolution."
    },
  
    {
      productTitle: '1m 89cm (75") Q80R 4K Smart QLED',
      productImage: "https://images.samsung.com/is/image/samsung/in-qledtv-q80r-qa75q80rakxxl-185768499?$684_547_PNG$",
      description: "Experience the real scene. QLED’s Direct Full Array 8X finely controls the backlight to create impeccable contrasts and optimal light. Brace yourself for expanded depth and see objects like never before.It’s time to light up your living room."
    },
  
    {
      productTitle: '2m 07cm (82") Q900R 8K Smart QLED',
      productImage: "https://images.samsung.com/is/image/samsung/in-qledtv-q900r-qa82q900rbkxxl-frontblack-164068878?$684_547_PNG$",
      description: "Samsung QLED 8K Q900R takes you into a nearly infinite depth of realism, like you’re walking through each scene as you can almost experience their touch presence. It’s a whole new dimension of picture quality with super high resolution."
    },
  
    {
      productTitle: 'AUE60 Crystal 4K UHD Smart TV',
      productImage: "https://images.samsung.com/is/image/samsung/p6pim/in/ua55aue60aklxl/gallery/in-uhd-4k-tv-ua55aue60aklxl-front--gray-436230152?$684_547_PNG$",
      description: "4K UHD TV goes beyond regular FHD with 4x more pixels, offering your eyes the sharp images. You can see even the small details in the scene.Experience clear picture and performance because it compensates frames for the source of contents."
    },
   ]

   gettvdetails():products[]{
     return this.televisionList;
   }

}
