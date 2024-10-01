import { apiInitializer } from "discourse/lib/api";
import SearchBanner from "../components/simple-sidebar";

export default apiInitializer("1.14.0", (api) => {
  api.renderInOutlet(
    settings.plugin_outlet === "below-site-header"
      ? "above-main-container"
      : "below-site-header",
    SearchBanner
  );

  api.forceDropdownForMenuPanels("search-menu-panel");
});
