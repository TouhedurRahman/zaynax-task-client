import { Link } from "react-router-dom";
import usePromoCodes from "../../../hooks/usePromoCodes";
import PromoCode from "../PromoCode/PromoCode";

const PromoCodes = () => {
    const [promocodes] = usePromoCodes();

    return (
        <div>
            <div>
                <Link to="/admindashboard/addpromocodes" className="btn btn-warning">Add New Promo</Link>
            </div>
            <div className="mt-5">
                {
                    promocodes.map((promocode, idx) => <PromoCode
                        key={promocode._id}
                        idx={idx}
                        promocode={promocode}
                    ></PromoCode>)
                }
            </div>
        </div>
    );
};

export default PromoCodes;