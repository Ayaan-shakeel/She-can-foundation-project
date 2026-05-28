import React from 'react'

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-slate-950/95 backdrop-blur-md">
      <div className="flex flex-col items-center gap-6">
        
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute h-20 w-20 rounded-full border border-emerald-400/20"></div>
          <div className="absolute h-20 w-20 animate-ping rounded-full bg-emerald-400/10"></div>
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-400/20 border-t-emerald-400"></div>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-semibold tracking-wide text-white sm:text-2xl">
            She Can Foundation
          </h2>
          <p className="mt-2 text-sm text-emerald-200 sm:text-base">
            Loading experience...
          </p>
        </div>
      </div>
    </div>
  )
}