import { AttachMoneyOutlined, Delete, Edit, Event, ListAlt, Notes, Print, Settings } from "@material-ui/icons";

export const navMenu = [
  {
    name: 'Notes',
    icon: <Notes />,
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
    path: 'note/edit'
  },
  {
    name: 'Delete',
    icon: <Delete />,
    url: '/api/users/notes',
    path: 'note/delete'
  },
  {
    name: 'Print',
    icon: <Print />,
    url: '/api/users/notes',
    path: 'note/print'
  },
]