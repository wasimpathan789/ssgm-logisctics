import "./footer.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">SSGM logistics is a complete logistics and supply chain service provider. ssgm is one of the largest and fastest growing service providers in the integrated cold chain logistics solution space.</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Address</h4>
  	 			<ul>
  	 				<li><a href="#">Office No. 06,Ground floor,
              Kamalraj Shivdarshan,
              Near Mutthut Finance,Sambhaji Raje Chowk,
              Dighi Pune 411015. </a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Email Address</h4>
  	 			<ul>
  	 				<li><a href="#">bandu.tathe@ssgmlogistics.com</a></li>
  	 				<li><a href="#">contact@ssgmlogistics.com</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
				   
  	 				<a href="#"><LinkedInIcon style={{fontSize: "40px"}}/></a>
  	 				<a href="#"><FacebookIcon style={{fontSize: "40px"}}/></a>
  	 				<a href="#"><InstagramIcon style={{fontSize: "40px"}}/></a>
  	 				<a href="#"><TwitterIcon style={{fontSize: "40px"}}/></a>

  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  )
}

export default Footer
