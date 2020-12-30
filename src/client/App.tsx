import * as React from "react";
import { FC } from "react";
import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitCol,
  SplitLayout,
  View,
  Panel,
  PanelHeader,
  Group,
  withAdaptivity,
  AdaptivityProps,
  ViewWidth,
  WebviewType,
} from "@vkontakte/vkui/dist/cjs";

export const AppLayout: FC<{}> = () => {
  return (
    <ConfigProvider isWebView webviewType={WebviewType.INTERNAL}>
      <AdaptivityProvider>
        <AppRoot>
          <App />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export const App: FC<AdaptivityProps> = withAdaptivity(
  ({ viewWidth }: AdaptivityProps) => {
    const isDesktop = viewWidth >= ViewWidth.MOBILE;
    return (
      <SplitLayout
        header={<PanelHeader separator={false} />}
        style={{ justifyContent: "center" }}
      >
        <SplitCol key="1" fixed width="280px" maxWidth="280px">
          <Panel>
            <PanelHeader />
            <Group>test</Group>
          </Panel>
        </SplitCol>

        <SplitCol
          key="2"
          animate={!isDesktop}
          spaced={isDesktop}
          width={isDesktop ? "560px" : "90%"}
          maxWidth={isDesktop ? "560px" : "100%"}
        >
          <View activePanel="1">
            <Panel id="1">
              <PanelHeader>Test</PanelHeader>
              <Group>test content</Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    );
  },
  {
    viewWidth: true,
  }
);

export default AppLayout;
