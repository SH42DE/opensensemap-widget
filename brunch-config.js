// See http://brunch.io for documentation.
exports.modules = {
  wrapper: false
};

exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/,
      'script.js': /^app/
    }
  }
};

exports.plugins = {
  jscc: {
    values: {
      _ADDRESS: 'http://localhost:8000/'
    }
  },
  babel: {
    presets: [
      [
        'env',
        {
          targets: {
            browsers: ['last 2 versions']
          },
          useBuiltIns: true
        }
      ]
    ]
  },
  postcss: {
    processors: [require('autoprefixer')(['last 8 versions'])]
  }
};

exports.server = {
  port: 8000
};

exports.overrides = {
  production: {
    paths: {
      public: './dist'
    },
    plugins: {
      babel: {
        presets: [
          [
            'env',
            {
              targets: {
                browsers: ['last 2 versions']
              },
              useBuiltIns: true
            }
          ],
          'minify'
        ]
      }
    }
  }
};
