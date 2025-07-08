import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

type DonutChartData = {
    name: string;
    value: number;
};

interface DonutChartCardProps {
    type: "ingreso" | "egreso" | "ahorro";
    data: DonutChartData[];
    colorScheme?: string[];
    maxItemsToShow?: number;
}

const defaultColorSchemes = {
    ingreso: [
        "#31c48d", "#38b2ac", "#48bb78", "#4fd1c5", "#63b3ed",
        "#6ee7b7", "#81e6d9", "#68d391", "#38a169", "#319795",
        "#2f855a", "#2c7a7b", "#276749", "#1f5f5b", "#3aafa9",
        "#3ac1a9", "#5fc4b9", "#80d3c3", "#a0e5d0", "#b2f0da",
    ],
    egreso: [
        "#f56565", "#e53e3e", "#fc8181", "#fbb6b6", "#feb2b2",
        "#e63946", "#d14343", "#c53030", "#cc4c4c", "#da6262",
        "#e85a5a", "#ff7f7f", "#ff9999", "#f87171", "#fa9e9e",
        "#fabebe", "#fcd1d1", "#ffe5e5", "#fff0f0", "#fff5f5",
    ],
    ahorro: [
        "#3182ce", "#4299e1", "#63b3ed", "#90cdf4", "#bee3f8",
        "#3b82f6", "#2563eb", "#1d4ed8", "#1e40af", "#1e3a8a",
        "#5b9df5", "#79aff7", "#9dc3f9", "#bfd8fb", "#d5e8fd",
        "#2b6cb0", "#2c5282", "#2a4365", "#1a365d", "#153e75",
    ],
};

export const DonutChart = ({
    type,
    data,
    colorScheme,
    maxItemsToShow = 6,
}: DonutChartCardProps) => {
    const COLORS = colorScheme || defaultColorSchemes[type] || [];

    const sorted = [...data].sort((a, b) => b.value - a.value);
    const displayed = sorted.slice(0, maxItemsToShow);
    const other = sorted.slice(maxItemsToShow);

    if (other.length) {
        const totalOther = other.reduce((acc, item) => acc + item.value, 0);
        displayed.push({ name: "Otros", value: totalOther });
    }

    const total = displayed.reduce((acc, item) => acc + item.value, 0);

    return (


        <div className="flex items-center justify-between gap-4 mt-4">
            <div className="w-1/2 h-40">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={displayed}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius="90%"
                            innerRadius="70%"
                            paddingAngle={2}
                        >
                            {displayed.map((_, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value: number) =>
                                `$ ${value.toLocaleString("es-CO")}`
                            }
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="flex-1 text-xs ">
                {displayed.map((item, idx) => (
                    <div
                        key={item.name}
                        className="flex justify-between items-center mb-1"
                    >
                        <div className="flex items-center gap-2">
                            <div
                                className="w-3 h-3 rounded-sm"
                                style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                            />
                            <span>{item.name}</span>
                        </div>
                        <span className="font-medium">
                            {item.value.toLocaleString("es-CO")}
                        </span>
                    </div>
                ))}
                <div className="border-t border-gray-400 mt-2 pt-1 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>{total.toLocaleString("es-CO")}</span>
                </div>
            </div>
        </div>
    );
};
