import React from 'react'
import  NIK_LOGO  from '../../images/logonike.jpg'
import GUI_LOGO  from '../../images/logogucci.jpg'
import  ELL_LOGO  from '../../images/logoell.png'
import BAL_LOGO   from '../../images/logobal.jpg'
import HUB_LOGO from '../../images/logohublo.png'
import ADI_LOGO from '../../images/logoad.png'
import NF_LOGO from '../../images/logonf.png'
import TH_LOGO from '../../images/logoth.jpg'
import PAL_LOGO from '../../images/logopal.png'
import DM_LOGO from '../../images/dm.png'
import PM_LOGO from '../../images/pm.jpg'
import ER_LOGO from '../../images/er.png'
import S_LOGO from '../../images/555.png'

import RE_LOGO from '../../images/re.png'
import M_LOGO from '../../images/m.png'
import H_LOGO from '../../images/h.png'
import L_LOGO from '../../images/l.jpg'






function Brands() {
  return (

    <div className=''>
        <div className='container'> 
        <div className='row-12 text-center' style={{ backgroundColor: "" ,padding:'40px',paddingLeft:'' }}>

   <a   href='nike'> <img  class="col-md-4 col-sm-4 col-4"  style={{ backgroundColor: "" ,padding:'5px', border:'solid 1px white  ',width:'42px',height:'42px'}} src={NIK_LOGO}></img></a> 
 <a  href='gucci' ><img class="col-md-4 col-sm-4 col-4"  style={{ backgroundColor: "" ,padding:'5px', border:'solid 1px white ',width:'42px',height:'42px'}} src={GUI_LOGO}></img></a>
<a href='ellesse'><img  class="col-md-4 col-sm-4 col-4" style={{ backgroundColor: "" ,padding:'5px', border:'solid 1px white ',width:'42px',height:'42px'}} src={ELL_LOGO}></img></a>
<a href='Balenciaga'><img  class="col-md-4 col-sm-4 col-4" style={{ backgroundColor: "" ,padding:'5px', border:'solid 1px white ',width:'42px',height:'42px'}} src={BAL_LOGO}></img></a>
<a href='hublot'><img class="col-md-4 col-sm-4 col-4"  style={{ backgroundColor: "" ,padding:'5px', border:'solid 1px white ',width:'42px',height:'42px'}} src={HUB_LOGO}></img></a>
<a  href='palace'><img class="col-md-4 col-sm-4 col-4"  style={{ backgroundColor: "" ,padding:'5px', border:'solid 1px white ',width:'42px',height:'42px'}} src={PAL_LOGO}></img></a>
<a  href='th'><img class="col-md-4 col-sm-4 col-4"  style={{ backgroundColor: "" ,padding:'5px', border:'solid 1px white ',width:'42px',height:'42px'}} src={TH_LOGO}></img></a>
<a   href='adidas'><img class="col-md-4 col-sm-4 col-4"  style={{ backgroundColor: "" ,padding:'5px', border:'solid 1px white ',width:'42px',height:'42px'}} src={ADI_LOGO}></img></a>

{/* <a href='under'><img   class="col-md-4 col-sm-4 col-4"  style={{ backgroundColor: "" ,padding:'5px', border:'solid 1px white  ',width:'42px',height:'40px',marginTop:'10px'}} src={H_LOGO}></img></a> */}
<a  href='metalica'><img  class="col-md-4 col-sm-4 col-4"  style={{ backgroundColor: "" ,padding:'5px', border:'solid 1px white ',width:'42px',height:'42px'}} src={M_LOGO}></img></a>
{/* <a  href='th'><img   class="col-md-4 col-sm-4 col-4" style={{ backgroundColor: "" ,padding:'5px', border:'solid 1px white ',width:'42px',height:'42px'}}  src={L_LOGO}></img></a> */}
<a  href='drm'><img   class="col-md-4 col-sm-4 col-4" style={{ backgroundColor: "" ,padding:'5px', border:'solid 1px white ',width:'42px',height:'42px'}} src={DM_LOGO}></img></a>
<a   href='keppa'><img class="col-md-4 col-sm-4 col-4"  style={{ backgroundColor: "" ,padding:'5px', border:'solid 1px white ',width:'42px',height:'42px'}} src={ER_LOGO}></img></a>
<a  href='puma'><img   class="col-md-4 col-sm-4 col-4"  style={{ backgroundColor: "" ,padding:'5px', border:'solid 1px white ',width:'42px',height:'42px'}} src={PM_LOGO}></img></a>
<a  href='reebok'><img   class="col-md-4 col-sm-4 col-4"  style={{ backgroundColor: "" ,padding:'5px', border:'solid 1px white ',width:'42px',height:'42px'}} src={RE_LOGO}></img></a>
<a  href='converse'><img    class="col-md-4 col-sm-4 col-4"  style={{ backgroundColor: "" ,padding:'5px', border:'solid 1px white ',width:'42px',height:'42px'}}  src={S_LOGO}></img></a>

 </div>

        
        </div></div>
  )
}

export default Brands
