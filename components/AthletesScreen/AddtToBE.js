import axios from "axios";

export default function AddToBE(newDatas){
axios.post(
'https://learning-rn-d9945-default-rtdb.firebaseio.com/newData.json',
newDatas
);
}