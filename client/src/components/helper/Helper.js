import { AttachMoneyOutlined, Event, ListAlt, MenuBookOutlined, Settings } from "@material-ui/icons";

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