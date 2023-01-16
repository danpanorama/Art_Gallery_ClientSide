import React,{ useState ,useEffect} from 'react';
import '../../css/home.css'
import Popup from '../../components/popup/Popup';
import AOS from "aos";
import "aos/dist/aos.css";
import LazyLoad from 'react-lazyload';



function Gallerystate(props) {

const [imgstate, setimagestate] = useState({url:'',name:"",size:""})
const [poupstate, setpopupstate] = useState(false)

const [pointer, setpointer] = useState(0)


useEffect(() => {
  
  AOS.init({
    duration : 1000
  });
}, []);

function getimg(e){

  let urlimage = e.target.id.split("psik_")
  if(poupstate){
    setpopupstate(false)

  }else{
    setpopupstate(true)
     setpointer(e.target.title)
    setimagestate({url:urlimage[0],name:urlimage[1],size:urlimage[2]})
   


  }

}

function getnext(e){

  let num = e.target.id;

  if(num >= props.imgarr.data.length - 1){
 
    return
  }
  let immg = props.imgarr.data[++num].path.split('upload')
        let url = 'https://morcmario.com/upload'+immg[1]
        setimagestate({url:url,name:props.imgarr.data[num].name,size:props.imgarr.data[num].size})
        let math = JSON.parse(pointer)
        let sum = math + 1
        setpointer(sum)
        
        


}
function getback(e){
  
  let num2 = e.target.title;

  if(num2 == 0){
    return
  }

  let imgback = props.imgarr.data[--num2].path.split('upload')
  let url = 'https://morcmario.com/upload'+imgback[1]
  setimagestate({url:url,name:props.imgarr.data[num2].name,size:props.imgarr.data[num2].size})
  let math2 = JSON.parse(pointer)
  let sum2 = math2 - 1
  setpointer(sum2)

}





  return (
    <div>

<div className="allgallery">
  <br /><br /><br /><br /><br />
  <h3 className='headergal cw'>Gallery / {props.header =='water' ? 'watercolor' : props.header == 'oil' ? 'oil paint': props.header == 'draw'? 'drawing' : ''}</h3>   
  <br /><br />
  <div className="centergallery">
    <div  className="grid">
      {props.imgarr.data ?props.imgarr.data.map((e,i)=>{
        
        let immg = e.path.split('upload')
        let url = 'https://morcmario.com/upload'+immg[1]
       
       
        return(
          <div  data-aos="fade-up" data-aos-delay={i+"00"}   key={e.number} className="image_box">
         
            <LazyLoad className="image" height={200} offset={100}>
              <img  onClick={getimg} id={url + "psik_" + e.name + "psik_" + e.size}  title={i} className='img ' src={'https://morcmario.com/upload' + immg[1] } alt="" />
            </LazyLoad>
          
        
          </div>
          
        )
       
        

      }) : ""}

      <br /><br /><br />
    </div>
  </div>
  
</div>

<div className={poupstate? "activpopup":'disablepopup'}>
<Popup getnext={getnext} getback={getback} pointer={pointer} getimg={getimg} imgstate={imgstate} />

</div>


    </div>
  );
}


export default Gallerystate;
