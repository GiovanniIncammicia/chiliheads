// I could've used the public folder and just pass absolute URLs (process.env.PUBLIC_URL + '/products/curry.jpg)
// but it's not recommended in this simple case. See https://create-react-app.dev/docs/using-the-public-folder/
// Use the public approach if you have thousands of files to import dinamically

export default {
  reaper: require('./products/reaper.jpg'),
  habanero: require('./products/habanero.jpg'),
  curry: require('./products/curry.jpg'),
  harissa: require('./products/harissa.jpg'),
};