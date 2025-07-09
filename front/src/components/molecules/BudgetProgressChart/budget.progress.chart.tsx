import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";
import { useState } from "react";

type DataItem = {
    month: string;
    ingreso: number;
    presupuestadoIngreso: number;
    egreso: number;
    presupuestadoEgreso: number;
    ahorro: number;
    presupuestadoAhorro: number;
};

interface Props {
    dataByYear: {
        [year: number]: DataItem[];
    };
}

const COLORS = {
    ingreso: "#10b981",
    presupuestadoIngreso: "#a7f3d0",
    egreso: "#ef4444",
    presupuestadoEgreso: "#fecaca",
    ahorro: "#3b82f6",
    presupuestadoAhorro: "#bfdbfe",
};

export const BudgetProgressChart = ({ dataByYear }: Props) => {
    const availableYears = Object.keys(dataByYear).map(Number);
    const [year, setYear] = useState(availableYears[0]);

    const data = dataByYear[year];

    return (
        <div className="bg-white shadow rounded-xl p-4 w-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-base font-semibold text-gray-800">
                    Registrado <span className="text-sm text-gray-500">(vs Presupuestado)</span>
                </h2>
                <select
                    className="text-sm border rounded px-2 py-1"
                    value={year}
                    onChange={(e) => setYear(Number(e.target.value))}
                >
                    {availableYears.map((y) => (
                        <option key={y} value={y}>
                            {y}
                        </option>
                    ))}
                </select>
            </div>

            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data} barCategoryGap={10}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={(val) => `$${(val / 1_000_000).toFixed(1)}M`} />
                    <Tooltip
                        cursor={{ fill: 'none' }}
                        formatter={(val: number) => `$ ${val.toLocaleString("es-CO")}`}
                    />


                    {/* Ingreso */}
                    <Bar
                        dataKey="presupuestadoIngreso"
                        fill={COLORS.presupuestadoIngreso}
                        stackId="ingreso"
                        barSize={30}
                    />
                    <Bar
                        dataKey="ingreso"
                        fill={COLORS.ingreso}
                        stackId="ingreso"
                        barSize={16}
                    />

                    {/* Egreso */}
                    <Bar
                        dataKey="presupuestadoEgreso"
                        fill={COLORS.presupuestadoEgreso}
                        stackId="egreso"
                        barSize={30}
                    />
                    <Bar
                        dataKey="egreso"
                        fill={COLORS.egreso}
                        stackId="egreso"
                        barSize={16}
                    />

                    {/* Ahorro */}
                    <Bar
                        dataKey="presupuestadoAhorro"
                        fill={COLORS.presupuestadoAhorro}
                        stackId="ahorro"
                        barSize={30}
                    />
                    <Bar
                        dataKey="ahorro"
                        fill={COLORS.ahorro}
                        stackId="ahorro"
                        barSize={16}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};