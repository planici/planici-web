"use client";
import SignHeader from "@/app/(ui)/sessions/header";
import { ChangeEvent, useState, useRef, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

type PlanOption = "pro" | "trial";

export default function SignIn() {
  const [hasText, setHasText] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<PlanOption | null>(null);

  const toggleText = (e: ChangeEvent<HTMLInputElement>) => {
    setHasText(e.target.value);
  };

  const nameInput = useRef<HTMLInputElement | null>(null);

  const canContinue = hasText.length > 0 && selectedPlan !== null;

  useEffect(() => {
    if (selectedPlan) {
      requestAnimationFrame(() => {
        nameInput.current?.focus();
      });
    }
  }, [selectedPlan]);

  return (
    <div className='w-dvw h-dvh relative bg-[#010001] text-[#e7f2f8]'>
      <SignHeader />
      {/* Nome Sobrenome CPF Email Numero(opc) Senha+Conf Nome_Empresa Tipo_Empresa Tamanho_Empresa  */}
      <div className='w-full h-dvh flex justify-center items-center'>
        <div className='w-2xl flex flex-col justify-center items-center gap-10 px-20 py-20 rounded-2xl border border-neutral-700 bg-[#090909]'>
          <h1 className='text-2xl text-neutral-300 font-semibold'>
            How much easier can it get?
          </h1>
          <div className='flex flex-col w-full gap-2'>
            <span className='font-medium text-neutral-600'>
              What do you need?
            </span>
            <ul className='flex flex-col border border-neutral-700 w-full rounded-lg'>
              <li className='flex justify-between px-3 py-2 border-b border-neutral-700 rounded-t-lg hover:bg-[#010001] transition-all duration-200 ease-out'>
                <input
                  type='radio'
                  className='sr-only peer'
                  name='plan'
                  id='plan-pro'
                  value='pro'
                  checked={selectedPlan === "pro"}
                  onChange={() => setSelectedPlan("pro")}
                />
                <label
                  htmlFor='plan-pro'
                  className='flex items-center justify-between w-full cursor-pointer select-none'
                >
                  <div className='flex items-center gap-5 text-neutral-600 relative whitespace-nowrap'>
                    <div
                      className={clsx(
                        `size-3 rounded-full focus:outline-2 outline-brand-pink-200 transition-all duration-200`,
                        selectedPlan === "pro"
                          ? `bg-brand-pink-200 ring-1 ring-brand-pink-200`
                          : `bg-neutral-800`
                      )}
                    ></div>
                    <span
                      className={clsx(
                        `select-none transition-all duration-150 ease-out`,
                        selectedPlan === "pro"
                          ? "text-neutral-300"
                          : "text-neutral-600"
                      )}
                    >
                      I need a potent planner for my business
                    </span>
                  </div>
                  <div className='px-2 py-0.5 rounded-full text-[12px] flex items-center justify-center bg-brand-pink-300 font-medium'>
                    Pro
                  </div>
                </label>
              </li>
              <li className='flex justify-between px-3 py-2 rounded-b-lg hover:bg-[#010001] transition-all duration-200 ease-out'>
                <input
                  type='radio'
                  className='sr-only peer'
                  name='plan'
                  id='plan-trial'
                  value='trial'
                  checked={selectedPlan === "trial"}
                  onChange={() => setSelectedPlan("trial")}
                />
                <label
                  htmlFor='plan-trial'
                  className='flex items-center justify-between w-full cursor-pointer select-none'
                >
                  <div className='flex items-center gap-5 text-neutral-600 relative whitespace-nowrap'>
                    <div
                      className={clsx(
                        `size-3 rounded-full focus:outline-2 outline-brand-pink-200 transition-all duration-200`,
                        selectedPlan === "trial"
                          ? `bg-brand-pink-200 ring-1 ring-brand-pink-200`
                          : `bg-neutral-800`
                      )}
                    ></div>
                    <span
                      className={clsx(
                        `select-none transition-all duration-150 ease-out`,
                        selectedPlan === "trial"
                          ? "text-neutral-300"
                          : "text-neutral-600"
                      )}
                    >
                      I&apos;ll start on a free trial
                    </span>
                  </div>
                  <div className='px-2 py-0.5 rounded-full text-[12px] flex items-center justify-center bg-neutral-600 font-medium'>
                    Relaxed
                  </div>
                </label>
              </li>
            </ul>
          </div>
          <AnimatePresence>
            {selectedPlan && (
              <motion.div
                className='w-full flex flex-col justify-center items-center gap-10'
                key='name'
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className='w-full flex flex-col gap-3'>
                  <label className='flex flex-col items-start gap-2 w-full text-neutral-600 hover:cursor-text'>
                    Your Name
                    <div className='w-full h-12 rounded-lg border border-neutral-700 hover:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-600 transition-all duration-200 ease-out'>
                      <input
                        ref={nameInput}
                        className='px-2 w-full h-full rounded-lg outline-none focus:outline-none focus:ring-2 focus:ring-neutral-600 transition-all duration-200 ease-out'
                        autoComplete='name'
                        onChange={toggleText}
                      />
                    </div>
                  </label>
                  <button
                    className={clsx(
                      `flex justify-center items-center w-full h-12 rounded-lg font-medium text-sm transition-all duration-150 ease-out`,
                      canContinue
                        ? `bg-neutral-100 text-neutral-900 hover:bg-neutral-300`
                        : ` bg-neutral-700 text-neutral-600`
                    )}
                  >
                    Continue
                  </button>
                </div>

                <span className='text-sm text-neutral-600'>
                  By joining, you agree to our{" "}
                  <Link
                    href={`/`}
                    className='text-neutral-300 font-medium transition-all duration-200 hover:text-neutral-500'
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href={`/`}
                    className='text-neutral-300 font-medium transition-all duration-200 hover:text-neutral-500'
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </motion.div>
            )}
          </AnimatePresence>
          <span className='text-sm text-neutral-600'>
            Already have an account?{" "}
            <Link
              href={`/sign-in`}
              className='text-neutral-300 font-medium transition-all duration-200 hover:text-neutral-500'
            >
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
