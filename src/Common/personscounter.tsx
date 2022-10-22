import persons from  '../Assets/Images/icon.svg'
function PersonCounter(props:any) {
    const {numberofpersons}=props
    return ( 
        <span className='text-slate-500 flex items-center'>
              {numberofpersons}
              <img src={persons} alt="persons" className='ml-2 mr-2'/>
        </span>
     );
}

export default PersonCounter;