import { AppProviders } from "@/core/providers";
import { AppLayout } from "@/layouts";
import { ChampionsScene, CheckoutScene, RegionsScene } from "@/scenes";
import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <AppProviders>
        <AppLayout>
          <Routes>
            <Route path={routes.champions} element={<ChampionsScene />} />
            <Route path={routes.regions} element={<RegionsScene />} />
            <Route path={routes.checkout} element={<CheckoutScene />} />
            <Route path="*" element={<Navigate to={"/champions"} />} />
          </Routes>
        </AppLayout>
      </AppProviders>
    </HashRouter>
  );
};
