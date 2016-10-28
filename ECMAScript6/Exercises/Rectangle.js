/**
 * Created by MOmoDi on 27.10.2016 г..
 */
class Rectangle{
    constructor(width, height, color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    calcArea(){
        return this.width*this.height;
    }
}