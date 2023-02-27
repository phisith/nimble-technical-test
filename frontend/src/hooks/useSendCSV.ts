import {useContext} from "react";
import {LayoutContext} from "../components/layouts";
import toast from "react-hot-toast";
import axios from "axios";

export const useSendCSV = () => {
    const {state} = useContext(LayoutContext)

    const sendCSV = () => {
        if (state.data && state.data.length > 0) {
            axios.post("http://localhost:8000/import_csv", {data: state.data}).then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
        } else {
            toast.error("There is no data to send")
            return
        }
    }
    return {sendCSV}
}