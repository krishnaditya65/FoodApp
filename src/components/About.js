import AboutImage from "../assets/images/about-image.png";

export const About = ()=>{
    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                    Food delivery at your doorstep
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src = {AboutImage} alt = "about" className="w-[400px] h-[400px] object-cover"/>
                </div>
            </div>
        </div>
    )
}