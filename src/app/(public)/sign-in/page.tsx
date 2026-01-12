import Image from "next/image";
import Link from "next/link";
import SignHeader from "@/app/(ui)/sessions/header";

export default function Login() {
  return (
    <div className='w-dvw h-dvh relative bg-[#010001] text-[#e7f2f8]'>
      <SignHeader />
      <div className='flex flex-col gap-8 h-full w-full items-center justify-center'>
        <h1 className='text-2xl font-semibold tracking-wider'>Sign In</h1>
        <div className='flex flex-col items-center w-96 gap-4'>
          <button className='flex justify-center items-center gap-4 w-full h-12 rounded-lg border border-neutral-700 bg-[#090909] hover:bg-neutral-900 transition-all duration-150'>
            <Image
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png'
              alt='googleIcon'
              width={20}
              height={20}
            />
            <span className='font-semibold'>Login with Google</span>
          </button>
          <button className='flex justify-center items-center gap-4 w-full h-12 rounded-lg border border-neutral-700 bg-[#090909] hover:bg-neutral-900 transition-all duration-150'>
            <div className='size-8'>
              <svg viewBox='0 0 16 16'>
                <path
                  d='M12.4734 12.0221C11.92 12.8488 11.3334 13.6555 10.44 13.6688C9.54671 13.6888 9.26004 13.1421 8.24671 13.1421C7.22671 13.1421 6.91337 13.6555 6.06669 13.6888C5.19335 13.7221 4.53335 12.8088 3.97335 12.0021C2.83335 10.3555 1.96002 7.32213 3.13335 5.28213C3.71335 4.2688 4.75335 3.6288 5.88002 3.6088C6.73337 3.59547 7.54671 4.1888 8.07337 4.1888C8.59337 4.1888 9.58004 3.47547 10.6134 3.58214C11.0467 3.60214 12.26 3.75547 13.04 4.90213C12.98 4.94213 11.5934 5.75547 11.6067 7.44213C11.6267 9.4555 13.3734 10.1288 13.3934 10.1355C13.3734 10.1821 13.1134 11.0955 12.4734 12.0221ZM8.66671 1.35547C9.15337 0.80214 9.96004 0.38214 10.6267 0.35547C10.7134 1.13547 10.4 1.92214 9.93337 2.48214C9.47337 3.0488 8.71337 3.4888 7.96671 3.4288C7.86671 2.66214 8.24004 1.86214 8.66671 1.35547Z'
                  fill='currentColor'
                ></path>
              </svg>
            </div>
            <span className='font-semibold'>Login with Apple</span>
          </button>
          <div className='flex items-center justify-center gap-2 w-full'>
            <div className='h-px w-full bg-neutral-700'></div>
            <span className=''>or</span>
            <div className='h-px w-full bg-neutral-700'></div>
          </div>
          <form className='w-full flex flex-col gap-4 items-center'>
            {/* <h2 className=''>Enter with email</h2> */}
            <label className='w-full'>
              <input
                placeholder='email@planici.com'
                autoComplete='email'
                aria-autocomplete='inline'
                className='w-full rounded-lg border border-neutral-700 bg-[#090909] h-12 px-3'
              />
            </label>
            <Link
              href={`/`}
              type='submit'
              className='flex justify-center items-center gap-4 w-full h-12 rounded-lg border border-neutral-700 bg-foreground text-[#090909] hover:bg-foreground/90 transition-all duration-150'
            >
              Continue with Email
            </Link>
          </form>
          <span>
            Don&apos;t have an account?{" "}
            <Link
              className='text-brand-pink-200 font-medium hover:text-brand-pink-100 transition-all duration-150'
              href={"/register"}
            >
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
