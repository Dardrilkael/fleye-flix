
import {BasicButton} from "../../common"

const Footer = ({ setState,clearSearch }) => {
  return (
    //bg-white shadow-md p-4 flex items-center justify-between sticky top-0 py-6
    <footer className="bg-gray-100   py-1 fixed bottom-0 left-0 w-full z-50">
      <div className="flex justify-center space-x-4">
        <BasicButton
          label="Inicio"
          action={() =>  {setState("inicio");}}
         />
        <BasicButton
          label="Favoritos"
          action={() => setState("favoritos")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
       />
 
      </div>
    </footer>
  );
};

export default Footer;
