
import {PrimaryButton} from "../../common"

const Footer = ({ setState,clearSearch }) => {
  return (
    <footer className="bg-gray-800 text-white text-center py-2 fixed bottom-0 left-0 w-full z-50">
      <div className="flex justify-center space-x-4">
        <PrimaryButton
          label="Inicio"
          action={() =>  {setState("inicio");}}
         />
      

        <PrimaryButton
          label="Favoritos"
          action={() => setState("favoritos")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
       />
 
      </div>
      <p className="mt-2">...</p>
    </footer>
  );
};

export default Footer;
