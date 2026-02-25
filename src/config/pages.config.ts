import { Layout } from "@/shared/layouts/Layout";

import { NotFoundPage } from "@/pages/errors/NotFoundPage";
import { HomePainel } from "@/pages/home/HomePainel";

import {
  SafetyDashboard,
  SafetyDetailsEpi,
  SafetyHome,
  SafetyListEpi,
  SafetyNewEpi,
} from "@/pages/safety";
import {
  PersonDashboard,
  PersonDetails,
  PersonHome,
  PersonList,
  PersonNew,
} from "@/pages/person";

export const PAGES: Record<string, React.FC> = {
  // HOME
  ["painel"]: HomePainel,

  // QSMS
  ["qsms"]: SafetyHome,
  ["epi"]: SafetyListEpi,
  ["epi/new"]: SafetyNewEpi,
  ["epi/:id"]: SafetyDetailsEpi,
  ["qsms-dashboard"]: SafetyDashboard,

  // PESSOAS
  ["persons"]: PersonHome,
  ["persons/new"]: PersonNew,
  ["persons/list"]: PersonList,
  ["persons/:id"]: PersonDetails,
  ["persons/dashboard"]: PersonDashboard,
};

export const pagesConfig = {
  Pages: PAGES,
  Layout: Layout,
  NotFoundPage: NotFoundPage,
};
