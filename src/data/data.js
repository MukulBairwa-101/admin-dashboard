// icons
import { FaUser, FaEye, FaEyeSlash, FaUsers } from "react-icons/fa";
import { MdFingerprint, MdDelete ,MdPreview} from "react-icons/md";
import { RiDashboardFill, RiProductHuntFill } from "react-icons/ri";
import {
  IoIosSettings,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { BiNotification } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import { TbEdit } from "react-icons/tb";

// sidebar links

const links = [
  {
    id: 1,
    link: "DashBoard",
    path: "/admin/dashboard",
    icon: RiDashboardFill,
  },
  {
    id: 2,
    link: "Users",
    path: "/admin/users",
    icon: FaUsers,
  },
  {
    id: 3,
    link: "Products",
    path: "/admin/products",
    icon: RiProductHuntFill,
  },
  {
    id: 4,
    link: "Settings",
    path: "/admin/settings",
    icon: IoIosSettings,
  },
];

const themePallete = [
  {
    id: "Users",
    theme: "violet",
    cardClass: `over-view-card-themed-violet`,
    btnClass: `btn-themed-violet`,
    icon: <FaUsers />,
    themePath: "/admin/users",
    btnText: "User",
  },
  {
    id: "Products",
    theme: "teal",
    cardClass: `over-view-card-themed-teal`,
    btnClass: `btn-themed-teal`,
    icon: <RiProductHuntFill />,
    themePath: "/admin/products",
    btnText: "Product",
  },
];

export {
  FaUser,
  FaEye,
  FaEyeSlash,
  MdFingerprint,
  IoIosArrowBack,
  IoIosArrowForward,
  BiNotification,
  CgSearch,
  MdDelete,
  TbEdit,
  MdPreview
};

export { links };
export { themePallete };
