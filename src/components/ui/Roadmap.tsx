
const Roadmap = () => {
    const Roadmap = [
        { index: 1, title: "Start of mining/community building", done: true },
        { index: 2, title: "Introducing FB cards (Auction/Bidding competition)", done: true },
        { index: 3, title: "Community vote's on Roadmap", done: true },
        { index: 4, title: "NFT'S pools creation for participation" },
        { index: 5, title: "Community discussion on tokens cap" },
        { index: 6, title: "COF Protocol Blockchain" },
        { index: 7, title: "TGE (1st phase airdrop) / Continues mining for 2nd phase" },
        { index: 8, title: "Creation of reward pools (Holders rewards)" },
        { index: 9, title: "NFT'S minting/distribution" },
        { index: 10, title: "CD cards farming pools creation (Based on FB cards transaction counts)" },
        { index: 11, title: "Airdrop phase 2" },
        { index: 12, title: "CD cards competitive farming" },
        { index: 13, title: "Implementation and distribution of CD cards to the open Network" },
        { index: 14, title: "Hardware / Gaming integrations" }
    ];
    

    return (
        <div className='my-10'>
            <div className="">
                <p className='font-medium uppercase text-xs text-white/50'>achrivement & goals</p>
                <p className='font-medium uppercase text-2xl text-white'>COF Roadmap</p>
            </div>
            {/* <div className="grid grid-cols-12 gap-3">
                <div className="p-3 col-span-5 bg-green-400 rounded-xl h-20"></div>
                <div className="col-span-1 "></div>
                <div className="p-3 col-span-5 bg-green-400 rounded-xl h-20"></div>
            </div> */}
            {/* <ul className="steps steps-vertical text-start">
                {
                    Roadmap?.map((r, i) => (
                        <li className='step font-mono' key={i}>{r.title}</li>
                    ))
                }
            </ul> */}
            <div className="md:hidden w-full relative pl-3">
                <div className="h-full w-[2px] absolute left-0 top-0 from-transparent via-white to-transparent bg-gradient-to-b"></div>
                {
                    Roadmap.map((road, i) => (
                        <div className="flex items-center gap-1 my-3">
                            {
                                road.done ?
                                    <p>✓</p> :
                                    <p>-</p>
                            }
                            <div className="bg-green-500/20 size-8 rounded-full flex items-center justify-center text-white">{i + 1}</div>
                            <p>{road?.title}</p>
                        </div>
                    ))
                }
            </div>

            <div className="md:flex justify-baseline hidden">
                <div className="w-full relative pl-3 flex-[1]">
                    <div className="h-full w-[2px] absolute left-0 top-0 from-transparent via-white to-transparent bg-gradient-to-b"></div>
                    {
                        Roadmap.slice(0, 7).map((road, i) => (
                            <div key={i} className="flex items-center gap-1 my-3">
                                {
                                    road.done ?
                                        <p>✓</p> :
                                        <p>-</p>
                                }
                                <div className="bg-green-500/20 size-8 rounded-full flex items-center justify-center text-white">{road.index}</div>
                                <p className='font-mono text-sm uppercase'>{road?.title}</p>
                            </div>
                        ))
                    }
                </div>

                <div className=" w-full relative pr-3 flex-[1]">
                    <div className="h-full w-[2px] absolute right-0 top-0 from-transparent via-white to-transparent bg-gradient-to-b"></div>
                    {
                        Roadmap.slice(7, 14).map((road, i) => (
                            <div key={i} className="flex items-center justify-end gap-1 my-3">
                                <p className='font-mono text-sm uppercase text-end'>{road?.title}</p>
                                <div className="bg-green-500/20 size-8 rounded-full flex items-center justify-center text-white">{road.index}</div>
                                {
                                    road.done ?
                                        <p>✓</p> :
                                        <p>-</p>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Roadmap;