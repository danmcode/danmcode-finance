import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";
import { useState } from "react";

type SeriesKey = "ingreso" | "egreso" | "ahorro" | "presupuestado";

const COLORS: Record<SeriesKey, string> = {
    ingreso: "#31c48d",
    egreso: "#f87171",
    ahorro: "#0ea5e9",
    presupuestado: "#d1fae5",
};

const seriesNames: Record<SeriesKey, string> = {
    ingreso: "Ingresos",
    egreso: "Gastos",
    ahorro: "Ahorros",
    presupuestado: "Presupuestado",
};

// 3. Tipado de los datos
type DataItem = {
    month: string;
    ingreso?: number;
    egreso?: number;
    ahorro?: number;
    presupuestado?: number;
};

interface Props {
    dataByYear: {
        [year: number]: DataItem[];
    };
}

// 4. Componente principal
export const MonthlyComparisonChart = ({ dataByYear }: Props) => {
    const availableYears = Object.keys(dataByYear).map(Number);
    const [year, setYear] = useState(availableYears[0]);
    const [visibleSeries, setVisibleSeries] = useState<Record<SeriesKey, boolean>>({
        ingreso: true,
        egreso: true,
        ahorro: true,
        presupuestado: true,
    });

    const toggleSeries = (key: SeriesKey) => {
        setVisibleSeries((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const data = dataByYear[year];

    return (
        <div className="bg-white shadow rounded-xl p-4 w-full">
            {/* Header */}
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

            {/* Checkboxes */}
            <div className="flex flex-wrap gap-4 mb-3">
                {(Object.keys(seriesNames) as SeriesKey[]).map((key) => (
                    <label key={key} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input
                            type="checkbox"
                            checked={visibleSeries[key]}
                            onChange={() => toggleSeries(key)}
                        />
                        <div className="flex items-center gap-1">
                            <span
                                className="inline-block w-3 h-3 rounded-sm"
                                style={{ backgroundColor: COLORS[key] }}
                            />
                            {seriesNames[key]}
                        </div>
                    </label>
                ))}
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={(val) => `$${(val / 1_000_000).toFixed(1)}M`} />
                    <Tooltip
                        formatter={(value: number) => `$ ${value.toLocaleString("es-CO")}`}
                    />
                    <Legend />
                    {(Object.keys(seriesNames) as SeriesKey[]).map(
                        (key) =>
                            visibleSeries[key] && (
                                <Bar
                                    key={key}
                                    dataKey={key}
                                    fill={COLORS[key]}
                                    name={seriesNames[key]}
                                />
                            )
                    )}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
