"use client";
import SignHeader from "@/app/(ui)/sessions/header";
import { ChangeEvent, useState, useRef, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import AuthButton from "@/app/(ui)/AuthBtn";
import DButton from "@/app/(ui)/DefaultBtn";
import { Mail, MoveLeft, MoveRight } from "lucide-react";

type PlanOption = "pro" | "trial";

export default function SignIn() {
  const [hasText, setHasText] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<PlanOption | null>(null);
  const [step, setStep] = useState<"plan" | "account" | "continue-email">(
    "plan"
  );

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

  const renderStep = () => {
    if (step == "plan") {
      return (
        <motion.div
          key='plan-selection'
          exit={{ opacity: 0, y: -8 }}
          className='w-full flex flex-col items-center gap-10'
        >
          <h1 className='text-2xl md:text-3xl text-neutral-300 font-semibold'>
            How much easier can it get?
          </h1>
          <div className='flex flex-col w-full gap-2'>
            <span className='font-medium text-neutral-600'>
              What do you need?
            </span>
            <ul className='flex flex-col border border-neutral-700 w-full rounded-lg'>
              <li
                role='option'
                aria-selected={selectedPlan === "pro"}
                tabIndex={0}
                className='flex justify-between px-3 py-2 border-b border-neutral-700 rounded-t-lg hover:bg-[#010001] transition-all duration-200 ease-out focus:ring-2 focus:ring-brand-pink-300 focus:outline-none cursor-pointer'
                onClick={() => setSelectedPlan("pro")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedPlan("pro");
                  }
                }}
              >
                <div className='flex items-center justify-between w-full select-none'>
                  <div className='flex items-center gap-3 text-neutral-600 relative whitespace-nowrap'>
                    <div
                      className={clsx(
                        `size-3 rounded-full transition-all duration-200`,
                        selectedPlan === "pro"
                          ? `bg-brand-pink-200 ring-1 ring-brand-pink-200`
                          : `bg-neutral-800`
                      )}
                      aria-hidden='true'
                    ></div>
                    <span
                      className={clsx(
                        `select-none transition-all duration-150 ease-out`,
                        selectedPlan === "pro"
                          ? "text-neutral-300"
                          : "text-neutral-600"
                      )}
                    >
                      I need a potent planner
                    </span>
                  </div>
                  <div className='px-2 py-0.5 rounded-full text-[12px] flex items-center justify-center bg-brand-pink-300 font-medium'>
                    Pro
                  </div>
                </div>
              </li>
              <li
                role='option'
                aria-selected={selectedPlan === "trial"}
                tabIndex={0}
                className='flex justify-between px-3 py-2 rounded-b-lg hover:bg-[#010001] transition-all duration-200 ease-out focus:ring-2 focus:ring-brand-pink-300 focus:outline-none cursor-pointer'
                onClick={() => setSelectedPlan("trial")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedPlan("trial");
                  }
                }}
              >
                <div className='flex items-center justify-between w-full select-none'>
                  <div className='flex items-center gap-3 text-neutral-600 relative whitespace-nowrap'>
                    <div
                      className={clsx(
                        `size-3 rounded-full transition-all duration-200`,
                        selectedPlan === "trial"
                          ? `bg-brand-pink-200 ring-1 ring-brand-pink-200`
                          : `bg-neutral-800`
                      )}
                      aria-hidden='true'
                    ></div>
                    <span
                      className={clsx(
                        `select-none transition-all duration-150 ease-out`,
                        selectedPlan === "trial"
                          ? "text-neutral-300"
                          : "text-neutral-600"
                      )}
                    >
                      I'll think about it later
                    </span>
                  </div>
                  <div className='px-2 py-0.5 rounded-full text-[12px] flex items-center justify-center bg-neutral-700 font-medium'>
                    Trial
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {selectedPlan && (
            <motion.div
              className='w-full flex flex-col justify-center items-center gap-10'
              key='name'
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className='w-full flex flex-col gap-3'>
                <label className='flex flex-col items-start gap-2 w-full text-neutral-600 hover:cursor-text'>
                  Your Name{""}
                  <input
                    ref={nameInput}
                    className='px-2 w-full h-12 rounded-lg outline-none focus:outline-none focus:ring-2 focus:ring-neutral-600 transition-all duration-200 ease-out border border-neutral-700 hover:border-neutral-600 focus:border-neutral-400 text-neutral-300'
                    autoComplete='name'
                    onChange={toggleText}
                    title='fill out this field'
                  />
                </label>
                <button
                  className={clsx(
                    `flex justify-center items-center w-full h-12 rounded-lg font-medium text-sm transition-all duration-150 ease-out`,
                    canContinue
                      ? `bg-neutral-100 text-neutral-900 hover:bg-neutral-300`
                      : ` bg-neutral-700 text-neutral-600`
                  )}
                  disabled={!canContinue}
                  onClick={() => setStep("account")}
                >
                  Continue
                </button>
              </div>

              <span className='text-sm text-neutral-600 text-center md:text-start'>
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

          <span className='text-sm text-neutral-600'>
            Already have an account?{" "}
            <Link
              href={`/sign-in`}
              className='text-neutral-300 font-medium transition-all duration-200 hover:text-neutral-500'
            >
              Sign in
            </Link>
          </span>
        </motion.div>
      );
    }
    if (step === "account") {
      return (
        <motion.div
          key='account-creationg'
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className='w-full flex flex-col items-center gap-6'
        >
          <h1 className='text-2xl text-center md:text-3xl text-neutral-300 font-semibold'>
            Let's create
            <br /> Your account
          </h1>
          <div className='flex w-full flex-col gap-2'>
            <AuthButton
              text='Continue with Google'
              aria-label='Sign in with Google'
              icon={
                <Image
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png'
                  alt='googleIcon'
                  width={20}
                  height={20}
                />
              }
            />
            <AuthButton
              text='Continue with Apple'
              aria-label='Sign Up With Google'
              icon={
                <svg viewBox='0 0 16 16'>
                  <path
                    d='M12.4734 12.0221C11.92 12.8488 11.3334 13.6555 10.44 13.6688C9.54671 13.6888 9.26004 13.1421 8.24671 13.1421C7.22671 13.1421 6.91337 13.6555 6.06669 13.6888C5.19335 13.7221 4.53335 12.8088 3.97335 12.0021C2.83335 10.3555 1.96002 7.32213 3.13335 5.28213C3.71335 4.2688 4.75335 3.6288 5.88002 3.6088C6.73337 3.59547 7.54671 4.1888 8.07337 4.1888C8.59337 4.1888 9.58004 3.47547 10.6134 3.58214C11.0467 3.60214 12.26 3.75547 13.04 4.90213C12.98 4.94213 11.5934 5.75547 11.6067 7.44213C11.6267 9.4555 13.3734 10.1288 13.3934 10.1355C13.3734 10.1821 13.1134 11.0955 12.4734 12.0221ZM8.66671 1.35547C9.15337 0.80214 9.96004 0.38214 10.6267 0.35547C10.7134 1.13547 10.4 1.92214 9.93337 2.48214C9.47337 3.0488 8.71337 3.4888 7.96671 3.4288C7.86671 2.66214 8.24004 1.86214 8.66671 1.35547Z'
                    fill='currentColor'
                  ></path>
                </svg>
              }
            />
            <div className='flex justify-center items-center gap-2 w-full mt-4'>
              <button
                onClick={() => setStep("continue-email")}
                className='flex gap-2 items-center text-brand-pink-300 font-medium border-box-border border-b border-[rgba(0,0,0,0)] hover:border-brand-pink-300'
              >
                Enter with email
                <MoveRight />
              </button>
            </div>
          </div>
        </motion.div>
      );
    }
    return (
      <motion.div
        key='account-email'
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        className='w-full flex flex-col items-center gap-6'
      >
        <h1 className='text-2xl text-center md:text-3xl text-neutral-300 font-semibold'>
          Sign up for Planici
        </h1>
        <input
          placeholder='Your email'
          ref={nameInput}
          className='px-2 w-full h-12 rounded-lg outline-none focus:outline-none focus:ring-2 focus:ring-neutral-600 transition-all duration-200 ease-out border border-neutral-700 hover:border-neutral-600 focus:border-neutral-400 text-neutral-300'
          autoComplete='name'
          onChange={toggleText}
          title='fill out this field'
        />
        <DButton text='Continue with Email' icon={<Mail size={16} />} />
        <button
          onClick={() => setStep("account")}
          className='flex gap-2 items-center text-brand-pink-300 font-medium border-box-border border-b border-[rgba(0,0,0,0)] hover:border-brand-pink-300!'
        >
          <MoveLeft />
          Other Signup Options
        </button>
      </motion.div>
    );
  };

  return (
    <div className='w-dvw h-dvh relative bg-[#010001] text-[#e7f2f8]'>
      <SignHeader />
      {/* Nome Sobrenome CPF Email Numero(opc) Senha+Conf Nome_Empresa Tipo_Empresa Tamanho_Empresa  */}
      <div className='w-full h-dvh flex justify-center items-center'>
        <div className='w-2xl flex flex-col justify-center items-center gap-10 px-5 md:px-20 py-20 rounded-2xl border border-neutral-700 bg-[#090909] mx-4 md:m-0 text-sm md:text-base'>
          <AnimatePresence mode='wait'>{renderStep()}</AnimatePresence>
        </div>
      </div>
    </div>
  );
}
