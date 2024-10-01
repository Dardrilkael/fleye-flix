import ImdbLogo from "../../assets/imdb.png";

export const Header = ({title ="IMDB filmes", children}) => {
    return <header className="bg-white shadow-md p-4 flex items-center justify-between sticky top-0 py-6">
    <div className="container mx-auto p-2 px-4 flex items-center justify-start gap-6">
      <img src={ImdbLogo} className="" width={"48px"} height={"auto"}/>
      <h2 className="text-xl font-semibold text-gray-700 ">
        {title}
      </h2>

      <section className="mr-0 ml-auto">
        {children}
      </section>
    </div>
  </header>
}