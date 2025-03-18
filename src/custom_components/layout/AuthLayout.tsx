import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ShieldCheck } from "lucide-react";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  footer?: React.ReactNode;
  showLogo?: boolean;
  className?: string;
}

const AuthLayout = ({
  children,
  title,
  description,
  footer,
  showLogo,
  className,
}: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background to-muted/30">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="w-full max-w-md z-10">
        <Card className={cn("shadow-lg border-muted/30", className)}>
          {showLogo && (
            <div className="flex justify-center -mt-6">
              <div className="bg-primary text-primary-foreground p-3 rounded-full shadow-md">
                <ShieldCheck className="h-6 w-6" />
              </div>
            </div>
          )}

          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              {title}
            </CardTitle>
            {description && (
              <CardDescription className="text-center">
                {description}
              </CardDescription>
            )}
          </CardHeader>

          <CardContent>{children}</CardContent>

          {footer && (
            <>
              <Separator />
              <CardFooter className="flex justify-center p-4">
                {footer}
              </CardFooter>
            </>
          )}
        </Card>
      </div>
    </div>
  );
};

export default AuthLayout;