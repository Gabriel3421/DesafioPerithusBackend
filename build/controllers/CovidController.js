const api = require('axios');

class CovidController {
  async index(req, res) {
    const response = await api.get(`https://covid19-brazil-api.now.sh/api/report/v1`);
    const brazilCovid = response.data.data.map(state => {
      return {
        state: state.state,
        cases: state.cases,
        deaths: state.deaths,
      }
    })
    return res.json(brazilCovid)
  }
  async show(req, res) {
    const states = [
      "AC",
      "AL",
      "AP",
      "AM",
      "BA",
      "CE",
      "DF",
      "ES",
      "GO",
      "MA",
      "MT",
      "MS",
      "MG",
      "PA",
      "PB",
      "PR",
      "PE",
      "PI",
      "RJ",
      "RN",
      "RS",
      "RO",
      "RR",
      "SC",
      "SP",
      "SE",
      "TO",
    ]

    if(!req.params.state){
      return res.json({ error: "Params State Not provided" })
    }
    if(!states.includes(req.params.state.toUpperCase())){
      return res.json({ error: "State is not valid" })
    }
    const response = await api.get(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${req.params.state}`);
    const { state, cases, deaths } = response.data
    
    return res.json({ state, cases, deaths })
  }
}
module.exports = new CovidController();