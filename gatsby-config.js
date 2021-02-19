/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-ipfs-web-wallet',
    'gatsby-plugin-bch-tx-history',
    'bch-wallet-plugin-postoffice',
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['bch-wallet-plugin-postoffice']
      }
    }
  ]
}
