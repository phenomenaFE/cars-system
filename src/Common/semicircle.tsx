function SemiCircle(props:any) {
    const {percent}=props
    return ( 
        <div className="sc-gauge">
        <div className="sc-background">
          <div
            className="sc-percentage"
            style={{ transform: `rotate(${(percent / 100) * 180}deg)` }}
          ></div>
          <div className="sc-mask"></div>
          <span className="sc-value font-bold">{percent}%</span>
        </div>
       
      </div>
     );
}

export default SemiCircle;