module.exports = {
  "presets": [
    "@vue/cli-plugin-babel/preset"
  ],
  "plugins": [
    [
      "prismjs",
      {
        "languages": [
          "javascript",
          "css",
          "markup"
        ],
        "plugins": [
          "line-numbers"
        ],
        "theme": "Default",
        "css": true
      }
    ],
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}