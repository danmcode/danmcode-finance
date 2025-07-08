import type { ReactNode } from "react";
import { Divider } from "../../atoms/Divider";

interface CardProps {
    title?: string;
    description?: string;
    children: ReactNode;
    cardAction?: ReactNode;
}

export const Card = ({
    title,
    description,
    children,
    cardAction
}: CardProps) => {
    return (
        <div className="
            bg-white 
            shadow-md 
            rounded-lg 
            p-6 
            hover:shadow-lg 
            transition-shadow 
            duration-300
            mb-2"
        >
            {
                title && (
                    <h3 className="text-lg font-medium text-gray-700 mb-2">{title}</h3>
                )
            }
            {
                description && (
                    <p className="text-gray-500 text-sm mb-4">
                        {description}
                    </p>
                )
            }

            {
                children
            }

            {
                cardAction && (
                    <>
                        <Divider />
                        <div className="mt-4">
                            {cardAction}
                        </div>
                    </>
                )
            }
        </div>
    )
}
