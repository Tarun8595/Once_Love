import './index.css'

function WhenWork(){

    return(
        <>
            <div className="work-section">
                <div className="work-section-top"></div>
                <div className="work-container">
                    <div className="work-row1 work-row">
                        <img className='work-left-hand' src="left_hand.png" alt="left_hand" />
                        <div className="work-content1 work-content">
                            <h1 className="work-heading">Love is work when</h1>
                            <p className='work-points'>You show up even when you're tired.</p>
                            <p className='work-points'>You fight for the relationship instead of fighting each other.</p>
                            <p className='work-points'>You stay kind during misunderstandings.</p>
                            <p className='work-points'>You grow individually so the relationship can grow too.</p>
                        </div>
                    </div>
                    <img className='work_mid_img' src="single-flower.png" alt="flower" />
                    <div className="work-row2 work-row">
                        <div className="work-content2 work-content">
                            <h1 className='work-heading'>Work in love looks like</h1>
                            <p className='work-points'>Learning your partner’s fears and handling them gently.</p>
                            <p className='work-points'>Supporting dreams that don’t always include you at the center.</p>
                            <p className='work-points'>Being honest about your needs instead of expecting mind-reading.</p>
                            <p className='work-points'>Choosing loyalty in moments when temptation whispers otherwise.</p>

                        </div>
                        <img className='work-right-hand' src="right_hand.png" alt="right_hand" />
                    </div>
                </div>
                <div className="work-section-bottom">
                    <img src="mobile_flower.png" alt="flowers" className='work-bottom-flower1 work-bottom-flower' />
                    <img src="mobile_flower.png" alt="flowers2" className='work-bottom-flower2 work-bottom-flower' />
                </div>
            </div>
        </>
    );
}
export default WhenWork