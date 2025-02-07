export interface Chef{
    _type:"chef";
    name:string;
    position:string;
    experience:string;
    description:string;
    image?:{
        asset:{
            _ref:string;
            _type:"image"
        }
    };
    slug:{
        _type:"slug"
        current:string;
    }
}