import React,{ useState } from 'react';

function Loaader(props) {


  return (
<div className={props.loader?"activeloader":'disableloader'}>
<div className='loader'>
        <div className="massagediv">
            <p>please wait</p>
        </div>

    </div>
</div>
  );
}

export default Loaader;
