import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
}

export default function GradientButton({ children, className, ...props }: GradientButtonProps) {
  return (
    <Button 
      className={cn(
        "gradient-primary hover:shadow-lg hover:shadow-primary/25 hover:translate-y-[-2px] transition-all duration-300 font-semibold",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
