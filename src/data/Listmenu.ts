export const Listmenu = [
  {
    id:1,
    name: "Dashboard",
    icon: '<i class=" fa-solid fa-house"></i>',
    type: "link",
    link: "/dashboard",
    sort: 1,
    role: ["admin", "user"],
    children: [],
  }, 
  {
    id:2,
    name: "Position Order",
    icon: '<i class="fa-solid fa-receipt"></i>',
    type: "link",
    link: "/positionorder",
    sort: 1,
    role: ["admin", "user"],
    children: [],
  }, 
  {
    id:3,
    name: "Cut Position",
    icon: '<i class="fa-solid fa-sack-dollar"></i>',
    type: "link",
    link: "/cutposition",
    sort: 1,
    role: ["admin", "user"],
    children: [],
  }, 
  {
    id:4,
    name: "Settlement",
    icon: '<i class="fa-solid fa-dollar-sign"></i>',
    type: "link",
    link: "/settlement",
    sort: 1,
    role: ["admin", "user"],
    children: [],
  }, 
  {
    id:5,
    name: "Payback",
    icon: '<i class="fa-solid fa-repeat"></i>',
    type: "link",
    link: "/payback",
    sort: 1,
    role: ["admin", "user"],
    children: [],
  }, 
  {
    id:6,
    name: "Deposit/Withdraw",
    icon: '<i class="fa-solid fa-money-bill-transfer"></i>',
    type: "link",
    link: "/deposit",
    sort: 1,
    role: ["admin", "user"],
    children: [],
  }, 
  {
    id:7,
    name: "Customer Info",
    icon: '<i class="fa-regular fa-id-card"></i>',
    type: "link",
    link: "/customer",
    sort: 1,
    role: ["admin", "user"],
    children: [],
  }, 
  {
    id:8,
    name: "Supplier Port",
    icon: '<i class="fa-solid fa-address-book"></i>',
    type: "link",
    link: "/supplier",
    sort: 1,
    role: ["admin", "user"],
    children: [],
  }, 
  {
    id:9,
    name: "Stock Inventory",
    icon: '<i class="fa-solid fa-clipboard-check"></i>',
    type: "link",
    link: "/stock",
    sort: 1,
    role: ["admin", "user"],
    children: [],
  }, 

  {
    id:10,
    name: "Settings",
    icon: '<i class=" fa-solid fa-gear"></i>',
    type: "subMenu",
    link: "/setting",
    sort: 2,
    role: ["admin", "user"],
    children: [
      {
        id:1,
        name: "Manage Seller",
        icon: '<i class="fa-solid fa-clipboard-user"></i>',
        type: "link",
        link: "/setting/seller",
        sort: 1,
        role: ["admin", "user"],
      },
      {
        id:2,
        name: "Manage User",
        icon: '<i class="fa-solid fa-user"></i>',
        type: "link",
        link: "/setting/user",
        sort: 1,
        role: ["admin", "user"],
      },
      {
        id:3,
        name: "Manage Role",
        icon: '<i class="fa-solid fa-shield-halved"></i>',
        type: "link",
        link: "/setting/role",
        sort: 1,
        role: ["admin", "user"],
      }, 
    ],
  } 
];