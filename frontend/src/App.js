import './App.css';

function App() {

  let PROJECTID = 'DIN SANITY-PROSJEKT-ID HER'
  //Hvordan finne ID: https://lms.webtricks.blog/kurs/uin/sanity-og-groq/sette-opp-sanity-for-et-react-prosjekt
  let DATASET = 'production'
  let QUERY = encodeURIComponent('*[_type == "products"]')
  let URL = `https://${PROJECTID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`

  fetch(URL)
  .then((results) => results.json())
  .then(({result}) => {console.log(result)})

  return (
    <h1>Innhold fra Sanity</h1>
  );
}

export default App;
