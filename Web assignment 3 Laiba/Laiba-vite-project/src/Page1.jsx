import Navbar from './Components/navbar';
import Hero from './Components/heroSec';
import Items from './Components/items';
import Table from './Components/table';
import Computer from './Components/HotDeals';
import EmailSec from './Components/EmailSec';
import Footer from './Components/footer';

function Page1() {
  return(
  <div>
    <Navbar/>
    <Hero/>
    <Items/>
    <Table/>
    <Computer/>
    <EmailSec/>
     <Footer/>
  </div>
  );
}

export default Page1;
