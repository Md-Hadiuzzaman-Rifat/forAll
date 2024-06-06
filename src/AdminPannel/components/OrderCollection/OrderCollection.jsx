import "./OrderCollection.scss"
import OrderTable from '../../pages/OrderTable/OrderTable';
import AdminLayout from "../../AdminLayout/AdminLayout";

const MainContent = () => {
    return (
        <AdminLayout>
        <div className='mainContent'>
            <h2>Order Page:</h2>
            <OrderTable></OrderTable>
        </div>
        </AdminLayout>
    );
};
export default MainContent;