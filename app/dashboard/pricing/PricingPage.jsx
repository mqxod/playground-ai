"use client";

import { useState } from "react";
import { Check, X, Crown, Sparkles, Lock } from "lucide-react";

/* ── Plan data ────────────────────────────────────────── */
const PLANS = [
  {
    name: "Starter",
    description: "Perfect for beginners starting their AI journey",
    monthlyPrice: 9,
    yearlyPrice: 9,
    savings: null,
    color: "zinc",       // dark/neutral
    gradient: null,
    badge: null,
    credits: "150 credits/mo.",
    creditsDetail: "= 75 Nano Banana Pro Generations",
    features: [
      { text: "Access to selected models only", included: true },
      { text: "Concurrent: up to 2 Videos, 2 Images, 1 Characters", included: true },
      { text: "Access to all features", included: false },
      { text: "Soul 2.0 fast FREE gens", included: false },
      { text: "Early access to advanced AI features", included: false },
      { text: "Lowest cost per credit", included: false },
      { text: "Discount for extra credits", included: false },
      { text: "Turn one model into 365 Unlimited", included: false },
    ],
    models: [
      "Kling 3.0 — FULL ACCESS",
      "Kling 3.0 Omni — FULL ACCESS",
      "Nano Banana Pro — FULL ACCESS",
    ],
    unlimited: [
      { text: "Unlimited Image generations", included: false },
      { text: "Flux Pro (1K)", included: false },
      { text: "Seedream 5.0 lite", included: false },
      { text: "Seedream 4.5", included: false },
      { text: "Unlimited Nano Banana", included: false },
      { text: "Kling 01 Image", included: false },
      { text: "GPT Image", included: false },
      { text: "Kling 3.0 FREE Gens", included: false },
    ],
  },
  {
    name: "Pro",
    description: "Great for regular users creating from time to time",
    monthlyPrice: 29,
    yearlyPrice: 23,
    savings: "Save $72 compared to monthly",
    color: "amber",
    gradient: null,
    badge: null,
    credits: "600 credits/mo.",
    creditsDetail: "= 300 Nano Banana Pro Generations",
    features: [
      { text: "Access to selected models only", included: true },
      { text: "Concurrent: up to 2 Videos, 2 Images, 1 Characters", included: true },
      { text: "Access to all features", included: true },
      { text: "Soul 2.0 fast FREE gens", included: true },
      { text: "Early access to advanced AI features", included: false },
      { text: "Lowest cost per credit", included: false },
      { text: "Discount for extra credits", included: false },
      { text: "Turn one model into 365 Unlimited", included: false },
    ],
    models: [
      "Kling 3.0 — FULL ACCESS",
      "Kling 3.0 Omni — FULL ACCESS",
      "Nano Banana Pro — FULL ACCESS",
    ],
    unlimited: [
      { text: "Unlimited Image generations", included: true },
      { text: "Flux Pro (1K)", included: true },
      { text: "Seedream 5.0 lite", included: true },
      { text: "Seedream 4.5", included: false },
      { text: "Unlimited Nano Banana", included: false },
      { text: "Kling 01 Image", included: false },
      { text: "GPT Image", included: false },
      { text: "Kling 3.0 FREE Gens", included: false },
    ],
  },
  {
    name: "Ultimate",
    description: "Great for regular users creating from time to time",
    monthlyPrice: 29,
    yearlyPrice: 23,
    savings: "Save $72 compared to monthly",
    color: "amber",
    gradient: "from-amber-900/60 to-yellow-900/40",
    badge: "MOST POPULAR",
    badgeColor: "bg-amber-500/20 text-amber-300",
    credits: "600 credits/mo.",
    creditsDetail: "= 300 Nano Banana Pro Generations",
    features: [
      { text: "Access to selected models only", included: true },
      { text: "Concurrent: up to 2 Videos, 2 Images, 1 Characters", included: true },
      { text: "Access to all features", included: true },
      { text: "Soul 2.0 fast FREE gens", included: true },
      { text: "Early access to advanced AI features", included: false },
      { text: "Lowest cost per credit", included: false },
      { text: "Discount for extra credits", included: false },
      { text: "Turn one model into 365 Unlimited", included: false },
    ],
    models: [
      "Kling 3.0 — FULL ACCESS",
      "Kling 3.0 Omni — FULL ACCESS",
      "Nano Banana Pro — FULL ACCESS",
    ],
    unlimited: [
      { text: "Unlimited Image generations", included: true },
      { text: "Flux Pro (1K)", included: true },
      { text: "Seedream 5.0 lite", included: true },
      { text: "Seedream 4.5", included: false },
      { text: "Unlimited Nano Banana", included: true },
      { text: "Kling 01 Image", included: false },
      { text: "GPT Image", included: false },
      { text: "Kling 3.0 FREE Gens", included: false },
    ],
  },
  {
    name: "Creator",
    description: "Great for regular users creating from time to time",
    monthlyPrice: 29,
    yearlyPrice: 23,
    savings: "Save $72 compared to monthly",
    color: "pink",
    gradient: "from-pink-900/60 to-rose-900/40",
    badge: "MOST POPULAR",
    badgeColor: "bg-pink-500/20 text-pink-300",
    credits: "600 credits/mo.",
    creditsDetail: "= 300 Nano Banana Pro Generations",
    features: [
      { text: "Access to selected models only", included: true },
      { text: "Concurrent: up to 2 Videos, 2 Images, 1 Characters", included: true },
      { text: "Access to all features", included: true },
      { text: "Soul 2.0 fast FREE gens", included: true },
      { text: "Early access to advanced AI features", included: false },
      { text: "Lowest cost per credit", included: false },
      { text: "Discount for extra credits", included: true },
      { text: "Turn one model into 365 Unlimited", included: false },
    ],
    models: [
      "Kling 3.0 — FULL ACCESS",
      "Kling 3.0 Omni — FULL ACCESS",
      "Nano Banana Pro — FULL ACCESS",
    ],
    unlimited: [
      { text: "Unlimited Image generations", included: true },
      { text: "Flux Pro (1K)", included: true },
      { text: "Seedream 5.0 lite", included: true },
      { text: "Seedream 4.5", included: true },
      { text: "Unlimited Nano Banana", included: true },
      { text: "Kling 01 Image", included: false },
      { text: "GPT Image", included: false },
      { text: "Kling 3.0 FREE Gens", included: false },
    ],
  },
];

