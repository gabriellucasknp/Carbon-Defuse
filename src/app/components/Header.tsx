import svgPaths from "../../imports/svg-hfd06lx9tq";

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1e821000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p32206a80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-[#00a63e] h-[80.571px] relative shrink-0 to-[#096] w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#008236] border-b-[0.571px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.571px] pt-[16px] px-[16px] md:px-[32px] relative size-full">
        <div className="h-[48px] relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between relative size-full">
              <div className="h-[48px] relative shrink-0 w-[182.402px]">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
                  <Icon />
                  <div className="flex-[1_0_0] h-[48px] min-w-px relative">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="h-[28px] relative shrink-0 w-full">
                        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] md:leading-[28px] left-0 not-italic text-[18px] md:text-[20px] text-white top-[-1.43px] whitespace-nowrap">Carbon Defuse</p>
                      </div>
                      <div className="h-[20px] relative shrink-0 w-full hidden md:block">
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#dcfce7] text-[14px] top-[-0.43px] whitespace-nowrap">by Taggy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
