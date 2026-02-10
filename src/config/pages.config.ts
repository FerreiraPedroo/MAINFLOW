import { Layout } from "@/shared/layouts/Layout";

import { NotFoundPage } from "@/pages/errors/NotFoundPage";
import { HomePainel } from "@/pages/home/HomePainel";

import { SafetyDashboard, SafetyHome, SafetyListEpi, SafetyNewEpi } from "@/pages/safety";

export const PAGES: Record<string, React.FC> = {
  // HOME
  ["painel"]: HomePainel,

  // QSMS
  ["qsms"]: SafetyHome,
  ["qsms-dashboard"]: SafetyDashboard,
  ["epi"]: SafetyListEpi,
  ["epi/new"]: SafetyNewEpi,
};

export const pagesConfig = {
  Pages: PAGES,
  Layout: Layout,
  NotFoundPage: NotFoundPage,
};
