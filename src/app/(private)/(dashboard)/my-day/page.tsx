import Timeline from "@/app/(ui)/dashboard/VerticalTimeline";
import Sidebar from "@/app/(ui)/Sidebar";
import { ChevronDown, SquarePen } from "lucide-react";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className='w-dvw h-dvh bg-background text-foreground'>
      {/* <Sidebar /> */}
      {/* Content */}
      <div className='w-full h-full flex flex-col'>
        {/* text */}
        <div className='flex justify-between items-center w-full px-4 py-2'>
          {/* elft */}
          <div className='flex w-full gap-3 items-center justify-start'>
            {/* Pfp group */}
            <div className='relative'>
              {/* TODO:CHANGE THIS */}
              <div className='size-10 rounded-lg bg-black/50 dark:bg-white/50'></div>
              {/* <Image src={'/'} alt="pfp" className="size-10 rounded-lg"/> */}
            </div>
            <span className='font-semibold hidden lg:block'>
              Username Username
            </span>
          </div>
          <SquarePen className='text-foreground hidden lg:block' />
          {/* Agendamento */}
          <button className='px-3 py-2 gap-2 flex items-center justify-center rounded-lg font-medium text-[#f7f7f7] bg-brand-pink-200'>
            Agendamento
            <ChevronDown />
          </button>
        </div>
        {/* Content-Header */}
        <div className='flex w-full justify-between items-center px-4 py-2'>
          <h1 className='font-semibold'>Agendamentos da Semana</h1>
          <button className='px-3 py-1.5 bg-brand-pink-200 text-[#f7f7f7] rounded-lg font-medium'>
            Escolher Data
          </button>
        </div>
        {/* Content */}
        <div className='flex w-full'>
          {/* Sidebar */}
          {/* TODO: Change logic to conditionally render instead of media query */}
          <aside className='hidden lg:block'></aside>
          {/* Content */}
          <div className='flex flex-col w-full'>
            {/* Desktop-Week */}
            <div className='w-full flex flex-col px-10 gap-2'>
              {/* left */}
              <div className='gap-12 flex justify-center invisible lg:visible'></div>
              {/* week */}
              <ul className='flex justify-center gap-2 py-2 '>
                <li className='flex flex-col items-center justify-center gap-1.5 w-9'>
                  <h2 className='font-bold'>Dom</h2>
                  <span className='lg:py-24 gap-2.5 size-8 rounded-full text-center flex items-center justify-center font-bold text-neutral-500'>
                    5
                  </span>
                </li>
                <li className='flex flex-col items-center justify-center gap-1.5 w-9'>
                  <h2 className='font-bold'>Seg</h2>
                  <span className='lg:py-24 gap-2.5 size-8 rounded-full text-center flex items-center justify-center font-bold text-neutral-500'>
                    6
                  </span>
                </li>
                <li className='flex flex-col items-center justify-center gap-1.5 w-9'>
                  <h2 className='font-bold'>Ter</h2>
                  <span className='lg:py-24 gap-2.5 size-8 rounded-full text-center flex items-center justify-center font-bold text-neutral-500'>
                    7
                  </span>
                </li>
                <li className='flex flex-col items-center justify-center gap-1.5 w-9'>
                  <h2 className='font-bold'>Qua</h2>
                  <span className='lg:py-24 gap-2.5 size-8 rounded-full text-center flex items-center justify-center font-bold text-neutral-500'>
                    8
                  </span>
                </li>
                <li className='flex flex-col items-center justify-center gap-1.5 w-9'>
                  <h2 className='font-bold'>Qui</h2>
                  <span className='lg:py-24 gap-2.5 size-8 rounded-full text-center flex items-center justify-center font-bold text-neutral-500'>
                    9
                  </span>
                </li>
                <li className='flex flex-col items-center justify-center gap-1.5 w-9'>
                  <h2 className='font-bold'>Sex</h2>
                  <span className='lg:py-24 gap-2.5 size-8 rounded-full text-center flex items-center justify-center font-bold text-[#f7f7f7] bg-brand-pink-200'>
                    10
                  </span>
                </li>
                <li className='flex flex-col items-center justify-center gap-1.5 w-9'>
                  <h2 className='font-bold'>Sab</h2>
                  <span className='lg:py-24 gap-2.5 size-8 rounded-full text-center flex items-center justify-center font-bold text-neutral-500'>
                    11
                  </span>
                </li>
              </ul>
            </div>
            {/* Separator */}
            <div className='h-1 w-full bg-neutral-200'></div>
            {/* Bottom */}
            <div className='flex flex-col gap-5 py-2 px-4 items-start'>
              <h2 className='font-semibold'>3 Consultas Agendadas</h2>
              <Timeline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
