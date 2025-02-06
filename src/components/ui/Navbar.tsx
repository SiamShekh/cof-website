import cof from "../../assets/COF LOGO.png";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center w-full py-5 h-20 fixed top-0 z-50 left-[50%] -translate-x-[50%] max-w-[1200px] backdrop-blur-md bg-black/10">
            <div className="flex items-center gap-3">
                <img src={cof} alt="cof" className="h-10" />
                <p className="text-xl text-yellow-100 font-medium">COF Miners</p>
            </div>

            <div className="md:flex items-center gap-3 hidden">
                <div className="flex items-center gap-4">
                    <a href={'/#home'} className="">Home</a>
                    <a href={'/#about'} className="">About</a>
                    <a href={'/#contact'} className="">Contact</a>
                    <a href={'#feature'} className="">Features</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;