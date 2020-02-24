const createGulpTasks = require('@e-group/devops/createGulpTasks');

const path = require('path');

createGulpTasks({
  serverDir: path.resolve(__dirname, 'relative-path-to-your-server-dir'), // eg. '../egroupAI/src/main/webapp'
  indexPath: '/WEB-INF/views/index.jsp',
  buildFolder: '/source'
});
