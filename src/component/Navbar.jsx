import logo from '../assets/TrollFace.png'




export default function Navbar(){
return (
<div className="navbar">
<img src={logo} alt="" />
    <h3 className='nav__name' >Meme Generator</h3>
    <h3 className='nav__project'>Project 3</h3>
</div>
  
)




}