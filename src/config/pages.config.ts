import { Layout } from "@/shared/layouts/Layout";
import { NotFoundPage } from "@/pages/errors/NotFoundPage";
import { HomePainel } from "@/pages/home/HomePainel";

import * as safety from "@/pages/safety";
import * as person from "@/pages/person";
import * as manager from "@/pages/manager";

export const PAGES: Record<string, React.FC> = {
  // HOME /////////////////////////////////////////////////////
  painel: HomePainel,

  // MANAGER //////////////////////////////////////////////////
  manager: manager.ManagerHome,
  "manager/localizations": manager.LocalizationList,
  "manager/localizations/new": manager.LocalizationNew,
  // "manager/projects": manager.ProjectList,
  // "manager/cost-center": manager.CostCenterList,
  // "manager/payment-group": manager.PaymentGroupList,

  // QSMS /////////////////////////////////////////////////////
  qsms: safety.SafetyHome,
  "qsms-dashboard": safety.SafetyDashboard,
  //// EPI
  epi: safety.SafetyListEpi,
  "epi/new": safety.SafetyNewEpi,
  "epi/:id": safety.SafetyDetailsEpi,
  //// NR
  nr: safety.RegulatoryStandardHome,

  // PESSOAS //////////////////////////////////////////////////
  persons: person.PersonHome,
  "persons/new": person.PersonNew,
  "persons/list": person.PersonList,
  "persons/:id": person.PersonDetails,
  "persons/dashboard": person.PersonDashboard,
};

export const pagesConfig = {
  Pages: PAGES,
  Layout: Layout,
  NotFoundPage: NotFoundPage,
};
