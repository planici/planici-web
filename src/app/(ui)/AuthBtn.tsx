export default function AuthButton() {
  return (
    <button className='flex justify-center items-center gap-4 w-full h-12 rounded-lg border border-neutral-700 bg-[#090909] hover:bg-neutral-900 transition-all duration-150'>
      {/* <Image
                              src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png'
                              alt='googleIcon'
                              width={20}
                              height={20}
                            /> */}
      <span className='font-semibold'>Login with Google</span>
    </button>
  );
}
