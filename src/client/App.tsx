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
  SSRWrapper,
  CardScroll,
  Card,
  ModalRoot,
  ModalPage,
  ModalPageHeader,
  CellButton,
} from "@vkontakte/vkui";

export const AppLayout: FC<{}> = () => {
  return (
    <SSRWrapper>
      <ConfigProvider isWebView webviewType={WebviewType.INTERNAL}>
        <AdaptivityProvider>
          <AppRoot>
            <App />
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    </SSRWrapper>
  );
};

export const App: FC<AdaptivityProps> = withAdaptivity(
  ({ viewWidth }: AdaptivityProps) => {
    const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET;
    const [modal, setModal] = React.useState<string>(null);
    const closeModal = () => setModal(null);
    return (
      <SplitLayout
        header={<PanelHeader separator={false} />}
        style={{ justifyContent: "center" }}
        modal={
          <ModalRoot activeModal={modal} onClose={closeModal}>
            <ModalPage
              id="modal1"
              header={<ModalPageHeader>modal</ModalPageHeader>}
              onClose={closeModal}
            >
              <Group>modal content</Group>
            </ModalPage>
          </ModalRoot>
        }
      >
        {isDesktop && (
          <SplitCol key="1" fixed width="280px" maxWidth="280px">
            <Panel>
              <PanelHeader />
              <Group>sidebar</Group>
            </Panel>
          </SplitCol>
        )}

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
              <Group>
                <CellButton onClick={() => setModal("modal1")}>
                  open modal
                </CellButton>
              </Group>
              <Group description="Внутри Group">
                <CardScroll size="s">
                  <Card>
                    <div style={{ paddingBottom: "66%" }} />
                  </Card>
                  <Card>
                    <div style={{ paddingBottom: "66%" }} />
                  </Card>
                  <Card>
                    <div style={{ paddingBottom: "66%" }} />
                  </Card>
                  <Card>
                    <div style={{ paddingBottom: "66%" }} />
                  </Card>
                  <Card>
                    <div style={{ paddingBottom: "66%" }} />
                  </Card>
                  <Card>
                    <div style={{ paddingBottom: "66%" }} />
                  </Card>
                </CardScroll>
              </Group>
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
