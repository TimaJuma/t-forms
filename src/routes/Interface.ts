// import all Componenents/pages used in Side navbar

import Step1 from "../pages/forms/steps/Step1";
import Step2 from "../pages/forms/steps/Step2";
import "../../styles/navigationSidebar.scss";
import LastPageIcon from "@material-ui/icons/LastPage";

/* SideBarItems items in JSON format */
const SideBarItems = [
  {
    label: "Step 1",
    image: LastPageIcon,
    content: Step1,
    to: "/step1",
    exact: true,
    module: "asset_request",
  },
  { separator: true },
  {
    label: "Step 1",
    image: LastPageIcon,
    content: Step2,
    to: "/step2",
    exact: true,
    module: "asset_transfers",
    badgeKey: "transfers",
  },
  { separator: true },
];

export default SideBarItems;
