import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form className="formDiv" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} placeholder="Company Name" />
      <input {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })}  placeholder="Company Owner"/>
      <input type="submit" value="Register" className = "submitBtn" />

    </form>
  );
}