import { TabNav, TabNavItem } from "vcc-ui";
import { CarObj } from "../pages/CarHome";
import { MouseEvent } from "react";

interface CarFilterProps {
    readonly data: Array<CarObj>
    readonly onFilterClicked: (e: MouseEvent<HTMLButtonElement>) => void
}
export const CarFilter = ({ data, onFilterClicked }: CarFilterProps) => {
    const carBodyType = [
        ...new Set(data.map((carType: CarObj) => carType.bodyType)),
    ];
    return (
        <TabNav>
            <TabNavItem value="All Cars" onClick={onFilterClicked}>
                All
            </TabNavItem>
            {carBodyType.map((item: string, index) => {
                return (
                    <TabNavItem
                        style={{ textTransform: 'capitalize' }}
                        key={index}
                        value={item}
                        onClick={onFilterClicked}
                    >
                        {item}
                    </TabNavItem>

                );
            })}
        </TabNav>
    );
}