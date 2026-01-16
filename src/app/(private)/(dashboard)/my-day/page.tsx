import Timeline from "@/app/(ui)/dashboard/VerticalTimeline";
import Sidebar from "@/app/(ui)/Sidebar";
import { ChevronDown, Plus, SquarePen } from "lucide-react";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className='w-dvw h-dvh bg-background text-foreground'>
      {/* <Sidebar /> */}
      <div className='hidden lg:flex w-64 h-dvh gap-3 py-3 px-4 bg-neutral-200 absolute top-0 left-0'>
        {/* text */}
        <div className='flex justify-between items-center w-full px-4 py-2'>
          {/* elft */}
          <div className='flex min-w-0 flex-1 gap-3 items-center justify-start'>
            {/* Pfp group */}
            <div className='relative'>
              {/* TODO:CHANGE THIS */}
              <div className='size-10 rounded-lg bg-black/50 dark:bg-white/50'></div>
              {/* <Image src={'/'} alt="pfp" className="size-10 rounded-lg"/> */}
            </div>
            <span className='font-semibold hidden lg:block text-ellipsis truncate min-w-0'>
              Username Username
            </span>
          </div>
          <SquarePen className='text-foreground hidden lg:block' />
          {/* Agendamento */}
          <button className='px-3 py-2 gap-2 flex items-center justify-center rounded-lg font-medium text-[#f7f7f7] bg-brand-pink-200 lg:hidden'>
            Agendamento
            <ChevronDown />
          </button>
        </div>
        {/* Header */}
        <div className='lg:hidden'></div>
        {/* options */}
        <div className='flex flex-col justify-between items-start'>
          {/* top */}
          <div className='flex flex-col gap-3 flex-1'></div>
        </div>
      </div>
      {/* Content */}
      <div className='w-full h-full flex flex-col lg:pl-64 lg:pt-2'>
        {/* text */}
        <div className='flex justify-between items-center w-full px-4 py-2 lg:hidden'>
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
          <h1 className='font-semibold lg:text-3xl lg:size-fit'>
            Agendamentos da Semana
          </h1>
          <button className='px-3 py-1.5 bg-brand-pink-200 text-[#f7f7f7] rounded-lg font-medium lg:hidden'>
            Escolher Data
          </button>
        </div>
        {/* Content */}
        <div className='flex w-full h-full'>
          {/* Sidebar */}
          {/* TODO: Change logic to conditionally render instead of media query */}
          <aside className='hidden lg:flex flex-col h-full justify-start px-6 py-10 bg-neutral-100 min-w-72'>
            {/* top-top */}
            <div className='flex flex-col w-full gap-5 p-4 items-start rounded-lg border-2 border-brand-pink-200'>
              <h2 className='text-neutral-900 font-semibold'>Ações Rápidas</h2>
              <div className='flex flex-col gap-2 w-full'>
                <button className='flex items-center w-full justify-center gap-1 py-2 rounded-lg bg-brand-pink-200 text-[#f7f7f7] text-nowrap font-medium'>
                  <Plus className='size-5' />
                  Criar Agendamento
                </button>
                <button className='flex items-center w-full justify-center gap-1 py-2 rounded-lg border-2 border-brand-pink-200 text-no-wrap text-brand-pink-200 text-nowrap font-medium'>
                  <Plus className='size-5' />
                  Criar Plano
                </button>
              </div>
            </div>
            {/*calendar */}
            <div></div>
          </aside>
          {/* Content */}
          <div className='flex flex-col w-full'>
            {/* Desktop-Week */}
            <div className='w-full flex flex-col px-10 gap-2 lg:items-start lg:bg-neutral-100'>
              {/* left */}
              <div className='gap-12 justify-center items-center hidden lg:flex pt-2'>
                <h2 className='text-3xl font-medium text-neutral-900'>
                  09 de Fevereiro, 2025
                </h2>
                <div className='flex items-center justify-center p-1 rounded-xl bg-neutral-200'>
                  <button className='text-neutral-900 p-1 w-20 rounded-lg'>
                    mês
                  </button>
                  <button className='text-neutral-900 font-medium p-1 w-20 rounded-lg bg-neutral-400'>
                    semana
                  </button>
                  <button className='text-neutral-900 p-1 w-20 rounded-lg'>
                    dia
                  </button>
                </div>
              </div>
              {/* week */}
              <ul className='flex justify-center gap-2 py-2 lg:justify-end lg:w-full'>
                <li className='flex flex-col items-center justify-center gap-1.5 w-9 lg:min-w-32 xl:min-w-40 lg:px-8 lg:py-2 lg:rounded-lg lg:bg-neutral-200 lg:items-start lg:gap-0'>
                  <h2 className='font-bold lg:font-medium'>Dom</h2>
                  <span className='gap-2.5 size-8 lg:h-fit rounded-full text-center flex items-center justify-center font-bold text-neutral-500 lg:font-bold lg:text-2xl lg:size-fit'>
                    5
                  </span>
                </li>
                <li className='flex flex-col items-center justify-center gap-1.5 w-9 lg:min-w-32 xl:min-w-40 lg:px-8 lg:py-2 lg:rounded-lg lg:bg-neutral-200 lg:items-start lg:gap-0'>
                  <h2 className='font-bold lg:font-medium'>Seg</h2>
                  <span className='gap-2.5 size-8 lg:h-fit rounded-full text-center flex items-center justify-center font-bold text-neutral-500 lg:font-bold lg:text-2xl lg:size-fit'>
                    6
                  </span>
                </li>
                <li className='flex flex-col items-center justify-center gap-1.5 w-9 lg:min-w-32 xl:min-w-40 lg:px-8 lg:py-2 lg:rounded-lg lg:bg-neutral-200 lg:items-start lg:gap-0'>
                  <h2 className='font-bold lg:font-medium'>Ter</h2>
                  <span className='gap-2.5 size-8 lg:h-fit rounded-full text-center flex items-center justify-center font-bold text-neutral-500 lg:font-bold lg:text-2xl lg:size-fit'>
                    7
                  </span>
                </li>
                <li className='flex flex-col items-center justify-center gap-1.5 w-9 lg:min-w-32 xl:min-w-40 lg:px-8 lg:py-2 lg:rounded-lg lg:bg-neutral-200 lg:items-start lg:gap-0'>
                  <h2 className='font-bold lg:font-medium'>Qua</h2>
                  <span className='gap-2.5 size-8 lg:h-fit rounded-full text-center flex items-center justify-center font-bold text-neutral-500 lg:font-bold lg:text-2xl lg:size-fit'>
                    8
                  </span>
                </li>
                <li className='flex flex-col items-center justify-center gap-1.5 w-9 lg:min-w-32 xl:min-w-40 lg:px-8 lg:py-2 lg:rounded-lg lg:bg-neutral-200 lg:items-start lg:gap-0'>
                  <h2 className='font-bold lg:font-medium'>Qui</h2>
                  <span className='gap-2.5 size-8 lg:h-fit rounded-full text-center flex items-center justify-center font-bold text-neutral-500 lg:font-bold lg:text-2xl lg:size-fit'>
                    9
                  </span>
                </li>
                <li className='flex flex-col items-center justify-center gap-1.5 w-9 lg:min-w-32 xl:min-w-40 lg:px-8 lg:py-2 lg:rounded-lg lg:bg-neutral-200 lg:items-start lg:gap-0'>
                  <h2 className='font-bold lg:font-medium'>Sex</h2>
                  <span className='gap-2.5 size-8 lg:h-fit rounded-full text-center flex items-center justify-center font-bold text-neutral-500 lg:font-bold lg:text-2xl lg:size-fit'>
                    10
                  </span>
                </li>
                <li className='flex flex-col items-center justify-center gap-1.5 w-9 lg:min-w-32 xl:min-w-40 lg:px-8 lg:py-2 lg:rounded-lg lg:bg-neutral-200 lg:items-start lg:gap-0'>
                  <h2 className='font-bold lg:font-medium'>Sáb</h2>
                  <span className='gap-2.5 size-8 lg:h-fit rounded-full text-center flex items-center justify-center font-bold text-neutral-500 lg:font-bold lg:text-2xl lg:size-fit'>
                    11
                  </span>
                </li>
              </ul>
            </div>
            {/* Separator */}
            <div className='h-1 w-full bg-neutral-200 lg:hidden'></div>
            {/* Bottom */}
            <div className='flex flex-col gap-5 py-2 px-4 items-start rounded-2xl'>
              <h2 className='font-semibold'>3 Consultas Agendadas</h2>
              <Timeline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
