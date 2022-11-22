import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const fd = new FormData();

    fd.append("picture", data.picture[0]);
    fd.append("teste", "teste");

    console.log(fd);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("picture")} type="file" />
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
}

export default App;
