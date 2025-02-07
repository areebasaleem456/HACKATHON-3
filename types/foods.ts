export interface Food {
    _id:string;
    name:string;
    _type:"food";
    image?:{
        asset:{
            _ref:string;
            _type:"image"
        }
    };
    
    description:string;
    originalPrice:number;
    discountPrice:number;
    slug:{
        _type:"slug"
        current:string;
     };
   available:boolean

}