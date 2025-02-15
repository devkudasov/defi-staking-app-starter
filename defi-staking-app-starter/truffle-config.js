require('babel-register');
require('babel-polyfill');

module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: '7545',
            network_id: '*',
        },
    },
    contracts_directory: './src/contracts/',
    contracts_build_directory: './src/truffle_abis/',
    compilers: {
        socl: {
            version: '^0.8.0',
            optimizer: {
                enabled: true,
                runs: 200,
            }
        }
    }
}
