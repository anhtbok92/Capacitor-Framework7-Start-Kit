import routes from './routes.ts';
import { App, Block, Link, Navbar, Page, Panel, Toolbar, View, Views } from 'framework7-react';

function AppInit() {
  const f7params = {
    name: 'My App',
    theme: 'auto',
    routes: routes,
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };

  return (
    <App name={f7params.name} theme={f7params.theme} routes={f7params.routes} statusbar={f7params.statusbar}>
      <Panel left cover dark>
        <View>
          <Page>
            <Navbar title="Left Panel" />
            <Block>Left panel content goes here</Block>
          </Page>
        </View>
      </Panel>
      <Views tabs className="safe-areas">
        {/* Tabbar for switching views-tabs */}
        <Toolbar tabbar icons bottom>
          <Link tabLink="#view-home" tabLinkActive iconIos="f7:house_fill" iconMd="material:home" text="Home" />
          <Link tabLink="#view-catalog" iconIos="f7:square_list_fill" iconMd="material:view_list" text="Catalog" />
          <Link tabLink="#view-settings" iconIos="f7:gear" iconMd="material:settings" text="Settings" />
        </Toolbar>

        {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
        <View id="view-home" main tab tabActive url="/" />

        {/* Catalog View */}
        <View id="view-catalog" name="catalog" tab url="/catalog/" />

        {/* Settings View */}
        <View id="view-settings" name="settings" tab url="/settings/" />
      </Views>
    </App>
  );
}

export default AppInit;