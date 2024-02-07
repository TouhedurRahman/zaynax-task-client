const PromoCode = ({ idx, promocode }) => {
    const { promoCode, startDate, endDate, discountRate, usageTime, active, createdAt } = promocode;

    const date = new Date(createdAt);
    const formattedDate = date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    const formattedString = `${formattedDate}, ${date.toLocaleDateString()}`;

    return (
        <div className="mb-5 bg-white rounded-lg shadow-lg px-3">
            <div className="flex justify-between items-center border-0 border-b-2 py-3">
                <div className="flex items-center">
                    <p className="w-[50px]">{idx + 1}</p>
                    <p>{promoCode}</p>
                </div>
                <div className="flex items-center">
                    <button className="btn btn-warning rounded-lg mr-5">Edit</button>
                    {
                        active
                            ?
                            <button className="btn bg-yellow-200 text-yellow-800 rounded-lg w-[100px]">Active</button>
                            :
                            <button className="btn bg-red-200 text-red-800 rounded-lg w-[100px]">Deactive</button>
                    }
                </div>
            </div>
            <div className="flex justify-between items-center py-3">
                <p>Created at: {formattedString}</p>
                <p>Usages: {usageTime}</p>
                <p>Discount Rate: {discountRate}%</p>
                <p>Start Date: {startDate}</p>
                <p>End date: {endDate}</p>
            </div>
        </div>
    );
};

export default PromoCode;