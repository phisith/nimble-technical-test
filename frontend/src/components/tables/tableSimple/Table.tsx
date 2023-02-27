import {useContext} from "react";
import {LayoutContext} from "../../layouts";

const TableSimple = () => {
    const {state} = useContext(LayoutContext);
    const header = Object.keys(state.data[0] || "");
    return (
        <>
            <div className={"bg-white shadow rounded overflow-auto"}>
                <table className={"text-left w-full"}>
                    <thead
                        className={"sticky top-0 uppercase bg-gray-100 text-sm font-bold"}
                    >
                    <tr>
                        <th className={""}></th>
                        <th scope={"col"} className={"px-6 py-3"}>
                            {header}
                        </th>
                    </tr>
                    </thead>
                    <tbody className={"text-gray-600 text-sm"}>
                    {state.data.length > 0 &&
                        state.data.map((info, index) => {
                            return (
                                <tr key={index} className={"border-b"}>
                                    <td className={"text-center"}>{index + 1}</td>
                                    {Object.values(info).map((val: any, key) => {
                                        return (
                                            <td key={key} className={"px-6 py-4 whitespace-nowrap"}>
                                                {val}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot className={"sticky bottom-0 bg-gray-100 text-sm font-bold"}>
                    <tr>
                        <td colSpan={2} className={"px-6 py-3"}>
                            Total: {state.data.length}
                        </td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};
export default TableSimple;
