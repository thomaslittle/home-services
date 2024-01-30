import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

const RatingTooltip = () => {
  // hardcoded tooltips - populate these with data when we have it
  let tooltipInfo = "Lorem ipsum dolor sit amet consectetur. Pellentesque elit est sodales tristique consectetur tincidunt.";
  const tooltipPercentage = "80%";

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" fill="black" className="bi bi-info-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
          </svg>
        </TooltipTrigger>
        <TooltipContent className="w-80 rounded-md border-b border-l border-r border-t border-green-500 bg-white p-3 shadow-md" alignOffset={-5} align="start" sideOffset={14} side={"right"}>
          <TooltipPrimitive.Arrow width={16} height={8} asChild className="absolute -left-3 z-10 fill-white stroke-green-500 stroke-2">
            <>
              <div
                className="absolute top-0
                  border-l-[11px] border-r-[11px]
                  border-t-[10px] border-l-transparent
                  border-r-transparent border-t-green-500"
              ></div>
              <div
                className="absolute -top-1 h-0 w-1
            border-l-[12px] border-r-[12px]
            border-t-[12px] border-l-transparent
            border-r-transparent border-t-white"
              ></div>
            </>
          </TooltipPrimitive.Arrow>
          <p className="font-serif text-base text-gray-500">{tooltipInfo}</p>
          <p className="mt-2 text-center text-sm font-bold text-gray-500">
            BETTER THAN <span className="text-teal-700">{tooltipPercentage}</span> OF COMPANIES
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
export default RatingTooltip;
