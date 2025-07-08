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
               ingreso: 10_000_000,
               presupuestadoIngreso: 12_000_000,
               egreso: 6_000_000,
               presupuestadoEgreso: 7_000_000,
               ahorro: 2_000_000,
               presupuestadoAhorro: 3_000_000,
          },
          {
               month: "Feb",
               ingreso: 8_000_000,
               presupuestadoIngreso: 10_000_000,
               egreso: 5_500_000,
               presupuestadoEgreso: 6_500_000,
               ahorro: 1_800_000,
               presupuestadoAhorro: 2_500_000,
          },
          // ...
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
