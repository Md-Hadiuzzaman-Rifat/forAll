import "./Control.scss";
import ControlForm from "../../components/ControlForm/ControlForm";
import ControlTable from "../../components/ControlTable/ControlTable";
import AdminLayout from "../../AdminLayout/AdminLayout";

const Control = () => {
  return (
    <AdminLayout>
    <div className="Control">
        <h1>Admin Controller</h1>
      <div className="container">
        <ControlForm></ControlForm>
        <ControlTable></ControlTable>
      </div>
    </div>
    </AdminLayout>
  );
};

export default Control;
