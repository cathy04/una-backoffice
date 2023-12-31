/*!

=========================================================
* * NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CompareIcon from '@material-ui/icons/Compare';
import PostAddIcon from '@material-ui/icons/PostAdd';
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,

    layout: "/admin",
  },
  {
    path: "/slide",
    name: "Slide",
    rtlName: "",
    icon: CompareIcon,

    layout: "/admin",
  },
  {
    path: "/flash",
    name: "Flash",
    rtlName: "",
    icon: Notifications,

    layout: "/admin",
  },
  {
    path: "/mot-recteur",
    name: "Mot du Recteur",
    rtlName: "",
    icon: LibraryBooks,

    layout: "/admin",
  },
  {
    path: "/programme-formation",
    name: "Formation",
    rtlName: "",
    icon: BusinessCenter,

    layout: "/admin",
  },
  {
    path: "/date",
    name: "Date",
    rtlName: "",
    icon: CalendarTodayIcon,

    layout: "/admin",
  },
  {
    path: "/institut",
    name: "Institut",
    rtlName: "",
    icon: AccountBalanceIcon,

    layout: "/admin",
  },
  {
    path: "/vie-estudiantine",
    name: "Vie Estudiantine",
    rtlName: "",
    icon: BubbleChart,

    layout: "/admin",
  },
  {
    path: "/posts",
    name: "Posts",
    rtlName: "",
    icon: PostAddIcon,

    layout: "/admin",
  },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: Person,

  //   layout: "/admin",
  // },
  // {
  //   path: "/table-list",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "content_paste",

  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: LibraryBooks,

  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: BubbleChart,

  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   rtlName: "خرائط",
  //   icon: LocationOn,

  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: Notifications,

  //   layout: "/admin",
  // },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,

  //   layout: "/rtl",
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: Unarchive,

  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