/* ── Border color helpers ─────────────────────────────── */
function getBorderColor(plan) {
  if (plan.color === "amber") return "border-amber-500/30";
  if (plan.color === "pink") return "border-pink-500/30";
  return "border-zinc-800";
}

function getModelBg(plan) {
  if (plan.color === "amber") return "bg-amber-900/30 border-amber-700/40";
  if (plan.color === "pink") return "bg-pink-900/30 border-pink-700/40";
  return "bg-zinc-800/60 border-zinc-700/40";
}

function getModelPillBg(plan) {
  if (plan.color === "amber") return "bg-amber-800/40 text-amber-200";
  if (plan.color === "pink") return "bg-pink-800/40 text-pink-200";
  return "bg-zinc-700/60 text-zinc-300";
}

function getButtonStyle(plan) {
  if (plan.color === "amber")
    return "bg-amber-500/10 border-amber-500/30 text-amber-200 hover:bg-amber-500/20";
  if (plan.color === "pink")
    return "bg-pink-500/10 border-pink-500/30 text-pink-200 hover:bg-pink-500/20";
  return "bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700";
}

function getSavingsBg(plan) {
  if (plan.color === "amber") return "bg-amber-500/10 text-amber-300";
  if (plan.color === "pink") return "bg-pink-500/10 text-pink-300";
  return "bg-zinc-800 text-zinc-400";
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("yearly"); // "monthly" | "yearly"
  const [planType, setPlanType] = useState("individual");     // "individual" | "enterprise"

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-10">
      {/* ── Billing Header ─────────────────────────────── */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Billing</h1>
        <p className="text-zinc-400 text-sm">
          View and manage your plan, payments, and credit usage.
        </p>
      </div>

      {/* ── Subscription Details Card ──────────────────── */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 mb-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-lg font-semibold">Subscription Details</h2>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg border border-zinc-700 text-zinc-300 text-xs font-medium hover:bg-zinc-800 transition-colors cursor-pointer">
              Billing Details
            </button>
            <button className="px-4 py-2 rounded-lg border border-zinc-700 text-zinc-300 text-xs font-medium hover:bg-zinc-800 transition-colors cursor-pointer">
              Cancel Plan
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-t border-zinc-800 pt-6">
          <div>
            <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Current Plan</p>
            <p className="text-green-400 text-lg font-semibold">Starter</p>
            <p className="text-zinc-500 text-xs mt-1">Next billing date 2026-03-31</p>
          </div>
          <div>
            <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Remaining API Credits</p>
            <p className="text-zinc-500 text-xs mt-1">Monthly credits</p>
            <p className="text-white text-lg font-semibold">0/2,250</p>
          </div>
          <div>
            <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">&nbsp;</p>
            <p className="text-zinc-500 text-xs mt-1">Top-up credits</p>
            <p className="text-white text-lg font-semibold">3065</p>
          </div>
          <div>
            <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">&nbsp;</p>
            <p className="text-zinc-500 text-xs mt-1">Concurrency limit</p>
            <p className="text-white text-lg font-semibold">5</p>
          </div>
        </div>
      </div>

      {/* ── Choose Your Perfect Plan ───────────────────── */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 italic">
          Choose Your Perfect Plan
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
          Flexible pricing designed for individuals and businesses. Upgrade anytime as your needs grow.
        </p>
      </div>

      {/* Individual / Enterprise toggle */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center bg-zinc-900 rounded-full border border-zinc-800 p-0.5">
          <button
            onClick={() => setPlanType("individual")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer
              ${planType === "individual"
                ? "bg-zinc-800 text-white"
                : "text-zinc-500 hover:text-zinc-300"
              }`}
          >
            Individual
          </button>
          <button
            onClick={() => setPlanType("enterprise")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer
              ${planType === "enterprise"
                ? "bg-zinc-800 text-white"
                : "text-zinc-500 hover:text-zinc-300"
              }`}
          >
            Enterprise
          </button>
        </div>
      </div>

      {/* Monthly / Yearly toggle */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <span className={`text-sm font-medium ${billingCycle === "monthly" ? "text-white" : "text-zinc-500"}`}>
          Monthly
        </span>
        <button
          onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
          className="relative w-12 h-6 bg-zinc-800 rounded-full cursor-pointer transition-colors border border-zinc-700"
        >
          <span
            className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all
              ${billingCycle === "yearly" ? "left-6" : "left-0.5"}`}
          />
        </button>
        <span className={`text-sm font-medium ${billingCycle === "yearly" ? "text-white" : "text-zinc-500"}`}>
          Yearly
        </span>
        <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-0.5 rounded-md">
          52%OFF
        </span>
      </div>

      {/* ── Pricing Cards ──────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border overflow-hidden flex flex-col
              ${getBorderColor(plan)}
              ${plan.gradient
                ? `bg-gradient-to-b ${plan.gradient}`
                : "bg-zinc-900/60"
              }`}
          >
            {/* Badge */}
            {plan.badge && (
              <div className={`flex items-center justify-center gap-1.5 py-2 text-xs font-bold tracking-wider ${plan.badgeColor}`}>
                <Crown className="w-3.5 h-3.5" />
                {plan.badge}
              </div>
            )}

            <div className="p-5 flex-1 flex flex-col">
              {/* Plan name + desc */}
              <h3 className="text-white text-2xl font-bold mb-1">{plan.name}</h3>
              <p className="text-zinc-400 text-xs mb-4 leading-relaxed">{plan.description}</p>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-1">
                {billingCycle === "yearly" && plan.monthlyPrice !== plan.yearlyPrice && (
                  <span className="text-zinc-600 text-lg line-through font-medium">
                    ${plan.monthlyPrice}
                  </span>
                )}
                <span className="text-white text-3xl font-bold">
                  ${billingCycle === "yearly" ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-zinc-500 text-sm">/month</span>
              </div>
              <p className="text-zinc-500 text-xs mb-5">Billed for 12 months</p>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-xl text-sm font-semibold border transition-all cursor-pointer mb-5
                  ${getButtonStyle(plan)}`}
              >
                Get Started
              </button>

              {/* Savings badge */}
              {plan.savings ? (
                <div className={`inline-flex items-center gap-1.5 self-start text-xs font-medium px-3 py-1.5 rounded-full mb-5 ${getSavingsBg(plan)}`}>
                  <Sparkles className="w-3 h-3" />
                  {plan.savings}
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 self-start text-xs font-medium px-3 py-1.5 rounded-full mb-5 bg-zinc-800 text-zinc-500">
                  <Sparkles className="w-3 h-3" />
                  No difference compared to monthly
                </div>
              )}

              {/* Credits */}
              <div className="mb-5">
                <p className="text-white text-sm font-medium flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                  {plan.credits}
                </p>
                <p className="text-zinc-500 text-xs mt-0.5 ml-5">{plan.creditsDetail}</p>
              </div>

              {/* Features list */}
              <div className="space-y-2.5 mb-6">
                {plan.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2">
                    {f.included ? (
                      <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-zinc-600 mt-0.5 flex-shrink-0" />
                    )}
                    <span className={`text-xs leading-relaxed ${f.included ? "text-zinc-300" : "text-zinc-500"}`}>
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Full Access to Best Models */}
              <div className={`rounded-xl border p-3.5 mb-6 ${getModelBg(plan)}`}>
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-1.5">
                  <Lock className="w-3 h-3" />
                  FULL ACCESS TO BEST MODELS
                </p>
                <div className="space-y-1.5">
                  {plan.models.map((model, i) => (
                    <div key={i} className={`text-xs font-medium px-3 py-2 rounded-lg ${getModelPillBg(plan)}`}>
                      {model}
                    </div>
                  ))}
                </div>
              </div>

              {/* Unlimited Access */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3">
                  UNLIMITED ACCESS
                </p>
                <div className="space-y-2.5">
                  {plan.unlimited.map((u, i) => (
                    <div key={i} className="flex items-start gap-2">
                      {u.included ? (
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-zinc-600 mt-0.5 flex-shrink-0" />
                      )}
                      <span className={`text-xs leading-relaxed ${u.included ? "text-zinc-300" : "text-zinc-500"}`}>
                        {u.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
