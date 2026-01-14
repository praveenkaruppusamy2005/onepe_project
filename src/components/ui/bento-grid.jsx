import { ArrowRightIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const BentoGrid = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 md:grid-cols-3",
        className
      )}
      {...props}>
      {children}
    </div>
  );
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  children,
  ...props
}) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl border border-neutral-200 bg-white p-6",
      // Default spans - will be overridden by className prop
      "col-span-1 row-span-1",
      // light styles
      "shadow-[0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-[0_-20px_80px_-20px_#ffffff1f_inset]",
      // hover styles
      "transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(0,0,0,.05),0_4px_8px_rgba(0,0,0,.1),0_16px_32px_rgba(0,0,0,.1)]",
      className
    )}
    {...props}>
    {background && <div className="absolute inset-0">{background}</div>}
    <div className="relative z-10 flex h-full flex-col gap-4">
      {Icon && (
        <div className="flex h-12 w-12 items-center justify-center transition-transform duration-300 group-hover:scale-110">
          {typeof Icon === 'function' ? <Icon /> : Icon}
        </div>
      )}
      <div className="flex flex-col gap-2">
        {name && (
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            {name}
          </h3>
        )}
        {description && (
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        )}
      </div>
      {children && <div className="mt-auto">{children}</div>}
      {cta && href && (
        <div className="mt-auto pt-2">
          <Button 
            variant="link" 
            asChild 
            size="sm" 
            className="h-auto p-0 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            <a href={href}>
              {cta}
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      )}
    </div>
  </div>
)

export { BentoCard, BentoGrid }
