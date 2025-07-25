import { router } from "expo-router";
import { openBrowserAsync } from "expo-web-browser";
import { useTranslation } from "react-i18next";

import { OpenInNew } from "~/icons/OpenInNew";
import { queries as q } from "~/queries/keyStore";
import {
  userPreferencesStore,
  useUserPreferencesStore,
} from "~/services/UserPreferences";
import { useHasNewUpdate } from "~/hooks/useHasNewUpdate";
import { StandardScrollLayout } from "~/layouts/StandardScroll";
import { SettingsSheets } from "~/screens/Sheets/Settings/Root";
import { LANGUAGES } from "~/modules/i18n/constants";

import { APP_VERSION } from "~/constants/Config";
import * as LINKS from "~/constants/Links";
import { queryClient } from "~/lib/react-query";
import { Card } from "~/components/Containment/Card";
import { List, ListItem } from "~/components/Containment/List";
import { Divider } from "~/components/Divider";
import { useSheetRef } from "~/components/Sheet";

/** Screen for `/setting` route. */
export default function SettingScreen() {
  const { t, i18n } = useTranslation();
  const { hasNewUpdate } = useHasNewUpdate();
  const showRCNotification = useUserPreferencesStore(
    (state) => state.rcNotification,
  );
  const backupSheetRef = useSheetRef();
  const languageSheetRef = useSheetRef();

  const currLang = LANGUAGES.find(({ code }) => code === i18n.language)?.name;

  return (
    <>
      <SettingsSheets
        backupRef={backupSheetRef}
        languageRef={languageSheetRef}
      />
      <StandardScrollLayout>
        {hasNewUpdate && (
          <ListItem
            titleKey="feat.appUpdate.title"
            description={t("feat.appUpdate.brief")}
            onPress={() => router.navigate("/setting/update")}
            className="rounded-full bg-yellow"
            textColor="text-neutral0"
          />
        )}

        <List>
          <ListItem
            titleKey="feat.appearance.title"
            description={t("feat.appearance.brief")}
            onPress={() => router.navigate("/setting/appearance")}
            first
          />
          <ListItem
            titleKey="feat.language.title"
            description={currLang ?? "English"}
            onPress={() => languageSheetRef.current?.present()}
            last
          />
        </List>

        <List>
          <ListItem
            titleKey="feat.backup.title"
            description={t("feat.backup.brief")}
            onPress={() => backupSheetRef.current?.present()}
            first
          />
          <ListItem
            titleKey="feat.insights.title"
            description={t("feat.insights.brief")}
            onPress={() => router.navigate("/setting/insights")}
          />
          {/* <ListItem
            titleKey="feat.interactions.title"
            description={t("feat.interactions.brief")}
            icon={<OpenInNew />}
            onPress={() => openBrowserAsync(LINKS.NOTHING_INTERACTIONS)}
          /> */}
          <ListItem
            titleKey="feat.playback.title"
            description={t("feat.playback.brief")}
            onPress={() => router.navigate("/setting/playback")}
          />
          <ListItem
            titleKey="feat.scanning.title"
            description={t("feat.scanning.brief")}
            onPress={() => router.navigate("/setting/scanning")}
            last
          />
        </List>

        <ListItem
          titleKey="feat.experimental.title"
          description={t("feat.experimental.brief")}
          onPress={() => router.navigate("/setting/experimental")}
          first
          last
        />

        <List>
          <ListItem
            titleKey="feat.translate.title"
            description={t("feat.translate.brief")}
            icon={<OpenInNew />}
            onPress={() => openBrowserAsync(LINKS.TRANSLATIONS)}
            first
          />
          <ListItem
            titleKey="feat.code.title"
            description={t("feat.code.brief")}
            icon={<OpenInNew />}
            onPress={() => openBrowserAsync(LINKS.GITHUB)}
          />
          <ListItem
            titleKey="feat.license.title"
            icon={<OpenInNew />}
            onPress={() => openBrowserAsync(LINKS.LICENSE)}
          />
          <ListItem
            titleKey="feat.privacy.title"
            icon={<OpenInNew />}
            onPress={() => openBrowserAsync(LINKS.PRIVACY_POLICY)}
          />
          <ListItem
            titleKey="feat.thirdParty.title"
            description={t("feat.thirdParty.brief")}
            onPress={() => router.navigate("/setting/third-party")}
          />
          <Card className="overflow-hidden rounded-t-sm p-0">
            <ListItem
              titleKey="feat.version.title"
              description={APP_VERSION}
              icon={<OpenInNew />}
              onPress={() => openBrowserAsync(LINKS.VERSION_CHANGELOG)}
              className="rounded-none"
            />
            <Divider className="mx-4" />
            <ListItem
              titleKey="feat.version.extra.rcNotification"
              onPress={toggleRCNotification}
              switchState={showRCNotification}
              className="rounded-none"
            />
          </Card>
        </List>
      </StandardScrollLayout>
    </>
  );
}

const toggleRCNotification = () => {
  userPreferencesStore.setState((prev) => ({
    rcNotification: !prev.rcNotification,
  }));
  queryClient.invalidateQueries({ queryKey: q.settings.releaseNote.queryKey });
};
