import { Bounce, toast } from "react-toastify";
export const notifyUserWithToast = () => {
  toast(
    "🦄 Oops! Looks like this feature is still in the oven. It's not quite baked yet!",
    {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    }
  );
};
