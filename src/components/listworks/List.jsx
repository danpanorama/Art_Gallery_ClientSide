import React,{ useState } from 'react';


function List(props) {


  return (
    <div className='flexcol overfloscroll'>
        {
            
            props.data ? props.data.map((e)=>{
                let immg = e.path.split('upload')
                
                let url = 'https://localhost:3040/upload' + immg[1]
                return(
                   <div className="w50 " key={e.number}>
                        <div className="flexcol">
                        <div className="btn">
                                <button onClick={props.deletework} id={e.path} title={e.number} >delet</button>
                                </div>
                            <div className="namek">
                                {e.name}
                            </div>
                            <div className="imghit">
                            
                                <img className='img' src={'https://morcmario.com/upload' + immg[1]} alt="" />
                            </div>
                            
                        </div>
                   </div>
                )

            })
        :""}
    </div>
  );
}

export default List;
