import { Greeting } from "../components/atoms/Greeting";
import { Card } from "../components/molecules/Card";
import { DonutChart } from "../components/molecules/DonoutChart";
import type { ReactNode } from "react";
import { BudgetProgressChart } from "../components/molecules/BudgetProgressChart/budget.progress.chart";

const ingresosData = [
     { name: "Sueldo", value: 3360000 },
     { name: "Otros", value: 366019 },
];

const egresosData = [
     { name: "Universidad", value: 1000000 },
     { name: "Arriendo", value: 515000 },
     { name: "No Planeados", value: 403123 },
     { name: "Comidas Fuera", value: 212998 },
     { name: "Pensión", value: 134400 },
     { name: "Otro", value: 602988 },
];

const ahorrosData = [
     { name: "Fondo Emergencias", value: 92013 },
     { name: "Viajes ✈️", value: 38446 },
     { name: "Ahorro con Meta", value: 25000 },
]

const dataByYear = {
     2025: [
          {
               month: "Ene",
               ingreso: 10000000,
               presupuestadoIngreso: 12000000,
               egreso: 6000000,
               presupuestadoEgreso: 7000000,
               ahorro: 2000000,
               presupuestadoAhorro: 3000000,
          },
          {
               month: "Feb",
               ingreso: 8000000,
               presupuestadoIngreso: 10000000,
               egreso: 5500000,
               presupuestadoEgreso: 6500000,
               ahorro: 1800000,
               presupuestadoAhorro: 2500000,
          },
          {
               month: "Mar",
               ingreso: 8000000,
               presupuestadoIngreso: 10000000,
               egreso: 5500000,
               presupuestadoEgreso: 6500000,
               ahorro: 1800000,
               presupuestadoAhorro: 2500000,
          },
          {
               month: "Abr",
               ingreso: 8000000,
               presupuestadoIngreso: 10000000,
               egreso: 5500000,
               presupuestadoEgreso: 6500000,
               ahorro: 1800000,
               presupuestadoAhorro: 2500000,
          },
          {
               month: "May",
               ingreso: 8000000,
               presupuestadoIngreso: 10000000,
               egreso: 5500000,
               presupuestadoEgreso: 6500000,
               ahorro: 1800000,
               presupuestadoAhorro: 2500000,
          },
          {
               month: "Jun",
               ingreso: 8000000,
               presupuestadoIngreso: 10000000,
               egreso: 5500000,
               presupuestadoEgreso: 6500000,
               ahorro: 1800000,
               presupuestadoAhorro: 2500000,
          },
          {
               month: "Jul",
               ingreso: 8000000,
               presupuestadoIngreso: 10000000,
               egreso: 5500000,
               presupuestadoEgreso: 6500000,
               ahorro: 1800000,
               presupuestadoAhorro: 2500000,
          },
          {
               month: "Ago",
               ingreso: 8000000,
               presupuestadoIngreso: 10000000,
               egreso: 5500000,
               presupuestadoEgreso: 6500000,
               ahorro: 1800000,
               presupuestadoAhorro: 2500000,
          },
          {
               month: "Sep",
               ingreso: 8000000,
               presupuestadoIngreso: 10000000,
               egreso: 5500000,
               presupuestadoEgreso: 6500000,
               ahorro: 1800000,
               presupuestadoAhorro: 2500000,
          },
          {
               month: "Oct",
               ingreso: 8000000,
               presupuestadoIngreso: 10000000,
               egreso: 5500000,
               presupuestadoEgreso: 6500000,
               ahorro: 1800000,
               presupuestadoAhorro: 2500000,
          },
          {
               month: "Nov",
               ingreso: 8000000,
               presupuestadoIngreso: 10000000,
               egreso: 5500000,
               presupuestadoEgreso: 6500000,
               ahorro: 1800000,
               presupuestadoAhorro: 2500000,
          },
          {
               month: "Dic",
               ingreso: 8000000,
               presupuestadoIngreso: 10000000,
               egreso: 5500000,
               presupuestadoEgreso: 6500000,
               ahorro: 1800000,
               presupuestadoAhorro: 2500000,
          },
     ],
};



interface IDashboardCards {
     card: ReactNode;
}

const dashboardCards: IDashboardCards[] = [
     {
          card: (<Card
               title="Ingresos"
               description="Ingresos netos registrados"
               children={<DonutChart data={ingresosData} type={"ingreso"} />}
          />)
     },
     {
          card: (<Card
               title="Ahorros"
               description="Ahorros netos registrados"
               children={<DonutChart data={egresosData} type={"egreso"} />}
          />)
     },
     {
          card: (<Card
               title="Egresos"
               description="Egresos netos registrados"
               children={<DonutChart data={ahorrosData} type={"ahorro"} />}
          />)
     },
]

export default function Dashboard() {
     return (
          <>
               {/* Greeting to User */}
               <Greeting />

               {/* Dashboard controls */}
               <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">

               </div>

               {/* Dasboard Cards */}
               <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
                    {dashboardCards.map((item) => (item.card))}

                    {/* Dashboard Cards */}
                    <div className="bg-white p-6 rounded-lg shadow-md col-span-full">
                         <BudgetProgressChart
                              dataByYear={dataByYear}
                         />
                    </div>
               </div>
          </ >
     )
}
