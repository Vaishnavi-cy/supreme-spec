import { defineConfig } from 'cypress';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import webpack from '@cypress/webpack-preprocessor';

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.feature',
    setupNodeEvents(on, config) {
      const options = {
        webpackOptions: require('./webpack.config.js'),
      };
      on('file:preprocessor', webpack(options));
      addCucumberPreprocessorPlugin(on, config);

      return config;
    },
  },
});
