import fb from "../../assets/Facebook.svg"
import insta from "../../assets/Instagram.svg"
import tw from "../../assets/Twitter.png"
import linkedin from "../../assets/Linked-In.png"
import clock from "../../assets/Clock.svg"
import konum from "../../assets/konum.svg"



function Topbar() {
    return (
        <div>
            <div className='topbar flex w-full h-[58px] bg-[#181818] items-center justify-around'>
                <div className='flex items-center gap-2'>
                    <img className='size-4' src={clock} />
                    <p>Monday-Friday8AM-9PM</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='size-4' src={konum} />
                    <p>725 Park Ave, New York</p>
                </div>
                <div className='flex gap-7'>
                    <button>
                        <img className='size-4' src={insta} />
                    </button>
                    <button>
                        <img className='size-4' src={fb} />
                    </button>
                    <button>
                        <img className='size-4' src={tw} />
                    </button>
                    <button>
                        <img className='size-4' src={linkedin} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Topbar
