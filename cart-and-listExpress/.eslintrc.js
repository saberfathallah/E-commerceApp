module.exports = {
    "extends": "airbnb-base",
    "plugins": [
      "import"
    ],
    "env": {
      "jest": true
    },
    rules: {
      "linebreak-style": 0
    },
    settings : {
      "import/resolver": {
        node: {
          moduleDirectory: [
            "node_modules",
            "src"
          ]
        }
      }
    }
  };
  