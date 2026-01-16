export default function Timeline() {
  const PX_PER_MINUTE = 2;

  const eventStart = { hours: 9, minutes: 15 };
  const top = (eventStart.hours * 60 + eventStart.minutes) * PX_PER_MINUTE;

  const DAY_HEIGHT = 24 * 60 * PX_PER_MINUTE;
  const GUTTER_W = 64;

  const hourLabel = (h: number) => {
    const hour12 = h % 12 === 0 ? 12 : h % 12;
    const ampm = h < 12 ? "AM" : "PM";
    return `${hour12} ${ampm}`;
  };

  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className='h-[70vh] pt-4 overflow-y-auto w-full'>
      <div className='relative w-full' style={{ height: DAY_HEIGHT }}>
        {hours.map((h) => {
          const top = h * 60 * PX_PER_MINUTE;

          return (
            <div
              key={h}
              className='absolute left-0 top-0 w-full'
              style={{ top }}
            >
              <div className='flex items-start w-full'>
                <div className='px-2 text-left text-xs text-neutral-500 select-none'>
                  <span className='-translate-y-2.5 inline-block font-semibold text-sm'>
                    {hourLabel(h)}
                  </span>
                </div>
                <div className='flex-1 border-t h-1 w-full border-neutral-300' />
              </div>
            </div>
          );
        })}
        <div className='absolute left-0 right-0 top-0'>
          <div className='flex'>
            <div style={{ width: GUTTER_W }}></div>
            <div className='relative flex-1'>
              <div
                className={`flex px-2 ${15 * PX_PER_MINUTE > 40 ? "items-start" : "items-center"} font-semibold w-full rounded-lg border-l-4 border-red-400 bg-foreground/15 absolute`}
                style={{
                  height: 15 * PX_PER_MINUTE,
                  top: 8 * 60 * PX_PER_MINUTE,
                }}
              >
                <div>
                  <span className='text-red-500'>teste</span>
                  {15 * PX_PER_MINUTE > 60 && (
                    <p className='text-xs text-gray-600'>Descrição sla</p>
                  )}
                </div>
              </div>
              <div
                className={`flex px-2  ${15 * PX_PER_MINUTE > 40 ? "items-start" : "items-center"} font-semibold w-full rounded-lg border-l-4 border-red-400 bg-foreground/15 absolute`}
                style={{
                  height: 45 * PX_PER_MINUTE,
                  top: (9 * 60 + 15) * PX_PER_MINUTE,
                }}
              >
                <div>
                  <span className='text-red-500'>teste</span>
                  {15 * PX_PER_MINUTE >= 45 && (
                    <p className='text-xs text-red-500 font-normal'>
                      Descrição top
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
