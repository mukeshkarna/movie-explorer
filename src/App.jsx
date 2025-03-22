import "./App.css";
import Header from "./components/common/Header";
import Layout from "./components/layouts/Layout";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useMovie } from "./context/MovieContext";

function App() {
  const { movies } = useMovie();
  console.log(movies, "moviesssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas");
//k boo kei nai aaba khana kahyera nislinxu banda gardim? bujyau ho ki jasto tara confident xna kum ma vana na aaba malai particular aauta matra nai sabai list chiyo vanni
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
          <Header />
          <div className="flex gap-4">
            <Input placeholder="Enter your name" />
            <Button>Click me</Button>
          </div>
          <div>
            {/* maile yeah nira length garayray linu parni ho? mahli tha vako vanxu haii huss mahile chai k socheko thya vane ne yo api bata dherai movie aauxa ani tyo movie bata chai filter garne hola socheko thya aba aaile chai temle movie ko id phatai ra xau doo eauta aako xa tyo api ko url hernu parxa huna hunna tw aba tehi ne sir lai vana na k gar vaneko ho majale buja na haii ani bare bujaidinu maile ni tei nai socheko ho tara yeah twaa aauta matra aayer an axiai ane feri aile t w a a    a auta key leyera ga ra yko ho sir le tesar i nai gara vannu vako theyo tyo garda nai aauxa hola vaneko aaru site haru ma twaa key use garda nai dherai aautheyo twaa  */}
            <p>{movies?.Title}</p>
            <img src={movies?.Poster} alt="" />
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default App;
