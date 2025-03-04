import tokenamics from "../../assets/tokenamics.webp";

const Tokenamics = () => {
    return (
        <div className="my-5 flex justify-between gap-4">
            <img src={tokenamics} draggable={false} alt="token" />
            <div className="hidden md:block">
                <h2 className="text-2xl font-bold text-white mb-4">Tokenomics</h2>
                <p className="text-white mb-4">Understand how we are moving forward and making decisions.</p>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-700">Total Supply: <span className="text-blue-600">100,000,000 $COF</span></p>
                    <ul className="mt-3 space-y-2">
                        <li className="flex justify-between">
                            <span className="text-gray-700">Contributors</span>
                            <span className="font-semibold">5%</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="text-gray-700">Partners</span>
                            <span className="font-semibold">10%</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="text-gray-700">CD Cards Support</span>
                            <span className="font-semibold">10%</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="text-gray-700">Ecosystem & Maintenance</span>
                            <span className="font-semibold">15%</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="text-gray-700">Investors</span>
                            <span className="font-semibold">20%</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="text-gray-700">Airdrop</span>
                            <span className="font-semibold text-green-600">40%</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Tokenamics;