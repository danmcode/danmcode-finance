import type { SidebarItemProps } from "./sidebar.item"
import { Settings, LayoutDashboard, CalendarCheck, ArrowDownCircle, PiggyBank, ArrowUpCircle, LineChart } from 'lucide-react';

export const SideBarItems = (): SidebarItemProps[] => {

     const sidebarItems: SidebarItemProps[] = [
          { icon: LayoutDashboard, label: "Dashboard", to: "/" },
          { icon: CalendarCheck, label: "Planeación", to: "/planeacion" },
          { icon: ArrowDownCircle, label: "Ingresos", to: "/ingresos" },
          { icon: PiggyBank, label: "Ahorros", to: "/ahorros" },
          { icon: ArrowUpCircle, label: "Egresos", to: "/egresos" },
          { icon: LineChart, label: "Seguimiento", to: "/seguimiento" },
          { icon: Settings, label: "Configuración", to: "/configuracion" },
     ]

     return sidebarItems;

}