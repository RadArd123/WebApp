import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


function Footer(){
    return (
        <footer className= " bg-transparent  flex flex-col md:flex-row justify-between  p-16 sticky" >
                <div className='flex flex-col justify-center text-white w-96'>
                    <a className="text-xl mb-2"href="" target="_blank"><b>Contact</b></a>
                    <p><strong>Adresa: </strong>Str......, ex , ex, 000</p>
                    <p><strong>Email: </strong>example2@gmail.com</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 text-white  w-96'>
                    <a className="text-xl mb-1"href=""><b>Despre noi</b></a>
                    <p>Urmăriți-ne pe platformele de socializare.</p>
                    <div className="flex gap-5 text-2xl ">
                    <a href="" target="_blank"><FaInstagram className="icon1"/></a>
                    <a href="" target="_blank"><FaFacebook className="icon2"/></a>
                    </div>
                   
                </div>
                <div className='text-white  flex justify-center items-center w-96'>
                    <p>&copy; {new Date().getFullYear()} RaduArdelean</p>
                </div>
        </footer>
    );
}
export default Footer