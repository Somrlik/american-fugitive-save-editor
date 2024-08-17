import type { Component } from 'solid-js';
import { SaveEditor } from './SaveEditor.jsx';

const App: Component = () => {
  return (
    <>
      <header class="bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
        <div class="container-fluid d-flex align-items-center">
          <h1 class="d-flex align-items-center fs-4 text-white mb-0">
            American Fugitive Save Editor
          </h1>
        </div>
      </header>
      <div class="bd-cheatsheet container-fluid bg-body">
      <section id="content">
          <article class="my-3" id="typography">
            <div class="sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
              <h3>Info</h3>
            </div>

            <div>
              <p class='h1'>American Fugitive Save Editor</p>
              <p>
                Enables you to edit saves of the American Fugitive game.
              </p>
              <p>
                <a href="https://store.steampowered.com/app/934780/American_Fugitive/" target='_blank'>Steam link</a>
                <br></br>
                <a href="https://github.com/cc0d35/american-fugitive-save-editor" target='_blank'>Github repository of this project</a>
              </p>
              <p class="h2">Savegame Location</p>
              <p>
                On Windows, saved game is located in
                <code>C:\\Users\\[YOUR_USERNAME]\\AppData\\LocalLow\\Fallen Tree Games Ltd\\American Fugitive\\SaveGame\\SceneMap_default\\AllManagers.dat.bson</code>.
              </p>
              <p>
                For SteamPlay/Proton/SteamDeck, the location is most likely
                <code>
                  ~/.steam/steam/steamapps/compatdata/934780/pfx/drive_c/users/steamuser/AppData/LocalLow/Fallen Tree Games Ltd/American Fugitive/SaveGame/SceneMap_default/AllManagers.dat.bson
                </code>
              </p>
              <p class='h2'>Backups</p>
              <p>
                The editor thies to keep backups of files you uploaded. Be aware that they are stored in browser `localStorage` and
                thus will be deleted if you erase your browsing data.
              </p>
            </div>
            </article>
        </section>

        <SaveEditor></SaveEditor>
      </div>
    </>
  );
};

export default App;
