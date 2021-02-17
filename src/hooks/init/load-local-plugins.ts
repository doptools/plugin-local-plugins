import { Hook, IConfig } from '@oclif/config'
import * as glob from 'globby';
import * as path from 'path';

const hook: Hook<'init'> = async function (options) {
  try{
    const cwd = process.cwd();

    const plugins = glob
      .sync([
        'node_modules/@*/*/oclif.plugin.json',
        'node_modules/*/oclif.plugin.json',
      ])
      .map(_ => path.dirname(_))
      .map(_=> ({
        type: "link", // plugin type, user seems best, I have also seen "core" and "link" for npm-linked plugins
        name: "@doptools/plugin-version", // npm name
        root: path.join(cwd, _) // path to plugin code
      }));
      await (options.config as any).loadPlugins('package.json', "link", plugins);
/*
    const config = options.config as IConfig & {loadPlugins: (...args:any[]) => Promise<void>};
    await config.loadPlugins('package.json', "link", [
     {
      type: "link", // plugin type, user seems best, I have also seen "core" and "link" for npm-linked plugins
      name: "@doptools/plugin-version", // npm name
      root: path.join(process.cwd(), m[0]) // path to plugin code
     }
    ]);
    /*for (const path of m) {   
        await config.loadPlugins(path, "user", [{
          name: "@my/plugin", // npm name
          root: "/some/path/node_modules/@my/plugin" // path to plugin code
      }]);
    }
*/


  }catch(e){
    console.error(e);
  }
}

export default hook;