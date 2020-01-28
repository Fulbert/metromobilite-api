import MAPI from '.'

const M = new MAPI()

M.getData('featuresList', { types: 'MVA' })
  .then(r => {
    console.log(r)
  })
  .catch(e => {
    console.log(e)
  })
