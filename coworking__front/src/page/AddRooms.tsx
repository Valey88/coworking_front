import { useState } from "react";
import { useAddRoomsMutation } from "../redux/dataApi";

import { useGetRoomsQuery } from "../redux/dataApi";

function AddRooms() {
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");

  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [places, setPlaces] = useState(0);
  const { data } = useGetRoomsQuery();

  const [addRooms] = useAddRoomsMutation();

  // async function fetchData() {
  //   try {
  //     const response = await axios.get<Rooms>(
  //       `http://localhost:3000/room/get-room/${id}`
  //     );
  //     const data = response.data;
  //     console.log(data);
  //   } catch (error) {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // if (loading) {
  //   return <h3>Идет загрузка .... </h3>;
  // }
  // if (error) {
  //   return <h3>Ошибка при загрузке.... </h3>;
  // }
  // if (!rooms) {
  //   return <h3>Нет данных.... </h3>;
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);
  const addNewRoom = async () => {
    console.log({ address, name, description, price, places });
    if (address && name && description && price && places) {
      await addRooms({
        address,
        name,
        description,
        price,
        places,
      }).unwrap();
      setAddress("");
      setName("");
      setDescription("");
      setPrice(0);
      setPlaces(0);
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="адресс"
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="название"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Цена"
        onChange={(e) => setPrice(+e.target.value)}
      />
      <textarea
        placeholder="Описание"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Количество мест"
        onChange={(e) => setPlaces(+e.target.value)}
      />
      <button onClick={addNewRoom}>Создать</button>
      <div>
        <div>
          <h1>Список комнат</h1>

          {data?.map((data) => {
            return (
              <div key={data.id}>
                <h2>{data.address}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AddRooms;
