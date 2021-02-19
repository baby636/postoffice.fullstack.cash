# postoffice.fullstack.cash

This repository of code generates the website at [postoffice.fullstack.cash](https://postoffice.fullstack.cash). This is a demonstration of the open source SLP Post Office. The Post Office idea has two parts:

- [simpleledger-post-office-server](https://github.com/Permissionless-Software-Foundation/simpleledger-post-office-server) is the server-side software that communicates with the blockchain and handles the token payment and generation of 'stamps'.
- [bch-wallet-plugin-postoffice](https://github.com/Permissionless-Software-Foundation/bch-wallet-plugin-postoffice) is the Gatsby Plugin for the [bch-wallet-starter](https://github.com/Permissionless-Software-Foundation/bch-wallet-starter) Gatsby Starter, that enables the web wallet to make use of the Post Office server.

This repository combined bch-wallet-starter with bch-wallet-plugin-postoffice, to demonstrate a working web wallet that uses a post office.

For more background on the SLP Post Office idea:
- [PSF Post Office Demo Video](https://youtu.be/vtv9bAQx5LE)
- [Vin Armani's Post Office Demo](https://youtu.be/IATkQEdRdVI)
