"use client";

import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-xl w-full glass rounded-2xl p-8 border border-raycart-card/30">
        <h2 className="text-2xl font-bold text-raycart-text">Une erreur est survenue</h2>
        <p className="mt-2 text-raycart-muted">{error?.message ?? "Erreur inconnue"}</p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex items-center justify-center rounded-xl border border-raycart-card/40 bg-raycart-card/30 px-4 py-2 text-sm text-raycart-text hover:bg-raycart-card/50 transition-colors"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
}
