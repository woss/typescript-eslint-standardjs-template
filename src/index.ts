import { main } from './main'

main({
  v: '1',
  msg: 'Hi',
  ts: Date.now()
})
  .then(console.log)
  .catch(console.error)
