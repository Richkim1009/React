import backGround from '../img/a-irport.jpg';
export default function Airport() {

    return (
        <div className="sub-sqaure" style={{backgroundImage: `url(${backGround})`}}>
            <div className="sub-circle">
                <div>
                    <span className="sub-circle-word">
                        CORPORATE SOCIAL RESPONSIBILITY
                        <div className="border-line"></div>
                        <div style={{ marginTop: 20, fontSize: 15, lineHeight: 2 }}>                      
                            GAJA believes the significance of technological transformation is to benefit broader communities, 
                            and to create higher value for society by enabling collaboration with stakeholders.
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );

}
