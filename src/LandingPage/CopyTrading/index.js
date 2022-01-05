import Button from '../../Components/atoms/Button'

const CopyTrading = () => {
    return (
        <>
            <h1 className="ExtraBold t-shadow" >Copy Trading</h1>
            <p className='t-shadow'>BY NEWSCRYPTO</p>
            <p className="pt-4 pb-1 HalfScreen">A 100% hands-off approach to trading! </p>
            <p className="pb-3 pt-1 HalfScreen">Become a part of the fastest growing trading community and discuss trading strategies with the pros, while making the same trades – and profits – as they do!</p>
            <div className="py-4 HalfScreen t-shadow">
                <div className="full hoverBig">
                    <Button value="CREATE A TRADERS ACCOUNT" Link="/Register" />
                </div>
                <div className="pt-3 full hoverBig">
                    <Button value="CREATE A USERS ACCOUNT" Link="/Register" />
                </div>
            </div>
        </>
    );
}

export default CopyTrading;