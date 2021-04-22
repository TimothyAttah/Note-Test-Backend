import { AttachMoneyOutlined, Delete, Edit, Event, ListAlt, MenuBookOutlined, Print, Settings } from "@material-ui/icons";

export const navMenu = [
  {
    name: 'Notes',
    icon: <MenuBookOutlined />,
    url: '/api/users/notes'
  },
  {
    name: 'Todos',
    icon: <ListAlt />,
    url: '/api/users/todos'
  },
  {
    name: 'Events',
    icon: <Event />,
    url: '/api/users/events'
  },
  {
    name: 'Budgets',
    icon: <AttachMoneyOutlined />,
    url: '/api/users/budgets'
  },
  {
    name: 'Settings',
    icon: <Settings />,
    url: '/api/users/settings'
  },
]

export const popupNav = [
  {
    name: 'Edit',
    icon: <Edit />,
    url: '/api/users/notes',
    path: 'edit'
  },
  {
    name: 'Delete',
    icon: <Delete />,
    url: '/api/users/notes',
    path: 'delete'
  },
  {
    name: 'Print',
    icon: <Print />,
    url: '/api/users/notes',
    path: 'print'
  },
]